(function(window, document, $, undefined){

    $(function(){
        var chartistChart = jQuery(".chartist-wrapper");
        if (chartistChart.length > 0) {

                //simple line chart
                var chartistdemo1 = jQuery("#chartistdemo1");
                if (chartistdemo1.length > 0) {
                    new Chartist.Line('.ct-chart-line', {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        series: [
                            [12, 9, 7, 8, 5],
                            [2, 1, 3.5, 7, 3],
                            [1, 3, 4, 5, 6]
                        ]
                    }, {
                        fullWidth: true,
                        chartPadding: {
                            right: 30,
                            left:0
                          },
                          axisY: {
                            offset: 30
                        },
                    });

                }
                var chartistdemo2 = jQuery("#chartistdemo2");
                if (chartistdemo2.length > 0) {
                    new Chartist.Line('.ct-chart-area', {
                        labels: [1, 2, 3, 4, 5, 6, 7, 8],
                        series: [
                            [5, 9, 7, 8, 5, 3, 5, 4]
                        ]
                    }, {
                        low: 0,
                        showArea: true,
                        fullWidth: true,
                        axisY: {
                            offset: 20
                        },
                        chartPadding: {
                            right: 10,
                            left:0
                          }
                    });
                }
                var chartistdemo3 = jQuery("#chartistdemo3");
                if (chartistdemo3.length > 0) {
                    var data = {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        series: [
                            [6, 4, 8, 7, 6, 4, 8, 7, 6, 4, 8, 7],
                            [4, 3, 7, 6.5, 4, 3, 7, 6.5, 4, 3, 7, 6.5],
                            [8, 3, 1, 6, 8, 3, 1, 6, 8, 3, 1, 6]
                        ]
                    };

                    var options = {
                        seriesBarDistance: 20,
                        axisY: {
                            offset: 20,
                            scaleMinSpace: 15
                        },
                    };



                    var responsiveOptions = [
                        ['screen and (max-width: 640px)', {
                            seriesBarDistance: 0,
                            axisX: {
                                labelInterpolationFnc: function(value) {
                                    return value[0];
                                }
                            }
                        }]
                    ];

                    new Chartist.Bar('.ct-chart-bar', data, options, responsiveOptions);
                }
                var chartistdemo4 = jQuery("#chartistdemo4");
                if (chartistdemo4.length > 0) {
                    new Chartist.Bar('.ct-chart-stacked', {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        series: [
                            [800000, 1200000, 1400000, 1300000],
                            [200000, 400000, 500000, 300000],
                            [100000, 200000, 400000, 600000]
                        ]
                    }, {
                        stackBars: true,
                        axisY: {
                            labelInterpolationFnc: function(value) {
                                return (value / 1000) + 'k';
                            }
                        }
                    }).on('draw', function(data) {
                        if (data.type === 'bar') {
                            data.element.attr({
                                style: 'stroke-width: 30px'
                            });
                        }
                    });
                }
                var chartistdemo5 = jQuery("#chartistdemo5");
                if (chartistdemo5.length > 0) {
                    new Chartist.Bar('.ct-chart-horizontalbar', {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        series: [
                            [5, 4, 3, 7, 5, 10, 3],
                            [3, 2, 9, 5, 4, 6, 4]
                        ]
                    }, {
                        seriesBarDistance: 10,
                        reverseData: true,
                        horizontalBars: true,
                        axisY: {
                            offset: 50
                        },
                        chartPadding: {
                            right: 20,
                            left:0
                          }
                    });
                }
                var chartistdemo6 = jQuery("#chartistdemo6");
                if (chartistdemo6.length > 0) {
                    var data = {
                        series: [4, 3, 4, 3, 2]
                    };

                    var sum = function(a, b) { return a + b };

                    new Chartist.Pie('.ct-chart-pie', data, {
                        labelInterpolationFnc: function(value) {
                            return Math.round(value / data.series.reduce(sum) * 100) + '%';
                        }
                    });
                }
                var chartistdemo7 = jQuery("#chartistdemo7");
                if (chartistdemo7.length > 0) {
                    new Chartist.Pie('.ct-chart-donut', {
                        series: [20, 10, 30, 40]
                    }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        showLabel: true
                    });
                }
                var chartistdemo8 = jQuery("#chartistdemo8");
                if (chartistdemo8.length > 0) {
                    new Chartist.Pie('.ct-chart-gauge', {
                        series: [20, 10, 30, 40]
                    }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        total: 200,
                        showLabel: true
                    });
                }
                //analytical dashboard chart
                var analytical1 = jQuery("#analytical1");
                if (analytical1.length > 0) {
                    var data = {
                        series: [
                            [6, -5, 7, -6, 4, -3]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical1', data, options);
                }
                //analytical dashboard chart
                var analytical2 = jQuery("#analytical2");
                if (analytical2.length > 0) {
                    var data = {
                        series: [
                            [4, -7, 6, -3, 5, -2]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical2', data, options);
                }
                //analytical dashboard chart
                var analytical3 = jQuery("#analytical3");
                if (analytical3.length > 0) {
                    var data = {
                        series: [
                            [6, -3, 5, -7, 2, -4]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical3', data, options);
                }
                //analytical dashboard chart
                var analytical4 = jQuery("#analytical4");
                if (analytical4.length > 0) {
                    var data = {
                        series: [
                            [5, -3, 6, -8, 3, -5]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical4', data, options);
                }
                //analytical dashboard chart
                var analytical5 = jQuery("#analytical5");
                if (analytical5.length > 0) {
                    var data = {
                        series: [
                            [3, -5, 2, -6, 7, -3]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical5', data, options);
                }
                //analytical dashboard chart
                var analytical6 = jQuery("#analytical6");
                if (analytical6.length > 0) {
                    var data = {
                        series: [
                            [7, -4, 6, -3, 8, -2]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical6', data, options);
                }
        }
    });

})(window, document, window.jQuery);