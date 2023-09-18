window.csrftoken = null;

function dispatchForCode(e) {
    let code;
    if (e.key !== undefined) {
        code = e.key;
    } else if (e.keyIdentifier !== undefined) {
        code = e.keyIdentifier;
    } else if (e.keyCode !== undefined) {
        code = e.keyCode;
    }
    return code
};

function getInputNumbersValue(input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
}
const RE_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email) {
    return RE_EMAIL.test(email);
}

function auto_grow(e) {
    e.style.height = "5px";
    e.style.height = (e.scrollHeight + 12)+"px";
}

;(function ($) {

    "use strict";

    let Util = window.bootstrap.Util;

    // ----------------------------------------------
    // Animate on scroll
    // ----------------------------------------------

    $('.scroll-to').on('click', function () {
        if ($(window).width() < 991) {
            $('.navbar-toggler').trigger("click");
        }
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    // ----------------------------------------------
    // Price range
    // ----------------------------------------------

    var priceRange = $('.price-range');
    var priceValue = $('.price-value');

    priceValue.html(priceRange.val());
    $(document).on('input', '.price-range', function () {
        priceValue.html(priceRange.val());
    });

    // ----------------------------------------------
    // Sticky header
    // ----------------------------------------------

    var navbarSticky = $('.navbar-sticky');
    var headerSticky = $('.header-sticky');

    // When reload page - check if page has offset
    if ($(document).scrollTop() > 94) {
        navbarSticky.addClass('sticked');
    }

    // Add sticky menu on scroll
    $(document).on('bind ready scroll', function () {
        var docScroll = $(document).scrollTop();
        if (docScroll > 5) {
            // if (navbarSticky.hasClass('navbar-dark')) {
            //     navbarSticky.addClass('navbar-light navbar-active-dark');
            //     navbarSticky.removeClass('navbar-dark');
            // }
            navbarSticky.addClass('scrolled');
            headerSticky.addClass('active');

        } else {
            // if (navbarSticky.hasClass('navbar-active-dark')) {
            //     navbarSticky.removeClass('navbar-light');
            //     navbarSticky.addClass('navbar-dark');
            // }
            navbarSticky.removeClass('scrolled');
            headerSticky.removeClass('active');
        }
    });


    $.each($('.img-hover'), function (i, n) {
        var $n = $(n);
        $n.on({
            mouseenter: function () {
                $n.attr('src', $n.attr('data-img-hover'))
            },
            mouseleave: function () {
                $n.attr('src', $n.attr('data-img'));
            }
        });
    });

    // ----------------------------------------------
    // Carousel
    // ----------------------------------------------

    $.each($('.owl-carousel'), function (i, n) {

        var $this = $(n),
            $dataItems = $this.data('items') !== undefined ? $this.data('items') : 1,
            $dataNav = $this.data('nav') !== undefined ? $this.data('nav') : false,
            $dataAutoplay = $this.data('autoplay') !== undefined ? $this.data('autoplay') : false,
            $dataDots = $this.data('dots') !== undefined ? $this.data('dots') : false,
            $dataMargin = $this.data('margin') !== undefined ? $this.data('margin') : 0;

        var arrowIcons = [
            '<span class="icon icon-chevron-left"></span>',
            '<span class="icon icon-chevron-right"></span>'
        ];

        $this.owlCarousel({
            loop: true,
            autoplay: $dataAutoplay,
            items: $dataItems,
            margin: $dataMargin,
            nav: $dataNav,
            dots: $dataDots,
            smartSpeed: 1000,
            navText: arrowIcons,
            onTranslated: startAnimation,
            onTranslate: resetAnimation
        });

        resetAnimation(); // Reset effects all on initalization
        startAnimation(); // Start animation on first slide

        function startAnimation(event) {

            // Find active slide
            var activeItem = $(n).find('.owl-item.active'),
                timeDelay = 100;

            $.each(activeItem.find('.animated'), function (j, m) {

                // Fetch active slide
                var item = $(m);
                item.css('animation-delay', timeDelay + 'ms');
                timeDelay = timeDelay + 180;

                // Add animation
                item.removeClass('fadeOut');
                item.addClass(item.data('start'));

            });
        }

        function resetAnimation(event) {

            // Catch all slides
            var items = $(n).find('.owl-item');
            var $item = $(n).find('.owl-item .item');

            // Add animation end
            $.each(items.find('.animated'), function (j, m) {
                var item = $(m);
                item.removeClass(item.data('start'));
                item.addClass('fadeOut');
            });
        }

        // Fit to window height
        if ($this.hasClass('owl-fullscreen')) {
            var navHeight = $('.nav-wrapper').height();
            if (navHeight === null) {
                navHeight = 0;
            }
            $this.find('.slide').height($(window).height());
        }

    });

    // ----------------------------------------------------
    // Rellax
    // ----------------------------------------------------

    if ($(window).width() > 1200) {
        if ($('.rellax').length > 0) {
            var rellax = new Rellax('.rellax', {
                center: true
            });
        }
    }

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.scroll-opacity').css({
            opacity: function () {
                var wh = $(window).height();
                return 1 - (scrollTop / wh);
            }
        });
    });

    // ----------------------------------------------------
    // In View - Scroll Animate on scroll
    // ----------------------------------------------------

    if (typeof (inView) !== "undefined") {
        // Reveal images on viewport
        inView('.reveal')
            .on('enter', function (el) {
                $.each($(el), function (i, n) {
                    setTimeout(function () {
                        $(n).addClass('revealed');
                    }, 500);
                });
            })
            .on('exit', function (el) {
                $(el).removeClass('revealed');
            });
        // Lazy load images 
        inView('img.lazy')
            .on('enter', function (img) {
                $.each($(img), function (i, n) {
                    $(n).attr('src', $(n).attr('data-src'));
                });
            })
    }

    // ----------------------------------------------------
    // Image Lazy load 
    // ----------------------------------------------------

    $.each($('img.lazy'), function (i, n) {
        $(n).attr('src', $(n).attr('data-src'));
    });


    // ----------------------------------------------------
    // Lavalamp
    // ----------------------------------------------------

    $.each($('.nav-lavalamp'), function (i, n) {
        var $n = $(n),
            $dataClick = $n.data('click') !== undefined ? $n.data('click') : true;

        $n.lavalamp({
            enableHover: false,
            setOnClick: $dataClick,
            enableFocus: true,
            duration: 300
        });
    });

    // ----------------------------------------------
    // Toggle show
    // ----------------------------------------------

    $('.toggle-show').on('click', function (e) {
        var $this = $(this),
            $body = $('body'),
            $thisId = $this.attr('data-show');

        $body.find("#" + $thisId).toggleClass('show');
        $body.toggleClass('overflow-hidden');
        e.preventDefault();
    });

    // ----------------------------------------------
    // Toggle info
    // ----------------------------------------------

    $('.toggle-info').on('click', function (e) {
        $(this).toggleClass('show');
    });

    // ----------------------------------------------
    // Tooltip
    // ----------------------------------------------

    $('[data-toggle="tooltip"]').tooltip();

    // ----------------------------------------------
    // Tabzy
    // ----------------------------------------------

    $.each($('.tabzy'), function (i, n) {

        var $this = $(n),
            $dataFullscreen = $this.data('fullscreen') !== undefined ? $this.data('fullscreen') : false,
            $dataEvent = $this.data('event') !== undefined ? $this.data('event') : 'hover';

        $this.tabzy({
            fullScreen: $dataFullscreen,
            event: $dataEvent
        });

    });

    // ----------------------------------------------
    // Isotope
    // ----------------------------------------------

    var $istpWrap = $.each($('.istp-wrap'), function (i, el) {
        $('body').imagesLoaded(function () {
            var $el = $(el);
            var elHorizontal = true;

            if ($el.hasClass('istp-wrap-vertical')) {
                elHorizontal = false;
            }

            console.log("Images are loaded!");
            $el.isotope({
                itemSelector: '.istp',
                masonry: {
                    horizontalOrder: elHorizontal
                }
            });
        });
    });

    var $istpBtn = $('.btn-istp');
    $istpBtn.on('click', function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $istpWrap.isotope({ filter: "" });
        }
        else {
            $istpBtn.removeClass('active');
            $this.addClass('active');
            $istpWrap.isotope({
                filter: $this.attr('data-filter')
            });
        }
    });

    function getScroll() {
        if (window.pageYOffset != undefined) {
            return [pageXOffset.toFixed(), pageYOffset.toFixed()];
        } else {
            var sx, sy, d = document,
                r = d.documentElement,
                b = d.body;
            sx = r.scrollLeft || b.scrollLeft || 0;
            sy = r.scrollTop || b.scrollTop || 0;
            return [sx.toFixed(), sy.toFixed()];
        }
    }

    let $BODY = $(document.body);
    var window_scroll_y = 0;
    const MENU_TOGGLE_CLASS = 'mm-show';
    // const MENU_TOGGLE_SELECTOR = '.mm-show';
    let timer_scroll = null;
    const SCROLLSPY_SHOW = 680;
    const SCROLLSPY_SHOW_SELECTOR = ".scrollspy";
    const SCROLLSPY_SHOW_CLASS = "d-none";

    window.addEventListener("scroll", (event) => {
        let xy = getScroll();
        if (!$BODY.hasClass(MENU_TOGGLE_CLASS)) {
            // Отслеживаем скрол
            window_scroll_y = xy[1];
        }
        if(timer_scroll !== null) {
            clearTimeout(timer_scroll);        
        }
        timer_scroll = setTimeout(function() {
            if(xy[1] >= SCROLLSPY_SHOW){
                $(SCROLLSPY_SHOW_SELECTOR).removeClass(SCROLLSPY_SHOW_CLASS);
            }else{
                $(SCROLLSPY_SHOW_SELECTOR).addClass(SCROLLSPY_SHOW_CLASS);
            }
        }, 150);
    }, false);

    // Открыть мобильное навигационное меню
    $('.gs-mobile-menu-show').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $BODY.addClass(MENU_TOGGLE_CLASS);
    });
    // Закрыть мобильное навигационное меню
    $('.gs-mobile-menu-hide').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $BODY.removeClass(MENU_TOGGLE_CLASS);
        // Прокрутим к ...
        window.scrollTo({
            top: parseInt(window_scroll_y),
            // behavior: "smooth"
        });
    });

    let $requestcall_modal = $('#requestcall_modal');
    $('#requestcall_modal .gs-requestcall-send-btn').on('click', function (e) {
        e.preventDefault();
        if(!window.csrftoken){
            alert("Не удалось отправить.");
            return false;
        }
        let $form = $requestcall_modal.find('form');
        let name = $form.find('[name=name]').val();
        let phone = $form.find('[name=phone]').val();
        let data = {
            'event ': 'header-requestcall',
            'name': name,
            'phone': phone,
        };
        $.ajax({
            type: "POST",
            url: '/requestcall',
            data: data,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $requestcall_modal.modal('hide');
                alert("Заявка отправлена.");
            },
            error: function (response) {
                console.log(response);
                alert("Не удалось отправить.");
            }
        });
        return false;
    });

    // **********************************************
    // **********************************************
    let product_pay = {
        productname: "",
        weight: "",
    };
    let $form_product_pay = $('#form-product-pay');

    if($form_product_pay.length > 0) {
        let $productpay_modal = $('#productpay_modal');
        let $form_product_pay_btn = $form_product_pay.find('#form-product-pay-btn').first();
        $form_product_pay_btn.on('click', function (e) {
            e.preventDefault();
            let form_productname_val = $form_product_pay.find('[name="productname"]').first().val();
            let form_weight_val = $form_product_pay.find('[name="weight"]').first().val();
            $productpay_modal.find('.input-product-name').text(form_productname_val);
            $productpay_modal.find('.input-product-weight').text(form_weight_val);
            $productpay_modal.modal('show');
            return false
        });

        let $productpay_modal_btn = $productpay_modal.find('.form-btn-send').first();

        $productpay_modal_btn.on('click', function (e) {
            e.preventDefault();
            if(!window.csrftoken){
                alert("Не удалось отправить.");
                return false;
            }
            let url = $form_product_pay.attr("action");
            let productname = $form_product_pay.find('[name="productname"]').val();
            let weight = $form_product_pay.find('[name="weight"]').val();

            let $form = $productpay_modal.find('form');
            let name = $form.find('[name="name"]').val();
            let phone = $form.find('[name="phone"]').val();

            let data = {
                'event': 'header-productpay',
                'productname': productname,
                'weight': weight,
                'name': name,
                'phone': phone,
            };
            console.log('data:', data);
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    $productpay_modal.modal('hide');
                    if(data.success){
                        alert("Заявка отправлена.");
                    }else{
                        alert("Не удалось отправить.");
                    }
                },
                error: function (response) {
                    console.log(response);
                    alert("Не удалось отправить.");
                }
            });
            return false
        });
    }



    // Setup
    function ajaxSetup() {
        let elem = $('[name=csrfmiddlewaretoken]');
        if(elem.length > 0){
            window.csrftoken = elem[0].value;
            $.ajaxSetup({
                headers: {"X-CSRFToken": window.csrftoken},
                type: "POST", dataType: 'json', async : false
            })
        }
    }

    // отмена для ссылок с атрибутом data-trigger="click" стандартного поведения
    $('.asa[data-trigger="hover"]').click(function(e){
        console.log('trigger hover');
        e.preventDefault();
        $(this).tooltip('hide');
    });

    // $().dropdown('toggle')

    $('#dropdownMenuGold').on('click.bs.dropdown', function (e) {
        // сделайте что-нибудь...
        console.log('сделайте что-нибудь...');
        e.preventDefault();
        $(this).dropdown('toggle');
    });

    // ----------------------------------------------
    // inputfile
    // ----------------------------------------------

    var type_allowed = ["image/jpeg", "image/png"];
    const MAX_BAYT = 2097152
    $.each($('.inputfile'), function (i, n) {
        let $this = $(n), $label = $this.next();
        $this.on('change', function(e){
            if(this.files.length >= 1){
                let file = this.files[0];
                if (type_allowed.indexOf(file.type) == -1) {
                    $label.removeClass('active');
                    alert("Выберите изображение.");
                    return false;
                }
                if(file.size > MAX_BAYT){
                    $label.removeClass('active');
                    alert("Максимальный размер файла 2 Мб.");
                    return false;
                }
                let fileName = '';
                $label.addClass('active');
                return true;
            }else{
                $label.removeClass('active');
                return false;
            }
        });
    });
    (function () {
        var allowed = ["image/jpeg", "image/png", "image/bmp", "image/pdf"];
        const MAX_BAYT = 2 * Math.pow(1024, 2);
        $.each($('form .upload-file'), function (i, n) {
            let $this = $(n), $label = $this.next();
            $this.on('change', function(e){
                if(this.files.length >= 1){
                    let file = this.files[0];
                    if (allowed.indexOf(file.type) == -1) {
                        $label.removeClass('active');
                        alert("Выберите изображение.");
                        return false;
                    }
                    let maxbayt = MAX_BAYT;
                    let maxmb = parseFloat($this.data('maxmb'));
                    if(maxmb){
                        maxbayt = maxmb * Math.pow(1024, 2)
                    }
                    if(file.size > maxbayt){
                        $label.removeClass('active');
                        alert("Максимальный размер файла "+ maxmb +" Мб.");
                        return false;
                    }
                    let fileName = '';
                    $label.addClass('active');
                    return true;
                }else{
                    $label.removeClass('active');
                    return false;
                }
            });
        });
    })();




    // Страница
    $(document).on('click.bs.toggleclick', '[data-toggle="toggleclick"]', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target;
        var selector = Util.getSelectorFromElement(this);
        if (selector) {
            target = document.querySelector(selector);
            if(target){
                $(this).toggleClass('active');
                $(target).toggleClass('d-none');
            }
        }
    });

    // ----------------------------------------------
    // Init on load
    // ----------------------------------------------

    $(window).on('load', function () {
        $(function () {
            $('[data-toggle="popover"]').popover({html:true})
          })
        $(SCROLLSPY_SHOW_SELECTOR).addClass('d-none');
        ajaxSetup();
        setTimeout(function () {
            // ----------------------------------------------------
            // Page loader
            // ----------------------------------------------------
            $('.loader').addClass('loaded');
            // ----------------------------------------------------
            // Wow js - Animate on scroll
            // ----------------------------------------------------
            if (typeof (WOW) !== "undefined") {
                new WOW().init();
            }
        }, 0);

		$('#sp-slides').sliderPro({
            autoplay: false,
			width: 405,
			height: 405,
			loop: true,
			buttons: false,
			thumbnailsPosition: 'left',
			thumbnailPointer: false,
			thumbnailWidth: 83,
            thumbnailHeight: 83,
            // Указывает, будет ли изображение центрировано
            centerImage: true,
            // Указывает, можно ли увеличить изображение больше, чем его исходный размер.
            allowScaleUp: false,
            // Указывает, будет ли высота ползунка отрегулирована в соответствии с высотой выбранного слайда.
            autoHeight: false,
            // Будет поддерживать все слайды на одной высоте, но позволит изменять ширину слайдов, если ориентация 
            // слайдов горизонтальная, и наоборот, если ориентация вертикальная.
            autoSlideSize: false,
            // Указывает, будут ли слайды перемешиваться.
            shuffle: false,
            // Указывает, будут ли слайды располагаться горизонтально или вертикально.
            // Default value: 'horizontal'
            // 'horizontal' and 'vertical'
            orientation: "horizontal",
            // Устанавливает расстояние между слайдами.
            slideDistance: 24,
            // Указывает, будут ли созданы кнопки со стрелками.
            arrows: true,
            // Указывает, будут ли блеклые стрелки на миниатюрах 
            // fadeThumbnailArrows: false,
			breakpoints: {
				768: {
                    width: 405,
                    height: 405,
					thumbnailsPosition: 'bottom',
					thumbnailWidth: 83,
					thumbnailHeight: 83
				},
				576: {
                    width: 300,
                    height: 300,
					thumbnailsPosition: 'bottom',
					thumbnailWidth: 83,
					thumbnailHeight: 83,
				}
			}
		});
    });

    let $purchase_city_region = $('#purchase-city-region');
    if($purchase_city_region.length > 0) {
        // Поиск точки на карте (для разработки)
        // let $area_img = $purchase_city_region.find('.map-area-img');
        // $area_img.on('mousedown', function(e) {
        //     let $area_img_w = $area_img.width();
        //     let $area_img_h = $area_img.height();
        //     let x = (((e.offsetX - 8) * 100) / $area_img_w).toFixed(2);
        //     let y = (((e.offsetY - 8) * 100) / $area_img_h).toFixed(2);
        //     alert('data-top="' + y + '" data-left="' + x + '"');
        // });
        // metka
        let $metka = $purchase_city_region.find(".metka").first();
        let $towns = $purchase_city_region.find(".town");
        $.each($towns, function (i, e) {
            let $town = $(e);
            let top = $town.data('top');
            let left = $town.data('left');
            $town.on({
                click: function (e) {
                    e.preventDefault();
                    $towns.removeClass('active');
                    $town.addClass('active');
                    $metka.css({top: top + "%", left: left + "%"});
                    return false
                }
            });
        });
    }


    // ----------------------------------------------
    // Product Catalog
    // ----------------------------------------------
    const PRODUCT_ORDER_SELECTOR = '[data-toggle="product-order"]';
    let $product_catalog = $('#product_catalog');
    if($product_catalog.length > 0) {
        let $catalog = $('[data-name="catalog"]', $product_catalog);
        let $form = $('form', $product_catalog);
        let $submit = $('[data-name="submit"]', $form);
        let $modal = $('#product_catalog_modal');

        $.each($product_catalog.find(PRODUCT_ORDER_SELECTOR), function (i, e) {
            $(e).on({
                click: function (e) {
                    e.preventDefault();
                    let $this = $(this);
                    let data = $this.data();
                    console.log('data',  data);

                    $catalog.data('product', data.title);
                    // 
                    $('[data-name="title"]', $modal).text(data.title);
                    $('[data-name="preview"]', $modal).attr('src', data.preview);
                    $modal.modal('show');
                    return false
                }
            });
        });
        // CATALOG 
        $submit.on({
            click: function (e) {
                e.preventDefault();
                if(!window.csrftoken){
                    alert("Не удалось отправить.");
                    return false;
                }
                let catalog_data = $catalog.data();
                let quantity = $form.find('[name="product_catalog_quantity"]').val();
                let phone = $form.find('[name="product_catalog_phone"]').val();
                let email = $form.find('[name="product_catalog_email"]').val();
                let name = $form.find('[name="product_catalog_name"]').val();
                if(!quantity){
                    alert('Введите Количество.');
                    return false;
                }
                if(!phone){
                    alert('Введите Телефон.');
                    return false;
                }
                if(!email){
                    alert('Введите E-mail.');
                    return false;
                }
                let data = {
                    'event': 'header-productpay-catalog',
                    'quantity': quantity,
                    'name': name,
                    'phone': phone,
                    'email': email,
                    'catalog': catalog_data.catalog,
                    'product': catalog_data.product,
                    'page': window.location.href
                };
                console.log(data);

                $.ajax({
                    type: "POST",
                    url: $form.attr("action"),
                    data: data,
                    dataType: 'json',
                    async : false,
                    success: function (data) {
                        if(data.success){
                            alert("Заявка отправлена.");
                        }else{
                            alert("Не удалось отправить.");
                        }
                        $modal.modal('hide');
                    },
                    error: function (r, a, b) {
                        console.log('error:', [r.responseText]);
                        alert("Не удалось отправить!");
                        $modal.modal('hide');
                    },
                    complete : function (r, t) {
                    }
                });
                return false;
            }
        });
    }

    // ----------------------------------------------
    // Call me back
    // ----------------------------------------------
    (function () {
        let $form = $('#form_send_time_phone');
        if($form.length > 0) {
            let $submit = $('.submit-btn', $form);
            let $danger = $('.alert-danger', $form);
            let $success = $('.alert-success', $form);
            $submit.on({
                click: function (e) {
                    e.preventDefault();
                    if(!window.csrftoken){
                        alert("Не удалось отправить.");
                        return false;
                    }
                    let time = $form.find('[name="time"]').val();
                    let phone = $form.find('[name="phone"]').val();
                    if(!time){
                        $danger.html('Выберите Время!').removeClass('d-none');
                        return false;
                    }
                    if(!phone){
                        $danger.html('Введите Телефон!').removeClass('d-none');
                        return false;
                    }
                    $danger.html('').addClass('d-none');
                    $success.html('').addClass('d-none');
                    let data = {'event':'header-time-phone','time':time,'phone':phone,'page':window.location.href};
                    $.ajax({type: "POST",dataType:'json',async:false,url:$form.attr("action"),data:data,
                        success: function (data) {
                            if(data.success){
                                $danger.html('').addClass('d-none');
                                $success.html('Заявка отправлена успешно.').removeClass('d-none');
                            }else{
                                $success.html('').addClass('d-none');
                                $danger.html('Не удалось отправить!').removeClass('d-none');
                            }
                        },
                        error: function (r, a, b) {
                            console.log('error:', [r.responseText]);
                            $success.html('').addClass('d-none');
                            $danger.html('Не удалось отправить!').removeClass('d-none');
                        },
                        complete : function (r, t) {}
                    });
                    return false;
                }
            });
        }
    })();

    // ----------------------------------------------
    // Form Send Request
    // ----------------------------------------------
    (function () {
        var ClassName = {
            ACTIVE: 'active',
            LOADING: 'loading',
            HIDE: 'd-none',
        };
        var Selector = {
            FORM: '.form-send-request',
            BUTTON: '[data-button="submit"]',
            ARIA_DESCRIBEDBY: '[aria-describedby]',
            INPUTS: 'input:not([type=file]), textarea',
            INPUT_FILE: 'input[type="file"]',
            TEXTAREA: 'textarea',
        };
        const TEXTAREA_MAXLENGTH = 1000;
        var TEXT = {
            "0": "Заявка отправлена успешно.",
            "1": "Не удалось отправить заявку!",
            "2": "Не возможно отправить заявку!",
            "3": "Не более "+ TEXTAREA_MAXLENGTH +" символов!",
        };
        $.each($(Selector.FORM), function (i, elem) {
            let $form = $(elem);
            let form_data = $form.data();
            let $submit = $form.find(Selector.BUTTON);
            let inputs = {};
            let files = {};
            let alert_show = function(type, text){
                $('.alert-'+type).html(text).removeClass(ClassName.HIDE);
            };
            let alert_hide_time = function(type){
                setTimeout(function(){
                    $('.alert-'+type).html('').addClass(ClassName.HIDE)}
                ,5000);
            };
            let reset = function(type){
                $.each(inputs, function (name, e) {
                    // $(e).val("");
                    e.value="",$(e).trigger('change');
                });
                $.each(files, function (name, e) {
                    e.value="",$(e).trigger('change');
                });
            };
            $(Selector.INPUTS, $form).each(function (i, e) {
                let name = e.getAttribute("name");
                if(name){inputs[name] = e}
            });
            $(Selector.INPUT_FILE, $form).each(function(i,e){
                let name = e.getAttribute("name");
                if(name){files[name] = e}
            });
            $submit.on({
                click: function (e) {
                    e.preventDefault();
                    if(!window.csrftoken){
                        alert_show('danger', TEXT["2"]);
                        return false;
                    }
                    let formData = new FormData();
                    let is_all_valid = true;
                    $.each(inputs, function (name, input) {
                        let is_required = input.getAttribute("required");
                        let selector = input.getAttribute("aria-describedby");
                        let helper = $('#'+selector);
                        let $input = $(input);
                        let data = $input.data();
                        let value = $input.val();
                        if(is_required && !value){
                            if(helper && data.errorempty){
                                helper.text(data.errorempty).removeClass(ClassName.HIDE);
                            }
                            is_all_valid = false;
                            return false; //this is equivalent of 'break' for jQuery loop
                        }
                        else if(input.tagName == 'TEXTAREA'){
                            // let maxlength = parseInt(input.getAttribute("maxlength"));
                            if(value.length > TEXTAREA_MAXLENGTH){
                                if(helper){
                                    helper.text(TEXT["3"]).removeClass(ClassName.HIDE);
                                }
                                is_all_valid = false;
                                return false;
                            }
                        }
                        else{
                            if(helper){
                                helper.text('').addClass(ClassName.HIDE);
                            }
                        }
                        formData.append(name, value);
                    });
                    // Изображения
                    $.each(files, function (name, e) {
                        if(e.files.length >= 1){
                            formData.append('file[]', e.files[0], e.files[0].name);
                        }
                    });
                    if(!is_all_valid){
                        return false
                    }
                    // Дополнительно
                    formData.append('page',window.location.href);
                    formData.append('form',form_data.form);

                    // AJAX запрос
                    $.ajax({type: 'POST', url: $form.attr("action"), data: formData, cache: false, dataType: 'json',
                        // отключаем обработку передаваемых данных, пусть передаются как есть
                        processData: false,
                        // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
                        contentType: false,
                        beforeSend: function(e,b){
                            $submit.prop('disabled', true);
                            $submit.addClass(ClassName.LOADING);
                        },
                        // функция успешного ответа сервера
                        success: function(r, status, jqXHR){
                            console.log('respond:', r);
                            if(r.success) {
                                alert_show('success', TEXT["0"]);
                                reset();
                            }else{
                                alert_show('danger', TEXT["1"]);
                            }
                            alert_hide_time('success');
                            alert_hide_time('danger');
                        },
                        // функция ошибки ответа сервера
                        error: function(jqXHR, status, errorThrown){
                            console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
                            alert_show('danger', TEXT["1"]);
                        },
                        complete: function (r, t) {
                            $submit.removeClass(ClassName.LOADING);
                            $submit.prop('disabled', false);
                        }
                    });
                }
            });
        });
    })();

})(jQuery);

