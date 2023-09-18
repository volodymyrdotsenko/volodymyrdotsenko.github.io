// calculator.js
; (function ($) {
    "use strict";

    let Util = window.bootstrap.Util;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'calculator';
    var VERSION = '1.0.0';
    var DATA_KEY = 'bs.calculator';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
        CLICK: "click" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
        KEYDOWN: "keydown" + EVENT_KEY,
        INPUT: "input" + EVENT_KEY,
        SELECT_CHANGED: "changed.bs.select",
    };
    var ClassName = {
        ACTIVE: 'active',
        LOADING: 'loading',
        HIDE: 'd-none',
    };
    var Selector = {
        METAL_DEFAULT: '#page-metal-default',
        ACTIVE: '.active',
        DATA_TOGGLE_METAL: '[data-toggle="metal"]',
        DATA_SELECT_SAMPLE: '[data-select="sample"]',
        DATA_ITEM_SAMPLE: '[data-item="sample"]',
        DATA_INPUT_WEIGHT: '[data-input="weight"]',
        DATA_SELECT_PAYMETHOD: '[data-select="paymethod"]',
        DATA_BUTTON_CALCULATE: '[data-button="calculate"]',
        DATA_BLOCK_TOTAL: '[data-block="total"]',
        DATA_BLOCK_INFO: '[data-block="info"]',
        DATA_TOTAL_RESULT: '[data-total="result"]',
        DATA_ITEM_PAYMETHOD_INFO: '[data-item="paymethod-info"]',
    };
    let DB = {
        "metal": 1, // default
        "sample": "",
        "weight": "",
        "paymethod": ""
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Calculator =
    /*#__PURE__*/
    function () {
        function Calculator(element, config) {
            this._element = element;
            // this._config = this._getConfig(config);
            this._config = config;
        } // Getters

        var _proto = Calculator.prototype;

        _proto._db = {
            "metal": 1, // default
            "sample": "",
            "weight": "",
            "paymethod": ""
        };
        _proto._select_sample =  $(Selector.DATA_SELECT_SAMPLE);
        _proto._input_weight =  $(Selector.DATA_INPUT_WEIGHT);
        _proto._select_paymethod =  $(Selector.DATA_SELECT_PAYMETHOD);
        _proto._button_calculate =  $(Selector.DATA_BUTTON_CALCULATE);
        _proto._block_total =  $(Selector.DATA_BLOCK_TOTAL);
        _proto._total_result =  $(Selector.DATA_TOTAL_RESULT);
        _proto._block_info =  $(Selector.DATA_BLOCK_INFO);

        _proto.triggerEvents = function triggerEvents(e) {
            if(DB.sample && DB.weight && DB.paymethod){
                this._button_calculate.prop('disabled', false);
            }else{
                this._button_calculate.prop('disabled', true);
            }
        }
        _proto.metaltoggle = function metaltoggle(e) {
            if ($(this._element).hasClass(ClassName.ACTIVE)) {
                return;
            }
            Calculator._clearMetals();
            this.metalshow(true);
        };
        _proto.metalshow = function metalshow(use) {
            // metal
            this._element.focus();
            this._element.setAttribute('data-active', true);
            $(this._element).toggleClass(ClassName.ACTIVE);
            DB.metal = $(this._element).data("id");
            // Sample
            Calculator._clearSample();
            var sample_group = Calculator._getParentFromElement(this._element);
            if(sample_group){
                sample_group.removeAttribute('hidden');
                let $selectpicker = $(sample_group).closest(".selectpicker");
                if($selectpicker.length > 0){
                    let data = $selectpicker.data('selectpicker');
                    data.$button.dropdown('hide');
                    $selectpicker.selectpicker('val', []);
                    $selectpicker.selectpicker('refresh');
                    DB.sample = "";
                    this.triggerEvents();
                }
            }
        };
        _proto.weightkeydown = function weightkeydown(e) {
            if (e.defaultPrevented) {return}
            let code = dispatchForCode(e);
            let inputValue = e.target.value.replace(/\D/g, '');
            if ((code == "Backspace" || code == 8) && inputValue.length == 1) {
                DB.weight = e.target.value = "";
                this.triggerEvents();
            }
        };
        _proto.weightinput = function weightinput(e) {
            var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            formattedInputValue = "";
            if (!inputNumbersValue) {
                return input.value = "";
            }
            // 100000 гр. max.
            formattedInputValue = inputNumbersValue.substring(0, 6);
            DB.weight = input.value = formattedInputValue;
            this.triggerEvents();
        };
        _proto.calculate = function calculate(e) {
            if(!window.csrftoken){
                alert("Нет ответа от сервера!");
                return false;
            }
            let self = this;
            var data = $.extend({}, {'event ': 'calculate'}, DB);
            $.ajax({
                type: "POST",
                url: '/api/calculator',
                data: data,
                dataType: 'json',
                async : false,
                beforeSend: function(e,b){
                    self._total_result.text("0");
                    self._button_calculate.addClass('loading');
                    self._button_calculate.addClass(ClassName.LOADING);
                    Calculator._clearInfo();
                },
                success: function(data){
                    if(data.success){
                        self._total_result.text(data.formatted_result);
                        $('[data-id="'+DB.paymethod+'"]', self._block_info).removeClass(ClassName.HIDE);
                    }else{
                        self._total_result.text("0");
                        alert("Не удалось расчитать!");
                    }
                },
                error: function(r,a,b){
                    console.log('error:', [r.responseText]);
                    alert("Не удалось отправить!");
                },
                complete : function (r, t) {
                    self._button_calculate.removeClass(ClassName.LOADING);
                }
            });
            return false;
        };

        return Calculator;
    }();

    Calculator._clearMetals = function _clearMetals(event) {
        var toggles = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE_METAL));
        for (var i = 0, len = toggles.length; i < len; i++) {
            toggles[i].setAttribute('data-active', false);
            $(toggles[i]).removeClass(ClassName.ACTIVE);
        }
    };
    Calculator._clearSample = function _clearSample(event) {
        var samples = [].slice.call(document.querySelectorAll(Selector.DATA_ITEM_SAMPLE));
        for (var i = 0, len = samples.length; i < len; i++) {
            samples[i].setAttribute('data-active', false);
            samples[i].setAttribute('hidden', 'hidden');
        }
    };
    Calculator._clearInfo = function _clearInfo(event) {
        var items = [].slice.call(document.querySelectorAll(Selector.DATA_ITEM_PAYMETHOD_INFO));
        for (var i = 0, len = items.length; i < len; i++) {
            items[i].setAttribute('data-active', false);
            $(items[i]).addClass(ClassName.HIDE);
        }
    };
    Calculator._getParentFromElement = function _getParentFromElement(element) {
        var parent;
        var selector = Util.getSelectorFromElement(element);
        if (selector) {
            parent = document.querySelector(selector);
        }
        return parent;
        // return parent || element.parentNode;
      } // eslint-disable-next-line complexity
    ;
    Calculator._jQueryInterface = function _jQueryInterface(config, event) {
        return this.each(function () {
            var data = $(this).data(DATA_KEY);
            var _config = typeof config === 'object' ? config : null;
            if (!data) {
                data = new Calculator(this, _config);
                $(this).data(DATA_KEY, data);
            }
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') {
                    throw new TypeError("No method named \"" + config + "\"");
                }
                data[config](event);
            }
        });
    };

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_METAL, function (e) {
        e.preventDefault();
        e.stopPropagation();
        Calculator._jQueryInterface.call($(this), 'metaltoggle', e);
    })
    .on(Event.KEYDOWN, Selector.DATA_INPUT_WEIGHT, function (e) {
        console.log('KEYDOWN:', this);
        Calculator._jQueryInterface.call($(this), 'weightkeydown', e);
    })
    .on(Event.INPUT, Selector.DATA_INPUT_WEIGHT, function (e) {
        console.log('INPUT:', this);
        Calculator._jQueryInterface.call($(this), 'weightinput', e);
    })
    .on(Event.SELECT_CHANGED, Selector.DATA_SELECT_SAMPLE, function (e) {
        console.log('SELECT_CHANGED:', this);
        e.preventDefault();
        e.stopPropagation();
        DB.sample = $(this).selectpicker('val');
        Calculator._jQueryInterface.call($(this), 'triggerEvents', e);
    })
    .on(Event.SELECT_CHANGED, Selector.DATA_SELECT_PAYMETHOD, function (e) {
        e.preventDefault();
        e.stopPropagation();
        DB.paymethod = $(this).selectpicker('val');
        Calculator._jQueryInterface.call($(this), 'triggerEvents', e);
    })
    .on(Event.CLICK, Selector.DATA_BUTTON_CALCULATE, function (e) {
        e.preventDefault();
        e.stopPropagation();
        Calculator._jQueryInterface.call($(this), 'calculate', e);
    });

    function trigger() {
        let $metal_default = $(Selector.METAL_DEFAULT);
        if($metal_default.length > 0){
            Calculator._jQueryInterface.call($metal_default, 'metaltoggle');
        }
    }
    
    // ----------------------------------------------
    // Init on load
    // ----------------------------------------------
    
    $(window).on('load', function () {
        trigger();
    });

})(jQuery);