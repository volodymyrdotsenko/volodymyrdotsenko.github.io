;(function ($) {
    
    "use strict";

    let Modal = {
        is_init: false,
        toggle: "",
        element: null,
        form: null,
        name: null,
        submit: null,
        danger: null,
        success: null,
        coin_id: null,
        init: function(){
            if(this.is_init){return}
            this.element = $(Selector.COINS_MODAL);
            this.form = $('form', this.element);
            this.name = $('.input-product-name', this.element);
            this.submit = $('.form-btn-send', this.element);
            this.danger = $('.alert-danger', this.element);
            this.success = $('.alert-success', this.element);
            this.iname = this.form.find('[name="coins_modal_input_name"]');
            this.iphone = this.form.find('[name="coins_modal_input_phone"]');
            let self = this;
            this.submit.on(Event.CLICK, function (e) {
                e.preventDefault(),
                e.stopPropagation();
                if(!window.csrftoken){
                    self.show_danger('Не удалось отправить!');
                    return false;
                }
                self.clear();
                let name = self.iname.val();
                let phone = self.iphone.val();
                if(!name){
                    self.show_danger('Введите Имя!');
                    return false;
                }
                if(!phone){
                    self.show_danger('Введите Телефон!');
                    return false;
                }
                let url = self.form.attr("action");
                let data = {
                    event:self.toggle,id:self.coin_id,
                    name:name,phone:phone,
                    page:window.location.href,
                };
                $.ajax({type: "POST",dataType:'json',async:false,url:url,data:data,
                    success: function (data) {
                        if(data.success){
                            self.iname.val(""),self.iphone.val(""),
                            self.show_success('Заявка отправлена успешно.');
                        }else{
                            self.show_danger('Не удалось отправить!');
                        }
                    },
                    error: function (r, a, b) {
                        console.log('error:', [r.responseText]);
                        self.show_danger('Не удалось отправить!');
                    },
                    complete : function (r, t) {}
                });
                return false;
            });
            this.element.on('hidden.bs.modal', function (event) {
                self.clear();
            });
            this.is_init = true;
        },
        url: function(){
            return this.form.attr("action")
        },
        clear: function(){
            this.success.html('').addClass('d-none'),
            this.danger.html('').addClass('d-none');
        },
        show: function(){
            this.element.modal('show');
        },
        show_success: function(text){
            this.success.html(text).removeClass('d-none');
        },
        show_danger: function(text){
            this.danger.html(text).removeClass('d-none');
        },
        onchange: function(toggle, coin_id, coin_title){
            this.toggle = toggle;
            this.coin_id = coin_id;
            this.coin_title = coin_title;
            this.name.text(coin_title);
            this.element.modal('show');
        },
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    let NAME = 'coins';
    let VERSION = '1.0.0';
    let DATA_KEY = 'bs.' + NAME;
    let EVENT_KEY = "." + DATA_KEY;
    let DATA_API_KEY = '.data-api';
    let Event = {
        CLICK: "click" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    };
    let ClassName = {
        ACTIVE: 'active'
    };
    let Selector = {
        ACTIVE: '.active',
        DATA_ITEM_COIN_SLIDER: '[data-item="coin-slider"]',
        DATA_TOGGLE_COIN_OBVERSE: '[data-toggle="coin-obverse"]',
        DATA_TOGGLE_COIN_REVERSE: '[data-toggle="coin-reverse"]',
        COIN_IMG_OBVERSE: '.coin-img-obverse',
        COIN_IMG_REVERSE: '.coin-img-reverse',
        COIN_TOGGLE_CATEGORY: '.coin-toggle-category',
        DATA_ITEM_PRODUCT: '[data-item="product"]',
        DATA_TOGGLE_COIN_BAY: '[data-toggle="coin-bay"]',
        DATA_TOGGLE_COIN_SELL: '[data-toggle="coin-sell"]',
        COINS_MODAL: '#coins_modal',
    };
    let SHIFT = "67px";
    let TIMER = 400;
    let ZINDEX = 10;
    let Coin = function () {
        function Coin(element, config) {
            this._element = element;
            this._data = $(this._element).data();
            this._config = config;            
            this._obverse = $(Selector.DATA_TOGGLE_COIN_OBVERSE, this._element);
            this._reverse = $(Selector.DATA_TOGGLE_COIN_REVERSE, this._element);
            this._img_obverse = $(Selector.COIN_IMG_OBVERSE, this._element);
            this._img_reverse = $(Selector.COIN_IMG_REVERSE, this._element);
        }
        let _proto = Coin.prototype;
        _proto.toggle_obverse = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if(this._obverse.hasClass(ClassName.ACTIVE)){
                return false
            }
            this.animate_obverse(ZINDEX);
            this.animate_reverse(ZINDEX - 1);
            this._obverse.addClass(ClassName.ACTIVE);
            this._reverse.removeClass(ClassName.ACTIVE);
        };
        _proto.toggle_reverse = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if(this._reverse.hasClass(ClassName.ACTIVE)){
                return false
            }
            this.animate_obverse(ZINDEX-1);
            this.animate_reverse(ZINDEX);
            this._obverse.removeClass(ClassName.ACTIVE);
            this._reverse.addClass(ClassName.ACTIVE);
        };
        _proto.animate_obverse = function(z){
            this._img_obverse.animate({"left": "-="+SHIFT}, TIMER, function(){$(this).css('z-index', z)}).animate({"left": "+="+SHIFT}, TIMER);
        }
        _proto.animate_reverse = function(z){
            this._img_reverse.animate({"left": "+="+SHIFT}, TIMER, function(){$(this).css('z-index', z)}).animate({"left": "-="+SHIFT}, TIMER);
        }
        _proto.toggle_bay = function(e) {
            e.preventDefault(),e.stopPropagation();
            this.toggle_modal_show('bay');
        };
        _proto.toggle_sell = function(e) {
            e.preventDefault(),e.stopPropagation();
            this.toggle_modal_show('sell');
        };
        _proto.toggle_modal_show = function(toggle) {
            if(!Modal.is_init){Modal.init()}
            Modal.onchange(toggle, this._data.id, this._data.title);
        };
        return Coin;
    }();

    Coin._jQueryInterface = function _jQueryInterface(config, event) {
        return this.each(function () {
            let $element = $(this).closest(Selector.DATA_ITEM_PRODUCT);
            if($element.length == 0){
                throw new TypeError("Element not found. (Selector: " + Selector.DATA_ITEM_PRODUCT + ")");
            }
            let data = $element.data(DATA_KEY);
            let _config = typeof config === 'object' ? config : null;
            if (!data) {
                data = new Coin($element[0], _config);
                $element.data(DATA_KEY, data);
            }
            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') {
                    throw new TypeError("No method named \"" + config + "\"");
                }
                data[config](event);
            }
        });
    };

    // Shuffle
    let Shuffle = {
        ALL_ITEMS: 'all',
        DELIMITER: null,
        CATEGORY_KEY: 'group',
        FILTER_ATTRIBUTE_KEY: 'groups',
        PRODUCT_ITEM: '.product-item',
    };

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_COIN_OBVERSE, function (e) {
        e.preventDefault(),e.stopPropagation();
        Coin._jQueryInterface.call($(this), 'toggle_obverse', e);
    })
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_COIN_REVERSE, function (e) {
        e.preventDefault(),e.stopPropagation();
        Coin._jQueryInterface.call($(this), 'toggle_reverse', e);
    })
    .on(Event.CLICK_DATA_API, Selector.COIN_TOGGLE_CATEGORY, function (e) {
        e.preventDefault(),e.stopPropagation();
        if($(this).hasClass(ClassName.ACTIVE)){
            return false
        }
        $(Selector.COIN_TOGGLE_CATEGORY).removeClass(ClassName.ACTIVE);
        $(this).addClass(ClassName.ACTIVE);

        var category = this.getAttribute('data-' + Shuffle.CATEGORY_KEY);
        if(category == Shuffle.ALL_ITEMS){
            $(Shuffle.PRODUCT_ITEM).removeClass('d-none');
        }else{
            $.each($(Shuffle.PRODUCT_ITEM), function (i, el){
                let attr = el.getAttribute('data-' + Shuffle.FILTER_ATTRIBUTE_KEY);
                let keys = Shuffle.DELIMITER ? attr.split(Shuffle.DELIMITER) : JSON.parse(attr);
                if(keys.includes(category)){
                    $(this).removeClass('d-none');
                }else{
                    $(this).addClass('d-none');
                }
            });
        }
    })
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_COIN_BAY, function (e) {
        e.preventDefault(),e.stopPropagation();
        Coin._jQueryInterface.call($(this), 'toggle_bay', e);
    })
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_COIN_SELL, function (e) {
        e.preventDefault(),e.stopPropagation();
        Coin._jQueryInterface.call($(this), 'toggle_sell', e);
    });

    // ----------------------------------------------
    // Init on load
    // ----------------------------------------------
    
    $(window).on('load', function () {
        // console.log('coins.js: window.on.load');
    });

})(jQuery);
