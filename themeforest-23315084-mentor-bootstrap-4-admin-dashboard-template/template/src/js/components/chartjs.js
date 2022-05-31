(function(window, document, $, undefined){

    $(function(){
        var chartJS = jQuery(".chartjs-wrapper");
        if (chartJS.length > 0) {
                    /* Utils */
                    window.chartColors = {
                        red: 'rgb(233, 84, 84)',
                        orange: 'rgb(253, 153, 68)',
                        yellow: 'rgb(255, 188, 29)',
                        green: 'rgb(37, 208, 154)',
                        blue: 'rgb(71, 118, 230)',
                        purple: 'rgb(142, 84, 233)',
                        grey: 'rgb(148, 148, 148)'
                    };

                    (function(global) {
                        var Months = [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December'
                        ];

                        var COLORS = [
                            '#4dc9f6',
                            '#f67019',
                            '#f53794',
                            '#537bc4',
                            '#acc236',
                            '#166a8f',
                            '#00a950',
                            '#58595b',
                            '#8549ba'
                        ];

                        var Samples = global.Samples || (global.Samples = {});
                        var Color = global.Color;

                        Samples.utils = {
                            // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
                            srand: function(seed) {
                                this._seed = seed;
                            },

                            rand: function(min, max) {
                                var seed = this._seed;
                                min = min === undefined ? 0 : min;
                                max = max === undefined ? 1 : max;
                                this._seed = (seed * 9301 + 49297) % 233280;
                                return min + (this._seed / 233280) * (max - min);
                            },

                            numbers: function(config) {
                                var cfg = config || {};
                                var min = cfg.min || 0;
                                var max = cfg.max || 1;
                                var from = cfg.from || [];
                                var count = cfg.count || 8;
                                var decimals = cfg.decimals || 8;
                                var continuity = cfg.continuity || 1;
                                var dfactor = Math.pow(10, decimals) || 0;
                                var data = [];
                                var i, value;

                                for (i = 0; i < count; ++i) {
                                    value = (from[i] || 0) + this.rand(min, max);
                                    if (this.rand() <= continuity) {
                                        data.push(Math.round(dfactor * value) / dfactor);
                                    } else {
                                        data.push(null);
                                    }
                                }

                                return data;
                            },

                            labels: function(config) {
                                var cfg = config || {};
                                var min = cfg.min || 0;
                                var max = cfg.max || 100;
                                var count = cfg.count || 8;
                                var step = (max - min) / count;
                                var decimals = cfg.decimals || 8;
                                var dfactor = Math.pow(10, decimals) || 0;
                                var prefix = cfg.prefix || '';
                                var values = [];
                                var i;

                                for (i = min; i < max; i += step) {
                                    values.push(prefix + Math.round(dfactor * i) / dfactor);
                                }

                                return values;
                            },

                            months: function(config) {
                                var cfg = config || {};
                                var count = cfg.count || 12;
                                var section = cfg.section;
                                var values = [];
                                var i, value;

                                for (i = 0; i < count; ++i) {
                                    value = Months[Math.ceil(i) % 12];
                                    values.push(value.substring(0, section));
                                }

                                return values;
                            },

                            color: function(index) {
                                return COLORS[index % COLORS.length];
                            },

                            transparentize: function(color, opacity) {
                                var alpha = opacity === undefined ? 0.5 : 1 - opacity;
                                return Color(color).alpha(alpha).rgbString();
                            }
                        };

                        // DEPRECATED
                        window.randomScalingFactor = function() {
                            return Math.round(Samples.utils.rand(-100, 100));
                        };

                        // INITIALIZATION

                        Samples.utils.srand(Date.now());

                    }(this));
                    /*Custom Points*/
                    var customTooltips = function(tooltip) {
                        $(this._chart.canvas).css("cursor", "pointer");
                        var positionY = this._chart.canvas.offsetTop;
                        var positionX = this._chart.canvas.offsetLeft;
                        $(".chartjs-tooltip").css({
                            opacity: 0,
                        });
                        if (!tooltip || !tooltip.opacity) {
                            return;
                        }
                        if (tooltip.dataPoints.length > 0) {
                            tooltip.dataPoints.forEach(function(dataPoint) {
                                var content = [dataPoint.xLabel, dataPoint.yLabel].join(": ");
                                var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

                                $tooltip.html(content);
                                $tooltip.css({
                                    opacity: 1,
                                    top: positionY + dataPoint.y + "px",
                                    left: positionX + dataPoint.x + "px",
                                });
                            });
                        }
                    };
                    var color = Chart.helpers.color;
                    var lineChartData = {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: "My First dataset",
                            backgroundColor: color(window.chartColors.purple).alpha(0.2).rgbString(),
                            borderColor: window.chartColors.purple,
                            pointBackgroundColor: window.chartColors.purple,
                            data: [
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor()
                            ]
                        }, {
                            label: "My Second dataset",
                            backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                            borderColor: window.chartColors.blue,
                            pointBackgroundColor: window.chartColors.blue,
                            data: [
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor()
                            ]
                        }]
                    };
                    //simple line chart
                    var chartjsdemo1 = jQuery("#chartjsdemo1");
                    if (chartjsdemo1.length > 0) {
                        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var config = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "Facebook",
                                    borderColor: window.chartColors.blue,
                                    backgroundColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Twitter",
                                    borderColor: window.chartColors.green,
                                    backgroundColor: window.chartColors.green,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "LinkedIn",
                                    borderColor: window.chartColors.purple,
                                    backgroundColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Google+",
                                    borderColor: window.chartColors.yellow,
                                    backgroundColor: window.chartColors.yellow,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: false,
                                    text: "Line Chart - Stacked Area"
                                },
                                tooltips: {
                                    mode: 'index',
                                },
                                hover: {
                                    mode: 'index'
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12,
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12,
                                            stepSize: 1,
                                            beginAtZero: true
                                        }
                                    }],
                                    yAxes: [{
                                        stacked: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Price',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx1 = document.getElementById("chartjsdemo1").getContext("2d");
                        window.myLine1 = new Chart(ctx1, config);
                    }
                    var chartjsdemo2 = jQuery("#chartjsdemo2");
                    if (chartjsdemo2.length > 0) {
                        // Line chart
                        var config2 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "Unfilled",
                                    fill: false,
                                    backgroundColor: window.chartColors.yellow,
                                    borderColor: window.chartColors.yellow,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Dashed",
                                    fill: false,
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    borderDash: [5, 5],
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Filled",
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    fill: true,
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: false,
                                    text: 'Line Chart - Line styles'
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false,
                                },
                                hover: {
                                    mode: 'nearest',
                                    intersect: true
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12,
                                            stepSize: 1,
                                            beginAtZero: true
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx2 = document.getElementById("chartjsdemo2").getContext("2d");
                        window.myLine2 = new Chart(ctx2, config2);
                    }
                    var chartjsdemo3 = jQuery("#chartjsdemo3");
                    if (chartjsdemo3.length > 0) {
                        // Donut chart
                        var config3 = {
                            type: 'doughnut',
                            data: {
                                datasets: [{
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                    ],
                                    backgroundColor: [
                                        window.chartColors.red,
                                        window.chartColors.purple,
                                        window.chartColors.yellow,
                                        window.chartColors.green,
                                        window.chartColors.blue,
                                    ],
                                    label: 'Dataset 1'
                                }],
                                labels: [
                                    "Red",
                                    "Purple",
                                    "Yellow",
                                    "Green",
                                    "Blue"
                                ]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                title: {
                                    display: false,
                                    text: 'Doughnut Chart'
                                },
                                animation: {
                                    animateScale: true,
                                    animateRotate: true
                                }
                            }
                        };
                        var ctx3 = document.getElementById("chartjsdemo3").getContext("2d");
                        window.myLine3 = new Chart(ctx3, config3);
                    }
                    var chartjsdemo4 = jQuery("#chartjsdemo4");
                    if (chartjsdemo4.length > 0) {
                        // Combo
                        var timeFormat = 'MM/DD/YYYY HH:mm';

                        function newDateString(days) {
                            return moment().add(days, 'd').format(timeFormat);
                        }
                        var color = Chart.helpers.color;
                        var config4 = {
                            type: 'bar',
                            data: {
                                labels: [
                                    newDateString(0),
                                    newDateString(1),
                                    newDateString(2),
                                    newDateString(3),
                                    newDateString(4),
                                    newDateString(5),
                                    newDateString(6)
                                ],
                                datasets: [{
                                    type: 'bar',
                                    label: 'Dataset 1',
                                    backgroundColor: color(window.chartColors.purple).alpha(1).rgbString(),
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    type: 'bar',
                                    label: 'Dataset 2',
                                    backgroundColor: color(window.chartColors.blue).alpha(1).rgbString(),
                                    borderColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    type: 'line',
                                    label: 'Dataset 3',
                                    backgroundColor: color(window.chartColors.yellow).alpha(1).rgbString(),
                                    borderColor: window.chartColors.yellow,
                                    fill: false,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, ]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Combo Time Scale"
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        type: "time",
                                        display: true,
                                        time: {
                                            format: timeFormat
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                            }
                        };
                        var ctx4 = document.getElementById("chartjsdemo4").getContext("2d");
                        window.myLine4 = new Chart(ctx4, config4);
                    }
                    var chartjsdemo5 = jQuery("#chartjsdemo5");
                    if (chartjsdemo5.length > 0) {
                        var chartEl = document.getElementById("chartjsdemo5");
                        var chart = new Chart(chartEl, {
                            type: "line",
                            data: lineChartData,
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Custom Tooltips using Data Points"
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                tooltips: {
                                    enabled: false,
                                    mode: 'index',
                                    intersect: false,
                                    custom: customTooltips
                                },
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                            }
                        });
                    }
                    var chartjsdemo6 = jQuery("#chartjsdemo6");
                    if (chartjsdemo6.length > 0) {
                        // chart basic
                        var config6 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "My First dataset",
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    fill: false,
                                }, {
                                    label: "My Second dataset",
                                    fill: false,
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: 'Line Chart - Basic'
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false,
                                },
                                hover: {
                                    mode: 'nearest',
                                    intersect: true
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx6 = document.getElementById("chartjsdemo6").getContext("2d");
                        window.myLine6 = new Chart(ctx6, config6);
                    }
                    var chartjsdemo7 = jQuery("#chartjsdemo7");
                    if (chartjsdemo7.length > 0) {
                        var config7 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "dataset - big points",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    fill: false,
                                    borderDash: [5, 5],
                                    pointRadius: 15,
                                    pointHoverRadius: 10,
                                }, {
                                    label: "dataset - individual point sizes",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    fill: false,
                                    borderDash: [5, 5],
                                    pointRadius: [2, 4, 6, 18, 0, 12, 20],
                                }, {
                                    label: "dataset - large pointHoverRadius",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.green,
                                    borderColor: window.chartColors.green,
                                    fill: false,
                                    pointHoverRadius: 30,
                                }, {
                                    label: "dataset - large pointHitRadius",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.yellow,
                                    borderColor: window.chartColors.yellow,
                                    fill: false,
                                    pointHitRadius: 20,
                                }]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                      
                                hover: {
                                    mode: 'index'
                                },
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                                title: {
                                    display: false,
                                    text: 'Line Chart - Different point sizes'
                                }
                            }
                        };
                        var ctx7 = document.getElementById("chartjsdemo7").getContext("2d");
                        window.myLine7 = new Chart(ctx7, config7);
                    }
                    var chartjsdemo8 = jQuery("#chartjsdemo8");
                    if (chartjsdemo8.length > 0) {
                        // Stacked bar chart
                        var barChartData = {
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [{
                                label: 'Dataset 1',
                                backgroundColor: window.chartColors.purple,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }, {
                                label: 'Dataset 2',
                                backgroundColor: window.chartColors.blue,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }, {
                                label: 'Dataset 3',
                                backgroundColor: window.chartColors.yellow,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }]
                        };
                        var ctx8 = document.getElementById("chartjsdemo8").getContext("2d");
                        window.myBar = new Chart(ctx8, {
                            type: 'bar',
                            data: barChartData,
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Bar Chart - Stacked"
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false
                                },
                                
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        stacked: true,
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        stacked: true,
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        });
                    }
                    
        }
    });

})(window, document, window.jQuery);