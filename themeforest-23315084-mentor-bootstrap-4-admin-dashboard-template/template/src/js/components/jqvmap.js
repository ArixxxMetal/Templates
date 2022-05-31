(function(window, document, $, undefined){

    $(function(){
        var jQVMap = jQuery(".vectormap-wrapper");
        if (jQVMap.length > 0) {

                //Analytics map
                var world = jQuery('#world')
                if (world.length > 0) {

                        function escapeXml(string) {
                            return string.replace(/[<>]/g, function (c) {
                              switch (c) {
                                case '<': return '\u003c';
                                case '>': return '\u003e';
                              }
                            });
                          }

                        var pins = {
                            mo: escapeXml('<div class="map-pin red"><span>MO</span></div>'),
                            fl: escapeXml('<div class="map-pin blue"><span>FL</span></div>'),
                            or: escapeXml('<div class="map-pin purple"><span>OR</span></div>')
                          };

                        jQuery(world).vectorMap({
                            map: 'world_en',
                            backgroundColor: '#ffff',
                            pins: pins,
                            pinMode: 'content',
                            showTooltip: true,
                            hoverColor: '#8E54E9',
                            borderColor: '#fff',
                            selectedColor: ['#8E54E9'],
                            color: '#eceef3',
                            selectedRegions: ['US', 'AU', 'IN', 'GR'],
                            onRegionClick: function(event){
                                event.preventDefault();
                            }
                        });
                }
                // Australia
                var australia = jQuery('#australia')
                if (australia.length > 0) {
                        jQuery(australia).vectorMap({
                            map: 'australia_en',
                            backgroundColor: '#fff',
                            selectedColor: '#fbaf54',
                            borderColor: '#fff',
                            hoverColor: '#fbaf54',
                            color: '#e8edf1'
                        });
                }
                // Africa
                var africa = jQuery('#africa')
                if (africa.length > 0) {
                        jQuery(africa).vectorMap({
                            map: 'africa_en',
                            backgroundColor: '#fff',
                            selectedColor: '#32b432',
                            borderColor: '#fff',
                            hoverColor: '#32b432',
                            color: '#e8edf1'
                        });
                }
                // USA
                var usa = jQuery('#usa')
                if (usa.length > 0) {
                        jQuery(usa).vectorMap({
                            map: 'usa_en',
                            backgroundColor: '#fff',
                            selectedColor: '#8E54E9',
                            hoverColor: '#8E54E9',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
                // Canada
                var canada = jQuery('#canada')
                if (canada.length > 0) {
                        jQuery(canada).vectorMap({
                            map: 'canada_en',
                            backgroundColor: '#fff',
                            selectedColor: '#fd9644',
                            hoverColor: '#fd9644',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
                // Europe
                var russia = jQuery('#russia')
                if (russia.length > 0) {
                        jQuery(russia).vectorMap({
                            map: 'russia_en',
                            backgroundColor: '#fff',
                            selectedColor: '#e3324c',
                            hoverColor: '#e3324c',
                            borderColor: '#fff',
                            color: '#e8edf1',
                            zoom: 5
                        });
                }
                // Brazil
                var brazil = jQuery('#brazil')
                if (brazil.length > 0) {
                        jQuery(brazil).vectorMap({
                            map: 'brazil_br',
                            backgroundColor: '#fff',
                            selectedColor: '#20bf6b',
                            hoverColor: '#20bf6b',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
        }
    });

})(window, document, window.jQuery);