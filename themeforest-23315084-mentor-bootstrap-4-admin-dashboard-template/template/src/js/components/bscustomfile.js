(function(window, document, $, undefined){

    $(function(){
        var customfile = jQuery(".custom-file-input");
        if (customfile.length > 0) {
                bsCustomFileInput.init();
        }
    });

})(window, document, window.jQuery);