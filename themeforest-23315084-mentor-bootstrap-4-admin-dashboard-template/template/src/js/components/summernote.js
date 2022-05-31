(function(window, document, $, undefined){

    $(function(){
        var summernote = jQuery(".summernote");
        if (summernote.length > 0) {
                $('#summernote').summernote({
                    tabsize: 2,
                    height: 250
                });
        }
    });

})(window, document, window.jQuery);