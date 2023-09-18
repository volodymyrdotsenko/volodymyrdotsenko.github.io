; (function ($) {

    "use strict";

    // Go!

    $(window).on('load', function () {
        $('#widget-devimg').on('click', function () {
            $("body").toggleClass("devimg");
        });
    });

})(jQuery);
