(function(window, document, $, undefined){

    $(function(){
        var morrisJS = jQuery(".morris-wrapper");
        if (morrisJS.length > 0) {
                    // morris line chart
                    var morrisdemo1 = jQuery("#morrisdemo1");
                    if (morrisdemo1.length > 0) {
                        Morris.Line({
                            element: morrisdemo1,
                            data: [
                                { y: '2006', a: 40, b: 30 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 60, b: 50 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            lineColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            padding: 20,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris line chart
                    var morrisdemo2 = jQuery("#morrisdemo2");
                    if (morrisdemo2.length > 0) {
                        Morris.Area({
                            element: morrisdemo2,
                            data: [
                                { y: '2006', a: 40, b: 30 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 60, b: 50 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            lineColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 20,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris bar chart
                    var morrisdemo3 = jQuery("#morrisdemo3");
                    if (morrisdemo3.length > 0) {
                        Morris.Bar({
                            element: morrisdemo3,
                            data: [
                                { y: '2006', a: 100, b: 90 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 100, b: 90 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            barColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 15,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris donut chart
                    var morrisdemo4 = jQuery("#morrisdemo4");
                    if (morrisdemo4.length > 0) {
                        Morris.Donut({
                            element: morrisdemo4,
                            data: [
                                { label: "Direct Visits", value: 12 },
                                { label: "Redirect Visits", value: 30 },
                                { label: "Referral Visits", value: 20 }
                            ],
                            colors: ['#45aaf2', '#e3324c', '#fbaf54']
                        });
                    }
                    // morris stacked bar chart
                    var morrisdemo5 = jQuery("#morrisdemo5");
                    if (morrisdemo5.length > 0) {
                        Morris.Bar({
                            element: morrisdemo5,
                            data: [
                                { y: '2006', a: 100, b: 90 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 100, b: 90 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            barColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 15,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10,
                            stacked: true
                        });
                    }
                    // morris donut chart
                    var morrisecommerce1 = jQuery("#morrisecommerce1");
                    if (morrisecommerce1.length > 0) {
                        Morris.Donut({
                            element: morrisecommerce1,
                            data: [
                                { label: "Total sales", value: 680 },
                                { label: "Open campaign", value: 800 },
                                { label: "Daily sales", value: 500 }
                            ],
                            colors: ['#45aaf2', '#8E54E9', '#eceef3']
                        });
                    }
                    
                    // morris cardealer1
                    var cardealer1 = jQuery("#cardealer1");
                    if (cardealer1.length > 0) {
                        Morris.Donut({
                            element: cardealer1,
                            data: [
                                { label: "New cars", value: 680 },
                                { label: "Used cars", value: 800 }
                            ],
                            colors: ['#f7b731', '#2bcbba']
                        });
                    }
                    
        }
    });

})(window, document, window.jQuery);