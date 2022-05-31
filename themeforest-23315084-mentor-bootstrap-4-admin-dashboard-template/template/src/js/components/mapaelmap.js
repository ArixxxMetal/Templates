(function(window, document, $, undefined){

    $(function(){
        var mapaelMap = jQuery(".mapaelmap-wrapper");
        if (mapaelMap.length > 0) {
                        // World Map
                        $(mapaelMap).mapael({
                            map: {
                                name: "world_countries"
                            }
                        });
        }
    });

})(window, document, window.jQuery);