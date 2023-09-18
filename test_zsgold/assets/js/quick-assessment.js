;(function ($) {
    "use strict";
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'quick-assessment';
    var VERSION = '1.0.0';
    var DATA_KEY = 'bs.quick-assessment';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var Event = {
        CLICK: "click" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
        KEYDOWN: "keydown" + EVENT_KEY,
        KEYUP: "keyup" + EVENT_KEY,
        INPUT: "input" + EVENT_KEY,
        SELECT_CHANGED: "changed.bs.select",
        CHANGED: "changed",
    };
    var ClassName = {
        ACTIVE: 'active',
        LOADING: 'loading',
        HIDE: 'd-none',
    };
    var Selector = {
        FORM_ID: '#form-quick-assessment',
        METAL_DEFAULT: '#page-metal-default',
        ACTIVE: '.active',
        DATA_SELECT_METAL: '[data-select="qa.metal"]',
        DATA_SELECT_SAMPLE: '[data-select="qa.sample"]',
        DATA_GROUP_SAMPLE: '[data-group="qa.sample"]',
        DATA_INPUT_WEIGHT: '[data-input="qa.weight"]',
        DATA_BUTTON_SEND: '[data-button="send"]',
        INPUT_FIRSTNAME: 'input[name="firstname"]',
        INPUT_PHONE: 'input[name="phone"]',
        INPUT_EMAIL: 'input[name="email"]',
        INPUT_CITY: 'input[name="city"]',
        INPUT_FILE: 'input[type="file"]',
        ALERT_DANGER: '.alert-danger',
        ALERT_SUCCESS: '.alert-success',
    };
    var Text = {
        "0": "Заявка отправлена успешно.",
        "1": "Не удалось отправить!"
    };
    let store = {
        "firstname": "",
        "phone": "",
        "email": "",
        "city": "",
        "metal": 1, // default
        "sample": "",
        "weight": "",
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
    var App =
    /*#__PURE__*/
    function () {
        function App(element, config) {
            this._form = element;
            this._config = config;
            // Init element Form
            this._select_metal = $(Selector.DATA_SELECT_METAL, this._form);
            this._select_sample = $(Selector.DATA_SELECT_SAMPLE, this._form);
            this._input_weight = $(Selector.DATA_INPUT_WEIGHT, this._form);
            this._btn_send = $(Selector.DATA_BUTTON_SEND, this._form);
            this._danger = $(Selector.ALERT_DANGER, this._form);
            this._success = $(Selector.ALERT_SUCCESS, this._form);
        }
        var _proto = App.prototype;
        _proto.initEvents = function() {
            let self = this;
            $(document)
            .on(Event.SELECT_CHANGED, Selector.DATA_SELECT_METAL, self._form, function (e) {
                e.preventDefault();
                e.stopPropagation();
                store.metal = $(this).selectpicker('val');
                // Changed Sample
                App._clearSample();
                let $group = $("#metal-"+store.metal+"-group-sample");
                if($group.length > 0){
                    $group[0].removeAttribute('hidden');
                    let data = self._select_sample.data('selectpicker');
                    data.$button.dropdown('hide');
                    self._select_sample.selectpicker('val', []);
                    self._select_sample.selectpicker('refresh');
                    store.sample = "";
                    // Auto triggerEvents()
                }else{
                    self.triggerEvents();
                }
            })
            .on(Event.SELECT_CHANGED, Selector.DATA_SELECT_SAMPLE, self._form, function (e) {
                e.preventDefault(),e.stopPropagation();
                store.sample = $(this).selectpicker('val');
                self.triggerEvents();
            })
            .on(Event.INPUT, Selector.INPUT_FIRSTNAME, self._form, function(e){self.input_firstname(e)})
            .on(Event.KEYUP, Selector.INPUT_PHONE, self._form, function(e){self.keyup_phone(e)})
            .on(Event.INPUT, Selector.INPUT_EMAIL, self._form, function(e){self.input_email(e)})
            .on(Event.INPUT, Selector.INPUT_CITY, self._form, function(e){self.input_city(e)});
            self._input_weight.on(Event.KEYDOWN, function(e){self.event_weightkeydown(e)});
            self._input_weight.on(Event.INPUT, function(e){self.event_weightinput(e)});
            self._btn_send.on(Event.CLICK,function(e){self.event_send(e)});
            // Default
            self._select_metal.selectpicker('val', ["1"]);
            self.clear_form();
        };
        _proto.event_send = function (e) {
            e.preventDefault(),e.stopPropagation();
            if(!window.csrftoken){
                this.danger_show(Text["1"]);
                return false;
            }
            // Данные форма
            let self = this;
            let formData = new FormData();
            // Изображения
            $.each($(Selector.INPUT_FILE, self._form), function(i,e){
                if(e.files.length >= 1){formData.append('file[]', e.files[0], e.files[0].name)}
            });
            // Остальные данные
            $.each(store,function(key,val){formData.append(key,val)});
            formData.append('stones',$('input[name="stones"]',self._form).is(":checked"));
            formData.append('page',window.location.href);
            // AJAX запрос
            $.ajax({type: 'POST', url: self._form.attr("action"), data: formData, cache: false, dataType: 'json',
                // отключаем обработку передаваемых данных, пусть передаются как есть
                processData: false,
                // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
                contentType: false,
                beforeSend: function(e,b){
                    self._btn_send.addClass(ClassName.LOADING);
                },
                // функция успешного ответа сервера
                success: function(r, status, jqXHR){
                    console.log('respond:', r);
                    if(r.success){
                        self.clear_form();
                        self.success_show(Text["0"]);
                    }else{
                        self.danger_show(Text["1"]);
                    }
                },
                // функция ошибки ответа сервера
                error: function(jqXHR, status, errorThrown){
                    console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
                    self.danger_show(Text["1"]);
                },
                complete: function (r, t) {
                    self._btn_send.removeClass(ClassName.LOADING);
                }
            });
        };
        _proto.alert_show = function(e, text){
            e.html(text).removeClass(ClassName.HIDE);
        };
        _proto.alert_hide_time = function(e){
            setTimeout(function(){e.html('').addClass(ClassName.HIDE)},5000);
        };
        _proto.danger_show = function(text){
            this.alert_show(this._danger, text);
            this.alert_hide_time(this._danger);
        };
        _proto.success_show = function(text){
            this.alert_show(this._success, text);
            this.alert_hide_time(this._success);
        };
        _proto.triggerEvents = function(log) {
            if(log !== undefined){
                console.log('triggerEvents', store);
            }
            if(store.firstname && store.phone && store.email && store.city && store.metal && store.sample && store.weight){
                this._btn_send.prop('disabled', false);
            }else{
                this._btn_send.prop('disabled', true);
            }
        };
        _proto.event_weightkeydown = function(e) {
            if (e.defaultPrevented) {return}
            let code = dispatchForCode(e);
            let inputValue = e.target.value.replace(/\D/g, '');
            if ((code == "Backspace" || code == 8) && inputValue.length == 1) {
                store.weight = e.target.value = "";
                this.triggerEvents();
            }
        };
        _proto.event_weightinput = function(e) {
            var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            formattedInputValue = "";
            if (!inputNumbersValue) {
                return input.value = "";
            }
            // 100000 гр. max.
            formattedInputValue = inputNumbersValue.substring(0, 6);
            store.weight = input.value = formattedInputValue;
            this.triggerEvents();
        };
        _proto.input_firstname = function(e){
            store.firstname = e.target.value;
            this.triggerEvents();
        };
        _proto.keyup_phone = function(e){
            store.phone = e.target.value;
            this.triggerEvents();
        };
        _proto.input_email = function(e){
            store.email = validateEmail(e.target.value)?e.target.value:"";
            this.triggerEvents();
        };
        _proto.input_city = function(e) {
            store.city = e.target.value;
            this.triggerEvents();
        };
        _proto.clear_form = function() {
            let self = this;
            // Очистка изображений
            $.each($(Selector.INPUT_FILE, self._form), function(i, e) {
                e.value="",$(e).trigger('change');
            });
            $(Selector.INPUT_FIRSTNAME, self._form).val("");
            $(Selector.INPUT_PHONE, self._form).val("");
            $(Selector.INPUT_EMAIL, self._form).val("");
            $(Selector.INPUT_CITY, self._form).val("");
            self._input_weight.val("");
        };
        return App;
    }();
    App._clearSample = function _clearSample(event) {
        var samples = [].slice.call(document.querySelectorAll(Selector.DATA_GROUP_SAMPLE));
        for (var i = 0, len = samples.length; i < len; i++) {
            samples[i].setAttribute('data-active', false);
            samples[i].setAttribute('hidden', 'hidden');
        }
    };
    App._onload = function() {
        let $form = $(Selector.FORM_ID);
        if($form.length > 0) {
            var data = $form.data(DATA_KEY);
            if (!data) {
                data  = new App($form, {});
                $form.data(DATA_KEY, data);
            }
            data['initEvents']();
        }
    }
    // ----------------------------------------------
    // Init on load
    // ----------------------------------------------
    $(window).on('load', function () {
        App._onload();
    });
})(jQuery);
