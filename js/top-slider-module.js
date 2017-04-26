var TopSliderModule = (function(){

    var $slider, $header, $greeting, $info;

    function _init() {
        $slider = $('.top-slider');
        $header = $('.navbar-fixed-top');
        $greeting = $('#greeting');
        $info = $('.info-page');

        var navHeight = $header.height();
        var windowHeight = $(window).height();

        var sliderHeight = windowHeight - navHeight;
        $slider.css('height', sliderHeight + 'px');
        $slider.find('a.seemore').smoothScroll({speed: 600, offset: -1 * navHeight});
    }

    return {
        init:_init
    }

})();

TopSliderModule.init();
