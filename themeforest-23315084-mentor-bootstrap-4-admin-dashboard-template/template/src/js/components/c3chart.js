(function(window, document, $, undefined){

    $(function(){
        var c3Chart = jQuery(".c3chart-wrapper");
        if (c3Chart.length > 0) {
                    var c3demo1 = jQuery("#c3demo1");
                    if (c3demo1.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo1',
                            data: {
                                columns: [
                                    ['data1', 30, 200, 100, 400, 150, 250],
                                    ['data2', 50, 20, 10, 40, 15, 25]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6'
                                },
                            }
                        });
                    }
                    var c3demo2 = jQuery("#c3demo2");
                    if (c3demo2.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo2',
                            data: {
                                columns: [
                                    ['data1', 300, 350, 300, 0, 0, 0],
                                    ['data2', 130, 100, 140, 200, 150, 50]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6'
                                },
                                types: {
                                    data1: 'area',
                                    data2: 'area-spline'
                                }
                            }
                        });
                    }
                    var c3demo3 = jQuery("#c3demo3");
                    if (c3demo3.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo3',
                            data: {
                                columns: [
                                    ['data1', 30, 200, 100, 400, 150, 250],
                                    ['data2', 130, 100, 140, 200, 150, 50],
                                    ['data3', 130, 150, 200, 300, 200, 100]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6',
                                    data3: '#ffbc1d'
                                },
                                type: 'bar'
                            },
                            bar: {
                                width: {
                                    ratio: 0.5 // this makes bar width 50% of length between ticks
                                }
                            }
                        });
                    }
                    var c3demo4 = jQuery("#c3demo4");
                    if (c3demo4.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo4',
                            data: {
                                columns: [
                                    ['data1', -30, 200, 200, 400, -150, 250],
                                    ['data2', 130, 100, -100, 200, -150, 50],
                                    ['data3', -230, 200, 200, -300, 250, 250],
                                    ['data4', 100, -50, 150, 200, -300, -100]
                                ],
                                type: 'bar',
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6',
                                    data3: '#ffbc1d',
                                    data4: '#25d09a'
                                },
                                groups: [
                                    ['data1', 'data2', 'data3', 'data4']
                                ]
                            },
                            grid: {
                                y: {
                                    lines: [{ value: 0 }]
                                }
                            }
                        });
                    }
                    var c3demo5 = jQuery("#c3demo5");
                    if (c3demo5.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo5',
                            data: {
                                columns: [
                                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                                ],
                                colors: {
                                    setosa: '#8E54E9',
                                    versicolor: '#4776E6',
                                    virginica: '#ffbc1d'
                                },
                                type: 'pie'
                            }
                        });
                    }
                    var c3demo6 = jQuery("#c3demo6");
                    if (c3demo6.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo6',
                            data: {
                                columns: [
                                    ["desktop", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                                    ["tablet", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                                    ["mobile", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                                ],
                                colors: {
                                    desktop: '#8E54E9',
                                    tablet: '#4776E6',
                                    mobile: '#ffbc1d'
                                },
                                type: 'donut',
                            },
                            donut: {
                                title: "Browser Statistic"
                            }
                        });
                    }
        }
    });

})(window, document, window.jQuery, document.ready);