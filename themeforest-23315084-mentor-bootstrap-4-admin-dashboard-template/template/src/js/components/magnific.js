(function(window, document, $, undefined){

    $(function(){
        var magnific = jQuery(".magnific-wrapper");
        if (magnific.length > 0) {
                $('.view').magnificPopup({
                    type: 'image'
                    // other options
                });
                $(document).ready(function() {
                    $('.view2').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                });
                $('.view1').magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                });
        }
    });

})(window, document, window.jQuery);