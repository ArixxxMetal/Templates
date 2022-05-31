(function(window, document, $, undefined) {

    $(function() {
        var apexChart = jQuery(".apexchart-wrapper");
    if (apexChart.length > 0) {
        var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

            // analytics1
            var apexdemo1 = jQuery('#apexdemo1')
                if (apexdemo1.length > 0) {
                  var options = {
                    chart: {
                        height: 350,
                        type: 'line',
                        shadow: {
                            enabled: true,
                            color: '#000',
                            top: 18,
                            left: 7,
                            blur: 10,
                            opacity: 1
                        },
                        toolbar: {
                            show: false
                        }
                    },
                    colors: ['#8E54E9', '#2bcbba'],
                    dataLabels: {
                        enabled: true,
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    series: [{
                            name: "High - 2013",
                            data: [28, 29, 33, 36, 32, 32, 33]
                        },
                        {
                            name: "Low - 2013",
                            data: [12, 11, 14, 18, 17, 13, 13]
                        }
                    ],
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    markers: {
                        
                        size: 6
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        title: {
                            text: 'Month'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Temperature'
                        },
                        min: 5,
                        max: 40
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        floating: true,
                        offsetY: -25,
                        offsetX: -5
                    }
                }
        
                var chart = new ApexCharts(
                    document.querySelector("#apexdemo1"),
                    options
                );
        
                chart.render();
                }

                var apexdemo2 = jQuery('#apexdemo2')
                if (apexdemo2.length > 0) {
                  var options = {
                    chart: {
                        height: 350,
                        type: 'line',
                        shadow: {
                            enabled: false,
                            color: '#bbb',
                            top: 3,
                            left: 2,
                            blur: 3,
                            opacity: 1
                        },
                    },
                    stroke: {
                        width: 7,   
                        curve: 'smooth'
                    },
                    series: [{
                        name: 'Likes',
                        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                    }],
                    xaxis: {
                        type: 'datetime',
                        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                    },
                    title: {
                        text: 'Social Media',
                        align: 'left',
                        style: {
                            fontSize: "16px",
                            color: '#666'
                        }
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            gradientToColors: [ '#8E54E9'],
                            shadeIntensity: 1,
                            type: 'horizontal',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100, 100, 100]
                        },
                    },
                    markers: {
                        size: 4,
                        opacity: 0.9,
                        colors: ["#2bcbba"],
                        strokeColor: "#fff",
                        strokeWidth: 2,
                         
                        hover: {
                            size: 7,
                        }
                    },
                    yaxis: {
                        min: -10,
                        max: 40,
                        title: {
                            text: 'Engagement',
                        },                
                    }
                }
        
               var chart = new ApexCharts(
                    document.querySelector("#apexdemo2"),
                    options
                );
                
                chart.render();
                }

                var apexdemo3 = jQuery('#apexdemo3')
                if (apexdemo3.length > 0) {
                  var options = {
                    chart: {
                        height: 350,
                        type: 'area',
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    series: [{
                        name: 'series1',
                        data: [31, 40, 28, 51, 42, 109, 100]
                    }, {
                        name: 'series2',
                        data: [11, 32, 45, 32, 34, 52, 41]
                    }],
                    colors: ['#8E54E9', '#2bcbba'],
                    xaxis: {
                        type: 'datetime',
                        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yy HH:mm'
                        },
                    }
                }
        
                var chart = new ApexCharts(
                    document.querySelector("#apexdemo3"),
                    options
                );
        
                chart.render();
                }

                var apexdemo4 = jQuery('#apexdemo4')
                if (apexdemo4.length > 0) {
                  var options = {
                    chart: {
                      height: 350,
                      type: 'area',
                      stacked: true,
                      events: {
                        selection: function(chart, e) {
                          console.log(new Date(e.xaxis.min) )
                        }
                      },
              
                    },
                    colors: ['#8E54E9', '#2bcbba', '#eceef3'],
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                      curve: 'smooth'
                    },
              
                    series: [{
                        name: 'South',
                        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                          min: 10,
                          max: 60
                        })
                      },
                      {
                        name: 'North',
                        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                          min: 10,
                          max: 20
                        })
                      },
                      
                      {
                        name: 'Central',
                        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                          min: 10,
                          max: 15
                        })
                      }
                    ],
                    fill: {
                      type: 'gradient',
                      gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                      }
                    },
                    legend: {
                      position: 'top',
                      horizontalAlign: 'left'
                    },
                    xaxis: {
                      type: 'datetime'
                    },
                  }
              
                  var chart = new ApexCharts(
                    document.querySelector("#apexdemo4"),
                    options
                  );
              
                  chart.render();
              
                  function generateDayWiseTimeSeries(baseval, count, yrange) {
                    var i = 0;
                    var series = [];
                    while (i < count) {
                      var x = baseval;
                      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
              
                      series.push([x, y]);
                      baseval += 86400000;
                      i++;
                    }
                    return series;
                  }
                          
                }

                var apexdemo5 = jQuery('#apexdemo5')
                if (apexdemo5.length > 0) {
                  var options = {
                    chart: {
                        height:420,
                        type: 'bar',
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        }
                    },
                    colors: ['#8E54E9'],
                    dataLabels: {
                        enabled: false
                    },
                    series: [{
                        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                    }],
                    xaxis: {
                        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                    }
                }
        
               var chart = new ApexCharts(
                    document.querySelector("#apexdemo5"),
                    options
                );
                
                chart.render();

                }

                var apexdemo6 = jQuery('#apexdemo6')
                if (apexdemo6.length > 0) {
                  var options = {
                    chart: {
                        height: 420,
                        type: 'bar',
                        stacked: true
                    },
                    colors: ['#8E54E9','#2bcbba'],
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            barHeight: '80%',
                            
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: 1,
                        colors: ["#fff"]
                    },
                    series: [{
                        name: 'Males',
                        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
                    },
                    {
                        name: 'Females',
                        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
                    }],
                    grid: {
                        xaxis: {
                            showLines: false
                        }
                    },
                    yaxis: {
                        min: -5,
                        max: 5,
                        title: {
                           // text: 'Age',
                        },
                    },
                    tooltip: {
                        shared: false,
                        x: {
                            formatter: function(val) {
                                return val
                            }
                        },
                        y: {
                            formatter: function(val) {
                                return Math.abs(val) + "%"
                            }
                        }
                    },

                    xaxis: {
                      categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
                      title: {
                          text: 'Percent'
                      },
                      labels: {
                        formatter: function(val) {
                          return Math.abs(Math.round(val)) + "%"
                        }
                      }
                    },
                }
        
               var chart = new ApexCharts(
                    document.querySelector("#apexdemo6"),
                    options
                );
                
                chart.render();
            
                }

                var apexdemo7 = jQuery('#apexdemo7')
                if (apexdemo7.length > 0) {
                  var optionDonut = {
                    chart: {

                        type: 'donut',
                        height: '350'
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    plotOptions: {
                      pie: {
                        donut: {
                          size: '75%',
                        },
                        offsetY: 0,
                      },
                      stroke: {
                        colors: undefined
                      }
                    },
                    colors: ['#8E54E9','#2bcbba','#f7b731','#45aaf2','#e3324c'],

                    series: [21, 23, 19, 14, 6],
                    labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
                  }
                  
                  var donut = new ApexCharts(
                    document.querySelector("#apexdemo7"),
                    optionDonut
                  )
                  donut.render();

                }

                var apexdemo8 = jQuery('#apexdemo8')
                if (apexdemo8.length > 0) {
                  var optionDonut = {
                    chart: {

                        type: 'pie',
                        height: '350'
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    plotOptions: {
                      pie: {
                        donut: {
                          size: '75%',
                        },
                        offsetY: 0,
                      },
                      stroke: {
                        colors: undefined
                      }
                    },
                    colors: ['#8E54E9','#2bcbba','#f7b731','#45aaf2','#e3324c'],

                    series: [21, 23, 19, 14, 6],
                    labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
                  }
                  
                  var donut = new ApexCharts(
                    document.querySelector("#apexdemo8"),
                    optionDonut
                  )
                  donut.render();

                }
                
            // analytics1
            var analytics1 = jQuery('#analytics1')
                if (analytics1.length > 0) {
                    var dataSeries = [
                          [{
                              "date": "2014-01-01",
                              "value": 20000000
                            },
                            {
                              "date": "2014-01-02",
                              "value": 10379978
                            },
                            {
                              "date": "2014-01-03",
                              "value": 30493749
                            },
                            {
                              "date": "2014-01-04",
                              "value": 10785250
                            },
                            {
                              "date": "2014-01-05",
                              "value": 33901904
                            },
                            {
                              "date": "2014-01-06",
                              "value": 11576838
                            },
                            {
                              "date": "2014-01-07",
                              "value": 14413854
                            },
                            {
                              "date": "2014-01-08",
                              "value": 15177211
                            },
                            {
                              "date": "2014-01-09",
                              "value": 16622100
                            },
                            {
                              "date": "2014-01-10",
                              "value": 17381072
                            },
                            {
                              "date": "2014-01-11",
                              "value": 18802310
                            },
                            {
                              "date": "2014-01-12",
                              "value": 15531790
                            },
                            {
                              "date": "2014-01-13",
                              "value": 15748881
                            },
                            {
                              "date": "2014-01-14",
                              "value": 18706437
                            },
                            {
                              "date": "2014-01-15",
                              "value": 19752685
                            },
                            {
                              "date": "2014-01-16",
                              "value": 21016418
                            },
                            {
                              "date": "2014-01-17",
                              "value": 25622924
                            },
                            {
                              "date": "2014-01-18",
                              "value": 25337480
                            },
                            {
                              "date": "2014-01-19",
                              "value": 22258882
                            },
                            {
                              "date": "2014-01-20",
                              "value": 23829538
                            },
                            {
                              "date": "2014-01-21",
                              "value": 24245689
                            },
                            {
                              "date": "2014-01-22",
                              "value": 26429711
                            },
                            {
                              "date": "2014-01-23",
                              "value": 26259017
                            },
                            {
                              "date": "2014-01-24",
                              "value": 25396183
                            },
                            {
                              "date": "2014-01-25",
                              "value": 23107346
                            },
                            {
                              "date": "2014-01-26",
                              "value": 28659852
                            },
                            {
                              "date": "2014-01-27",
                              "value": 25270783
                            },
                            {
                              "date": "2014-01-28",
                              "value": 26270783
                            },
                            {
                              "date": "2014-01-29",
                              "value": 27270783
                            },
                            {
                              "date": "2014-01-30",
                              "value": 28270783
                            },
                            {
                              "date": "2014-01-31",
                              "value": 29270783
                            },
                            {
                              "date": "2014-02-01",
                              "value": 30270783
                            },
                            {
                              "date": "2014-02-02",
                              "value": 31270783
                            },
                            {
                              "date": "2014-02-03",
                              "value": 32270783
                            },
                            {
                              "date": "2014-02-04",
                              "value": 33270783
                            },
                            {
                              "date": "2014-02-05",
                              "value": 28270783
                            },
                            {
                              "date": "2014-02-06",
                              "value": 27270783
                            },
                            {
                              "date": "2014-02-07",
                              "value": 35270783
                            },
                            {
                              "date": "2014-02-08",
                              "value": 34270783
                            },
                            {
                              "date": "2014-02-09",
                              "value": 28270783
                            },
                            {
                              "date": "2014-02-10",
                              "value": 35270783
                            },
                            {
                              "date": "2014-02-11",
                              "value": 36270783
                            },
                            {
                              "date": "2014-02-12",
                              "value": 34127078
                            },
                            {
                              "date": "2014-02-13",
                              "value": 33124078
                            },
                            {
                              "date": "2014-02-14",
                              "value": 36227078
                            },
                            {
                              "date": "2014-02-15",
                              "value": 37827078
                            },
                            {
                              "date": "2014-02-16",
                              "value": 36427073
                            },
                            {
                              "date": "2014-02-17",
                              "value": 37570783
                            },
                            {
                              "date": "2014-02-18",
                              "value": 38627073
                            },
                            {
                              "date": "2014-02-19",
                              "value": 37727078
                            },
                            {
                              "date": "2014-02-20",
                              "value": 38827073
                            },
                            {
                              "date": "2014-02-21",
                              "value": 40927078
                            },
                            {
                              "date": "2014-02-22",
                              "value": 41027078
                            },
                            {
                              "date": "2014-02-23",
                              "value": 42127073
                            },
                            {
                              "date": "2014-02-24",
                              "value": 43220783
                            },
                            {
                              "date": "2014-02-25",
                              "value": 44327078
                            },
                            {
                              "date": "2014-02-26",
                              "value": 40427078
                            },
                            {
                              "date": "2014-02-27",
                              "value": 41027078
                            },
                            {
                              "date": "2014-02-28",
                              "value": 45627078
                            },
                            {
                              "date": "2014-03-01",
                              "value": 44727078
                            },
                            {
                              "date": "2014-03-02",
                              "value": 44227078
                            },
                            {
                              "date": "2014-03-03",
                              "value": 45227078
                            },
                            {
                              "date": "2014-03-04",
                              "value": 46027078
                            },
                            {
                              "date": "2014-03-05",
                              "value": 46927078
                            },
                            {
                              "date": "2014-03-06",
                              "value": 47027078
                            },
                            {
                              "date": "2014-03-07",
                              "value": 46227078
                            },
                            {
                              "date": "2014-03-08",
                              "value": 47027078
                            },
                            {
                              "date": "2014-03-09",
                              "value": 48027078
                            },
                            {
                              "date": "2014-03-10",
                              "value": 47027078
                            },
                            {
                              "date": "2014-03-11",
                              "value": 47027078
                            },
                            {
                              "date": "2014-03-12",
                              "value": 48017078
                            },
                            {
                              "date": "2014-03-13",
                              "value": 48077078
                            },
                            {
                              "date": "2014-03-14",
                              "value": 48087078
                            },
                            {
                              "date": "2014-03-15",
                              "value": 48017078
                            },
                            {
                              "date": "2014-03-16",
                              "value": 48047078
                            },
                            {
                              "date": "2014-03-17",
                              "value": 48067078
                            },
                            {
                              "date": "2014-03-18",
                              "value": 48077078
                            },
                            {
                              "date": "2014-03-19",
                              "value": 48027074
                            },
                            {
                              "date": "2014-03-20",
                              "value": 48927079
                            },
                            {
                              "date": "2014-03-21",
                              "value": 48727071
                            },
                            {
                              "date": "2014-03-22",
                              "value": 48127072
                            },
                            {
                              "date": "2014-03-23",
                              "value": 48527072
                            },
                            {
                              "date": "2014-03-24",
                              "value": 48627027
                            },
                            {
                              "date": "2014-03-25",
                              "value": 48027040
                            },
                            {
                              "date": "2014-03-26",
                              "value": 48027043
                            },
                            {
                              "date": "2014-03-27",
                              "value": 48057022
                            },
                            {
                              "date": "2014-03-28",
                              "value": 49057022
                            },
                            {
                              "date": "2014-03-29",
                              "value": 50057022
                            },
                            {
                              "date": "2014-03-30",
                              "value": 51057022
                            },
                            {
                              "date": "2014-03-31",
                              "value": 52057022
                            },
                            {
                              "date": "2014-04-01",
                              "value": 53057022
                            },
                            {
                              "date": "2014-04-02",
                              "value": 54057022
                            },
                            {
                              "date": "2014-04-03",
                              "value": 52057022
                            },
                            {
                              "date": "2014-04-04",
                              "value": 55057022
                            },
                            {
                              "date": "2014-04-05",
                              "value": 58270783
                            },
                            {
                              "date": "2014-04-06",
                              "value": 56270783
                            },
                            {
                              "date": "2014-04-07",
                              "value": 55270783
                            },
                            {
                              "date": "2014-04-08",
                              "value": 58270783
                            },
                            {
                              "date": "2014-04-09",
                              "value": 59270783
                            },
                            {
                              "date": "2014-04-10",
                              "value": 60270783
                            },
                            {
                              "date": "2014-04-11",
                              "value": 61270783
                            },
                            {
                              "date": "2014-04-12",
                              "value": 62270783
                            },
                            {
                              "date": "2014-04-13",
                              "value": 63270783
                            },
                            {
                              "date": "2014-04-14",
                              "value": 64270783
                            },
                            {
                              "date": "2014-04-15",
                              "value": 65270783
                            },
                            {
                              "date": "2014-04-16",
                              "value": 66270783
                            },
                            {
                              "date": "2014-04-17",
                              "value": 67270783
                            },
                            {
                              "date": "2014-04-18",
                              "value": 68270783
                            },
                            {
                              "date": "2014-04-19",
                              "value": 69270783
                            },
                            {
                              "date": "2014-04-20",
                              "value": 70270783
                            },
                            {
                              "date": "2014-04-21",
                              "value": 71270783
                            },
                            {
                              "date": "2014-04-22",
                              "value": 72270783
                            },
                            {
                              "date": "2014-04-23",
                              "value": 73270783
                            },
                            {
                              "date": "2014-04-24",
                              "value": 74270783
                            },
                            {
                              "date": "2014-04-25",
                              "value": 75270783
                            },
                            {
                              "date": "2014-04-26",
                              "value": 76660783
                            },
                            {
                              "date": "2014-04-27",
                              "value": 77270783
                            },
                            {
                              "date": "2014-04-28",
                              "value": 78370783
                            },
                            {
                              "date": "2014-04-29",
                              "value": 79470783
                            },
                            {
                              "date": "2014-04-30",
                              "value": 80170783
                            }
                          ],
                          [{
                              "date": "2014-01-01",
                              "value": 150000000
                            },
                            {
                              "date": "2014-01-02",
                              "value": 160379978
                            },
                            {
                              "date": "2014-01-03",
                              "value": 170493749
                            },
                            {
                              "date": "2014-01-04",
                              "value": 160785250
                            },
                            {
                              "date": "2014-01-05",
                              "value": 167391904
                            },
                            {
                              "date": "2014-01-06",
                              "value": 161576838
                            },
                            {
                              "date": "2014-01-07",
                              "value": 161413854
                            },
                            {
                              "date": "2014-01-08",
                              "value": 152177211
                            },
                            {
                              "date": "2014-01-09",
                              "value": 143762210
                            },
                            {
                              "date": "2014-01-10",
                              "value": 144381072
                            },
                            {
                              "date": "2014-01-11",
                              "value": 154352310
                            },
                            {
                              "date": "2014-01-12",
                              "value": 165531790
                            },
                            {
                              "date": "2014-01-13",
                              "value": 175748881
                            },
                            {
                              "date": "2014-01-14",
                              "value": 187064037
                            },
                            {
                              "date": "2014-01-15",
                              "value": 197520685
                            },
                            {
                              "date": "2014-01-16",
                              "value": 210176418
                            },
                            {
                              "date": "2014-01-17",
                              "value": 196122924
                            },
                            {
                              "date": "2014-01-18",
                              "value": 207337480
                            },
                            {
                              "date": "2014-01-19",
                              "value": 200258882
                            },
                            {
                              "date": "2014-01-20",
                              "value": 186829538
                            },
                            {
                              "date": "2014-01-21",
                              "value": 192456897
                            },
                            {
                              "date": "2014-01-22",
                              "value": 204299711
                            },
                            {
                              "date": "2014-01-23",
                              "value": 192759017
                            },
                            {
                              "date": "2014-01-24",
                              "value": 203596183
                            },
                            {
                              "date": "2014-01-25",
                              "value": 208107346
                            },
                            {
                              "date": "2014-01-26",
                              "value": 196359852
                            },
                            {
                              "date": "2014-01-27",
                              "value": 192570783
                            },
                            {
                              "date": "2014-01-28",
                              "value": 177967768
                            },
                            {
                              "date": "2014-01-29",
                              "value": 190632803
                            },
                            {
                              "date": "2014-01-30",
                              "value": 203725316
                            },
                            {
                              "date": "2014-01-31",
                              "value": 218226177
                            },
                            {
                              "date": "2014-02-01",
                              "value": 210698669
                            },
                            {
                              "date": "2014-02-02",
                              "value": 217640656
                            },
                            {
                              "date": "2014-02-03",
                              "value": 216142362
                            },
                            {
                              "date": "2014-02-04",
                              "value": 201410971
                            },
                            {
                              "date": "2014-02-05",
                              "value": 196704289
                            },
                            {
                              "date": "2014-02-06",
                              "value": 190436945
                            },
                            {
                              "date": "2014-02-07",
                              "value": 178891686
                            },
                            {
                              "date": "2014-02-08",
                              "value": 171613962
                            },
                            {
                              "date": "2014-02-09",
                              "value": 157579773
                            },
                            {
                              "date": "2014-02-10",
                              "value": 158677098
                            },
                            {
                              "date": "2014-02-11",
                              "value": 147129977
                            },
                            {
                              "date": "2014-02-12",
                              "value": 151561876
                            },
                            {
                              "date": "2014-02-13",
                              "value": 151627421
                            },
                            {
                              "date": "2014-02-14",
                              "value": 143543872
                            },
                            {
                              "date": "2014-02-15",
                              "value": 136581057
                            },
                            {
                              "date": "2014-02-16",
                              "value": 135560715
                            },
                            {
                              "date": "2014-02-17",
                              "value": 122625263
                            },
                            {
                              "date": "2014-02-18",
                              "value": 112091484
                            },
                            {
                              "date": "2014-02-19",
                              "value": 98810329
                            },
                            {
                              "date": "2014-02-20",
                              "value": 99882912
                            },
                            {
                              "date": "2014-02-21",
                              "value": 94943095
                            },
                            {
                              "date": "2014-02-22",
                              "value": 104875743
                            },
                            {
                              "date": "2014-02-23",
                              "value": 116383678
                            },
                            {
                              "date": "2014-02-24",
                              "value": 125028841
                            },
                            {
                              "date": "2014-02-25",
                              "value": 123967310
                            },
                            {
                              "date": "2014-02-26",
                              "value": 133167029
                            },
                            {
                              "date": "2014-02-27",
                              "value": 128577263
                            },
                            {
                              "date": "2014-02-28",
                              "value": 115836969
                            },
                            {
                              "date": "2014-03-01",
                              "value": 119264529
                            },
                            {
                              "date": "2014-03-02",
                              "value": 109363374
                            },
                            {
                              "date": "2014-03-03",
                              "value": 113985628
                            },
                            {
                              "date": "2014-03-04",
                              "value": 114650999
                            },
                            {
                              "date": "2014-03-05",
                              "value": 110866108
                            },
                            {
                              "date": "2014-03-06",
                              "value": 96473454
                            },
                            {
                              "date": "2014-03-07",
                              "value": 104075886
                            },
                            {
                              "date": "2014-03-08",
                              "value": 103568384
                            },
                            {
                              "date": "2014-03-09",
                              "value": 101534883
                            },
                            {
                              "date": "2014-03-10",
                              "value": 115825447
                            },
                            {
                              "date": "2014-03-11",
                              "value": 126133916
                            },
                            {
                              "date": "2014-03-12",
                              "value": 116502109
                            },
                            {
                              "date": "2014-03-13",
                              "value": 130169411
                            },
                            {
                              "date": "2014-03-14",
                              "value": 124296886
                            },
                            {
                              "date": "2014-03-15",
                              "value": 126347399
                            },
                            {
                              "date": "2014-03-16",
                              "value": 131483669
                            },
                            {
                              "date": "2014-03-17",
                              "value": 142811333
                            },
                            {
                              "date": "2014-03-18",
                              "value": 129675396
                            },
                            {
                              "date": "2014-03-19",
                              "value": 115514483
                            },
                            {
                              "date": "2014-03-20",
                              "value": 117630630
                            },
                            {
                              "date": "2014-03-21",
                              "value": 122340239
                            },
                            {
                              "date": "2014-03-22",
                              "value": 132349091
                            },
                            {
                              "date": "2014-03-23",
                              "value": 125613305
                            },
                            {
                              "date": "2014-03-24",
                              "value": 135592466
                            },
                            {
                              "date": "2014-03-25",
                              "value": 123408762
                            },
                            {
                              "date": "2014-03-26",
                              "value": 111991454
                            },
                            {
                              "date": "2014-03-27",
                              "value": 116123955
                            },
                            {
                              "date": "2014-03-28",
                              "value": 112817214
                            },
                            {
                              "date": "2014-03-29",
                              "value": 113029590
                            },
                            {
                              "date": "2014-03-30",
                              "value": 108753398
                            },
                            {
                              "date": "2014-03-31",
                              "value": 99383763
                            },
                            {
                              "date": "2014-04-01",
                              "value": 100151737
                            },
                            {
                              "date": "2014-04-02",
                              "value": 94985209
                            },
                            {
                              "date": "2014-04-03",
                              "value": 82913669
                            },
                            {
                              "date": "2014-04-04",
                              "value": 78748268
                            },
                            {
                              "date": "2014-04-05",
                              "value": 63829135
                            },
                            {
                              "date": "2014-04-06",
                              "value": 78694727
                            },
                            {
                              "date": "2014-04-07",
                              "value": 80868994
                            },
                            {
                              "date": "2014-04-08",
                              "value": 93799013
                            },
                            {
                              "date": "2014-04-09",
                              "value": 99042416
                            },
                            {
                              "date": "2014-04-10",
                              "value": 97298692
                            },
                            {
                              "date": "2014-04-11",
                              "value": 83353499
                            },
                            {
                              "date": "2014-04-12",
                              "value": 71248129
                            },
                            {
                              "date": "2014-04-13",
                              "value": 75253744
                            },
                            {
                              "date": "2014-04-14",
                              "value": 68976648
                            },
                            {
                              "date": "2014-04-15",
                              "value": 71002284
                            },
                            {
                              "date": "2014-04-16",
                              "value": 75052401
                            },
                            {
                              "date": "2014-04-17",
                              "value": 83894030
                            },
                            {
                              "date": "2014-04-18",
                              "value": 90236528
                            },
                            {
                              "date": "2014-04-19",
                              "value": 99739114
                            },
                            {
                              "date": "2014-04-20",
                              "value": 96407136
                            },
                            {
                              "date": "2014-04-21",
                              "value": 108323177
                            },
                            {
                              "date": "2014-04-22",
                              "value": 101578914
                            },
                            {
                              "date": "2014-04-23",
                              "value": 115877608
                            },
                            {
                              "date": "2014-04-24",
                              "value": 112088857
                            },
                            {
                              "date": "2014-04-25",
                              "value": 112071353
                            },
                            {
                              "date": "2014-04-26",
                              "value": 101790062
                            },
                            {
                              "date": "2014-04-27",
                              "value": 115003761
                            },
                            {
                              "date": "2014-04-28",
                              "value": 120457727
                            },
                            {
                              "date": "2014-04-29",
                              "value": 118253926
                            },
                            {
                              "date": "2014-04-30",
                              "value": 117956992
                            }
                          ],
                          [{
                              "date": "2014-01-01",
                              "value": 50000000
                            },
                            {
                              "date": "2014-01-02",
                              "value": 60379978
                            },
                            {
                              "date": "2014-01-03",
                              "value": 40493749
                            },
                            {
                              "date": "2014-01-04",
                              "value": 60785250
                            },
                            {
                              "date": "2014-01-05",
                              "value": 67391904
                            },
                            {
                              "date": "2014-01-06",
                              "value": 61576838
                            },
                            {
                              "date": "2014-01-07",
                              "value": 61413854
                            },
                            {
                              "date": "2014-01-08",
                              "value": 82177211
                            },
                            {
                              "date": "2014-01-09",
                              "value": 103762210
                            },
                            {
                              "date": "2014-01-10",
                              "value": 84381072
                            },
                            {
                              "date": "2014-01-11",
                              "value": 54352310
                            },
                            {
                              "date": "2014-01-12",
                              "value": 65531790
                            },
                            {
                              "date": "2014-01-13",
                              "value": 75748881
                            },
                            {
                              "date": "2014-01-14",
                              "value": 47064037
                            },
                            {
                              "date": "2014-01-15",
                              "value": 67520685
                            },
                            {
                              "date": "2014-01-16",
                              "value": 60176418
                            },
                            {
                              "date": "2014-01-17",
                              "value": 66122924
                            },
                            {
                              "date": "2014-01-18",
                              "value": 57337480
                            },
                            {
                              "date": "2014-01-19",
                              "value": 100258882
                            },
                            {
                              "date": "2014-01-20",
                              "value": 46829538
                            },
                            {
                              "date": "2014-01-21",
                              "value": 92456897
                            },
                            {
                              "date": "2014-01-22",
                              "value": 94299711
                            },
                            {
                              "date": "2014-01-23",
                              "value": 62759017
                            },
                            {
                              "date": "2014-01-24",
                              "value": 103596183
                            },
                            {
                              "date": "2014-01-25",
                              "value": 108107346
                            },
                            {
                              "date": "2014-01-26",
                              "value": 66359852
                            },
                            {
                              "date": "2014-01-27",
                              "value": 62570783
                            },
                            {
                              "date": "2014-01-28",
                              "value": 77967768
                            },
                            {
                              "date": "2014-01-29",
                              "value": 60632803
                            },
                            {
                              "date": "2014-01-30",
                              "value": 103725316
                            },
                            {
                              "date": "2014-01-31",
                              "value": 98226177
                            },
                            {
                              "date": "2014-02-01",
                              "value": 60698669
                            },
                            {
                              "date": "2014-02-02",
                              "value": 67640656
                            },
                            {
                              "date": "2014-02-03",
                              "value": 66142362
                            },
                            {
                              "date": "2014-02-04",
                              "value": 101410971
                            },
                            {
                              "date": "2014-02-05",
                              "value": 66704289
                            },
                            {
                              "date": "2014-02-06",
                              "value": 60436945
                            },
                            {
                              "date": "2014-02-07",
                              "value": 78891686
                            },
                            {
                              "date": "2014-02-08",
                              "value": 71613962
                            },
                            {
                              "date": "2014-02-09",
                              "value": 107579773
                            },
                            {
                              "date": "2014-02-10",
                              "value": 58677098
                            },
                            {
                              "date": "2014-02-11",
                              "value": 87129977
                            },
                            {
                              "date": "2014-02-12",
                              "value": 51561876
                            },
                            {
                              "date": "2014-02-13",
                              "value": 51627421
                            },
                            {
                              "date": "2014-02-14",
                              "value": 83543872
                            },
                            {
                              "date": "2014-02-15",
                              "value": 66581057
                            },
                            {
                              "date": "2014-02-16",
                              "value": 65560715
                            },
                            {
                              "date": "2014-02-17",
                              "value": 62625263
                            },
                            {
                              "date": "2014-02-18",
                              "value": 92091484
                            },
                            {
                              "date": "2014-02-19",
                              "value": 48810329
                            },
                            {
                              "date": "2014-02-20",
                              "value": 49882912
                            },
                            {
                              "date": "2014-02-21",
                              "value": 44943095
                            },
                            {
                              "date": "2014-02-22",
                              "value": 104875743
                            },
                            {
                              "date": "2014-02-23",
                              "value": 96383678
                            },
                            {
                              "date": "2014-02-24",
                              "value": 105028841
                            },
                            {
                              "date": "2014-02-25",
                              "value": 63967310
                            },
                            {
                              "date": "2014-02-26",
                              "value": 63167029
                            },
                            {
                              "date": "2014-02-27",
                              "value": 68577263
                            },
                            {
                              "date": "2014-02-28",
                              "value": 95836969
                            },
                            {
                              "date": "2014-03-01",
                              "value": 99264529
                            },
                            {
                              "date": "2014-03-02",
                              "value": 109363374
                            },
                            {
                              "date": "2014-03-03",
                              "value": 93985628
                            },
                            {
                              "date": "2014-03-04",
                              "value": 94650999
                            },
                            {
                              "date": "2014-03-05",
                              "value": 90866108
                            },
                            {
                              "date": "2014-03-06",
                              "value": 46473454
                            },
                            {
                              "date": "2014-03-07",
                              "value": 84075886
                            },
                            {
                              "date": "2014-03-08",
                              "value": 103568384
                            },
                            {
                              "date": "2014-03-09",
                              "value": 101534883
                            },
                            {
                              "date": "2014-03-10",
                              "value": 95825447
                            },
                            {
                              "date": "2014-03-11",
                              "value": 66133916
                            },
                            {
                              "date": "2014-03-12",
                              "value": 96502109
                            },
                            {
                              "date": "2014-03-13",
                              "value": 80169411
                            },
                            {
                              "date": "2014-03-14",
                              "value": 84296886
                            },
                            {
                              "date": "2014-03-15",
                              "value": 86347399
                            },
                            {
                              "date": "2014-03-16",
                              "value": 31483669
                            },
                            {
                              "date": "2014-03-17",
                              "value": 82811333
                            },
                            {
                              "date": "2014-03-18",
                              "value": 89675396
                            },
                            {
                              "date": "2014-03-19",
                              "value": 95514483
                            },
                            {
                              "date": "2014-03-20",
                              "value": 97630630
                            },
                            {
                              "date": "2014-03-21",
                              "value": 62340239
                            },
                            {
                              "date": "2014-03-22",
                              "value": 62349091
                            },
                            {
                              "date": "2014-03-23",
                              "value": 65613305
                            },
                            {
                              "date": "2014-03-24",
                              "value": 65592466
                            },
                            {
                              "date": "2014-03-25",
                              "value": 63408762
                            },
                            {
                              "date": "2014-03-26",
                              "value": 91991454
                            },
                            {
                              "date": "2014-03-27",
                              "value": 96123955
                            },
                            {
                              "date": "2014-03-28",
                              "value": 92817214
                            },
                            {
                              "date": "2014-03-29",
                              "value": 93029590
                            },
                            {
                              "date": "2014-03-30",
                              "value": 108753398
                            },
                            {
                              "date": "2014-03-31",
                              "value": 49383763
                            },
                            {
                              "date": "2014-04-01",
                              "value": 100151737
                            },
                            {
                              "date": "2014-04-02",
                              "value": 44985209
                            },
                            {
                              "date": "2014-04-03",
                              "value": 52913669
                            },
                            {
                              "date": "2014-04-04",
                              "value": 48748268
                            },
                            {
                              "date": "2014-04-05",
                              "value": 23829135
                            },
                            {
                              "date": "2014-04-06",
                              "value": 58694727
                            },
                            {
                              "date": "2014-04-07",
                              "value": 50868994
                            },
                            {
                              "date": "2014-04-08",
                              "value": 43799013
                            },
                            {
                              "date": "2014-04-09",
                              "value": 4042416
                            },
                            {
                              "date": "2014-04-10",
                              "value": 47298692
                            },
                            {
                              "date": "2014-04-11",
                              "value": 53353499
                            },
                            {
                              "date": "2014-04-12",
                              "value": 71248129
                            },
                            {
                              "date": "2014-04-13",
                              "value": 75253744
                            },
                            {
                              "date": "2014-04-14",
                              "value": 68976648
                            },
                            {
                              "date": "2014-04-15",
                              "value": 71002284
                            },
                            {
                              "date": "2014-04-16",
                              "value": 75052401
                            },
                            {
                              "date": "2014-04-17",
                              "value": 83894030
                            },
                            {
                              "date": "2014-04-18",
                              "value": 50236528
                            },
                            {
                              "date": "2014-04-19",
                              "value": 59739114
                            },
                            {
                              "date": "2014-04-20",
                              "value": 56407136
                            },
                            {
                              "date": "2014-04-21",
                              "value": 108323177
                            },
                            {
                              "date": "2014-04-22",
                              "value": 101578914
                            },
                            {
                              "date": "2014-04-23",
                              "value": 95877608
                            },
                            {
                              "date": "2014-04-24",
                              "value": 62088857
                            },
                            {
                              "date": "2014-04-25",
                              "value": 92071353
                            },
                            {
                              "date": "2014-04-26",
                              "value": 81790062
                            },
                            {
                              "date": "2014-04-27",
                              "value": 105003761
                            },
                            {
                              "date": "2014-04-28",
                              "value": 100457727
                            },
                            {
                              "date": "2014-04-29",
                              "value": 98253926
                            },
                            {
                              "date": "2014-04-30",
                              "value": 67956992
                            }
                          ]
                        ]
                    var ts2 = 1484418600000;
                    var dates = [];
                    for (var i = 0; i < 120; i++) {
                    ts2 = ts2 + 86400000;
                    var innerArr = [ts2, dataSeries[1][i].value];
                    dates.push(innerArr)
                    }
                    var options = {
                    chart: {
                        type: 'area',
                        stacked: false,
                        height: 300,
                        zoom: {
                        type: 'x',
                        padding: {
                            left: 30,
                            right: 20
                          }
                        },
                        toolbar: {
                            show: true,
                            autoSelected: 'zoom'
                        }
                    },
                    plotOptions: {
                        line: {
                        curve: 'smooth',
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    series: [{
                        name: 'Nifty 50',
                        data: dates
                    }],
                    colors: ['#8E54E9'],
                    fill: {
                        gradient: {
                        enabled: true,
                        shadeIntensity: 0,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0
                        },
                    },
                    grid: {
                        show: true,
                        borderColor: '#fff',
                    },
                    yaxis: {
                        min: 20000000,
                        max: 250000000,
                        labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                        },
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                            offsetX: -25
                        },
                        
                        axisBorder: {
                            show: false
                        },
                    },
                    tooltip: {
                        shared: false,
                        y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                        }
                    }
                    }

                    var chart = new ApexCharts(
                    document.querySelector("#analytics1"),
                    options
                    );

                    chart.render();
    
            }
            // anaylytics 2
            var analytics2 = jQuery('#analytics2')
            if (analytics2.length > 0) {
                var optionsBar = {
                  chart: {
                    type: 'bar',
                    height: 250,
                    width: '100%',
                    stacked: true,
                    foreColor: '#999',
                    toolbar: {
                        show: false
                        },
                  },
                  plotOptions: {
                    bar: {
                      dataLabels: {
                        enabled: false
                      },
                      columnWidth: '60%',
                      endingShape: 'rounded'
                    }
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  colors: ["#4776E6", '#eceef3'],
                  series: [{
                    name: "Sessions",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }, {
                    name: "Views",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }],
                  xaxis: {
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    },
                    crosshairs: {
                      show: false
                    },
                    labels: {
                      show: false,
                      style: {
                        fontSize: '14px'
                      }
                    },
                  },
                  grid: {
                    xaxis: {
                      lines: {
                        show: false
                      },
                    },
                    yaxis: {
                      lines: {
                        show: false
                      },
                    }
                  },
                  yaxis: {
                    axisBorder: {
                      show: false
                    },
                    labels: {
                      show: false
                    },
                  },
                  legend: {
                    floating: false,
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -36
                  },
                  title: {
                    text: '10 days left',
                    align: 'left',
                  },
                  tooltip: {
                    shared: true
                  }
                }
                var chartBar = new ApexCharts(document.querySelector('#analytics2'), optionsBar);
                chartBar.render();
             }
            var analytics3 = jQuery('#analytics3')
            if (analytics3.length > 0) {

                    var options = {
                          chart: {
                            height: 200,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [5, 4],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ["#8E54E9", '#2bcbba'],
                          series: [{
                              name: "Total revenue",
                              data: [45, 52, 38, 24, 33, 26, 21, 20]
                            },
                            {
                              name: "Total cost",
                              data: [35, 41, 62, 42, 13, 18, 29, 37]
                            }
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: true,
                                  offsetX: 10,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'],
                   
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " per click"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per click"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          },
                          responsive: [{
                            breakpoint: 480,
                            options: {
                              xaxis: {
                                labels: {
                                  rotate: -45,
                                  hideOverlappingLabels: true,
                                }
                              }
                            },
                          }]
                        }

            var chart = new ApexCharts(
                document.querySelector("#analytics3"),
                options
            );

            chart.render();

        }

        // analytics4
                var analytics4 = jQuery('#analytics4')
                if (analytics4.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics4"),
                    options
                );

                chart.render();
                }

                // analytics5
                var analytics5 = jQuery('#analytics5')
                if (analytics5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#fb0792'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics5"),
                    options
                );

                chart.render();
                }

                // analytics6
                  var analytics6 = jQuery('#analytics6')
                if (analytics6.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#32b432'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics6"),
                    options
                );

                chart.render();
                }

        // analytics7
        var analytics7 = jQuery('#analytics7')
            if (analytics7.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#8E54E9'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics7"),
                        options
                    );
                    chart.render();
               }

               // analytics8
                var analytics8 = jQuery('#analytics8')
            if (analytics8.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#2bcbba'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics8"),
                        options
                    );
                    chart.render();
               }
               // analytics9
                var analytics9 = jQuery('#analytics9')
            if (analytics9.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#fb0792'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics9"),
                        options
                    );
                    chart.render();
               }

            // analytics10
                var analytics10 = jQuery('#analytics10')
            if (analytics10.length > 0) {

               var optionsDonutTop = {
                      chart: {
                        height: 115,
                        width: 140,
                        type: 'donut',
                      },
                      colors: ['#8E54E9', '#f7b731', '#45aaf2'],
                      labels: ['Redirect Visists', 'New Visits', 'Direct Visits'],
                      series: [456, 256, 128],
                      legend: {
                        show: false
                      },
                      dataLabels: {
                        enabled: false
                      },
                      plotOptions: {
                        pie: {
                          size: 35,
                          donut: {
                            size: '72%',
                          },
                          offsetX: 10,
                          offsetY: -10,
                          dataLabels: {
                            enabled: false
                          },
                        }
                      },
                      responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:250,
                                height:250
                            },
                            plotOptions: {
                                pie: {
                                  size: 70,
                                  donut: {
                                    size: '72%',
                                  },
                                  offsetX: 0,
                                  offsetY: -20,
                                  dataLabels: {
                                    enabled: false
                                  },
                                }
                              },
                        },
                      }]
                    }
                    var chartDonut2 = new ApexCharts(document.querySelector('#analytics10'), optionsDonutTop);
                    chartDonut2.render().then(function () {
                    });
                    }

                // ecommerce
                var ecommerce5 = jQuery('#ecommerce5')
                if (ecommerce5.length > 0) {
                var options = {
                    chart: {
                        height: 340,
                        type: 'bar',
                        toolbar: {
                          show: false,
                        },
                    },
                    colors:['#8E54E9', '#eceef3'],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            endingShape: 'rounded',
                            columnWidth: '40%',
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    series: [{
                        name: 'Annual Sales',
                        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                    }, {
                        name: 'Annual Revenue',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                    }],
                    xaxis: {
                        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                        axisBorder: {
                             show: false,
                        },
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                            offsetX: 0,
                        }
                    },
                       yaxis: {
                            labels: {
                                show: false,
                                style: {
                                    colors: ['#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-yaxis-label',
                                }
                            }
                    },
                    fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0.6,
                        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100]
                    }
                    },
                    legend: {
                        fontFamily: 'Roboto',
                        labels: {
                            colors: ['#949494', '#949494','#949494'],
                            useSeriesColors: false
                        },
                        itemMargin: {
                            horizontal: 20
                        },
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return "$ " + val + " thousands"
                            }
                        }
                    },
                    grid: {
                        show: true,
                        borderColor: '#fff',
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                          plotOptions: {
                            bar: {
                                horizontal: false,
                                endingShape: 'rounded',
                                columnWidth: '70%',
                            },
                        },
                        },
                    }]

                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommerce5"),
                    options
                );

                chart.render();
                }



                var ecommercedemo1 = jQuery('#ecommercedemo1')
                if (ecommercedemo1.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo1"),
                    options
                );

                chart.render();
                }

                var ecommercedemo2 = jQuery('#ecommercedemo2')
                if (ecommercedemo2.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#fbaf54'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo2"),
                    options
                );

                chart.render();
                }

                var ecommercedemo3 = jQuery('#ecommercedemo3')
                if (ecommercedemo3.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#e3324c'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo3"),
                    options
                );

                chart.render();
                }

                var ecommercedemo4 = jQuery('#ecommercedemo4')
                if (ecommercedemo4.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#32b432'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo4"),
                    options
                );

                chart.render();
                }

                var ecommercedemo5 = jQuery('#ecommercedemo5')
            if (ecommercedemo5.length > 0) {
                var options = {
                    chart: {
                        width: 260,
                        height: 230,
                        type: 'pie',
                    },
                    colors:['#8E54E9','#fbaf54','#4776E6','#e3324c','#444444'],
                    labels: ['Direct', 'Referral', 'Organic Search','Social Network', 'Other Advertising'],
                    series: [44, 55, 13,53,35],
                    legend: {
                        show: false
                    },
                    dataLabels: {
                      enabled: false
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                            chart: {
                                offsetY:0,
                                offsetX:0,
                                width: 250,
                            }
                        },
                    },
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                offsetY:0,
                                offsetX:0,
                                width: 300,
                            }
                        },
                    }]
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo5"),
                    options
                );

                chart.render();
              }


                var cardealerdemo1 = jQuery('#cardealerdemo1')
                if (cardealerdemo1.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true
                        }
                      },
                      stroke: {
                        width: '1',
                        curve: 'smooth'
                      },
                      fill: {
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            shadeIntensity: 0.2,
                            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                            inverseColors: true,
                            opacityFrom: 0.4,
                            opacityTo: .4,
                            stops: [0, 50, 100]
                          }
                      },
                      markers: {
                        style: 'inverted',
                        size: 2
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#ffffff'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo1"),
                    options
                );

                chart.render();
                }

                var pageview = jQuery('#pageview')
                if (pageview.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [0, 2, 7, 5, 10, 9, 13, 15];

                var options = {
                    chart: {
                        type: 'area',
                        height: 355,
                        width: 600,
                        sparkline: {
                          enabled: true
                        }
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      markers: {
                        strokeColor: '#8E54E9',
                        size: 3
                      },
                      series: [{
                        data: sparklineData
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#pageview"),
                    options
                );

                chart.render();
                }

                 // cardealerdemo2
                var cardealerdemo2 = jQuery('#cardealerdemo2')
                if (cardealerdemo2.length > 0) {
                var options = {
                    chart: {
                        height: 260,
                        type: 'bar',
                        toolbar: {
                          show: false,
                        },
                    },
                    colors:['#8E54E9'],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '16%',
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    series: [{
                        name: 'Annual Revenue',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                    }],
                    xaxis: {
                        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                        axisBorder: {
                             show: false,
                        },
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                            offsetX: 0,
                        }
                    },
                       yaxis: {
                            labels: {
                                show: false,
                                style: {
                                    colors: ['#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-yaxis-label',
                                }
                            }
                    },
                    fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0,
                        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100]
                    }
                    },
                    legend: {
                        fontFamily: 'Roboto',
                        labels: {
                            colors: ['#949494', '#949494','#949494'],
                            useSeriesColors: false
                        }
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return "$ " + val + " thousands"
                            }
                        }
                    },
                    grid: {
                        show: true,
                        borderColor: '#f5f5f5',
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                            yaxis: {
                                show: false
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            plotOptions: {
                                bar: {
                                    horizontal: false,
                                    endingShape: 'rounded',
                                    columnWidth: '90%',
                                },
                            },
                            yaxis: {
                                show: false
                            }
                        },
                    }]

                }

                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo2"),
                    options
                );

                chart.render();
                }




                // cardealerdemo3
                var cardealerdemo3 = jQuery('#cardealerdemo3')
                if (cardealerdemo3.length > 0) {
                    var options = {
                            chart: {
                                height: 350,
                                type: 'line',
                                shadow: {
                                    enabled: true,
                                    color: '#000',
                                    top: 18,
                                    left: 7,
                                    blur: 10,
                                    opacity: 1
                                },
                                toolbar: {
                                    show: false
                                }
                            },
                            colors: ['#8E54E9', '#4776E6'],
                            dataLabels: {
                                enabled: true,
                            },
                            stroke: {
                                curve: 'smooth'
                            },
                            series: [{
                                    name: "User - 208",
                                    data: [28, 29, 33, 36, 32, 32, 33]
                                },
                                {
                                    name: "Page View - 208",
                                    data: [12, 11, 14, 18, 17, 13, 13]
                                }
                            ],
                            grid: {
                                borderColor: '#dee0ea',
                                row: {
                                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                    opacity: 0.5
                                },
                            },
                            markers: {
                                size: 6
                            },
                            xaxis: {
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
                            },
                            yaxis: {
                                min: 5,
                                max: 40
                            },
                            legend: {
                                show: false,
                                position: 'top',
                                horizontalAlign: 'right',
                                floating: true,
                                offsetY: -25,
                                offsetX: -5
                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#cardealerdemo3"),
                        options
                    );

                    chart.render();
                }


                // cardealerdemo4
                var cardealerdemo4 = jQuery('#cardealerdemo4')
                if (cardealerdemo4.length > 0) {
                    var options = {
                        chart: {
                            width: 260,
                            type: 'donut',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        series:[60, 40, 25, 15],
                        labels: ['Direct', 'Referral', 'Organic', 'Social'],
                        colors:['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'dark',
                                type: "vertical",
                                shadeIntensity: 1,
                                opacityFrom: 1,
                                opacityTo: 1,
                                gradientToColors: ['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                                stops: [0, 90, 100]
                              }
                        },
                        legend: {
                            show: false,
                            position: 'left',
                            horizontalAlign: 'center',
                             fontSize: '14px',
                             itemMargin: {
                                horizontal: 20,
                                vertical: 5
                            },
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]

                    }

                    var chart = new ApexCharts(
                        document.querySelector("#cardealerdemo4"),
                        options
                    );

                    chart.render();

                    var paper = chart.paper()

            }


             var cardealerdemo5 = jQuery('#cardealerdemo5')
                if (cardealerdemo5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.9,
                          opacityTo: 0.1,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#d270f9'],
                }
                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo5"),
                    options
                );

                chart.render();
                }

                // Stock Market
                var stockmarket5 = jQuery('#stockmarket5')
                if (stockmarket5.length > 0) {
                    var ts2 = 1484418600000;
                    var dates = [];
                    var spikes = [5, -5, 3, -3, 8, -8]
                    for (var i = 0; i < 120; i++) {
                    ts2 = ts2 + 86400000;
                    var innerArr = [ts2, dataSeries[1][i].value];
                    dates.push(innerArr)
                    }

                    var options = {
                    chart: {
                        type: 'area',
                        stacked: false,
                        height: 350,
                        zoom: {
                        type: 'x',
                        enabled: true
                        },
                        toolbar: {
                        autoSelected: 'zoom'
                        }
                    },
                    plotOptions: {
                        line: {
                        curve: 'smooth',
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    series: [{
                        name: 'Nifty 50',
                        data: dates
                    }],
                    markers: {
                        size: 0,
                        style: 'full',
                    },
                    colors: ['#8E54E9'],
                    fill: {
                        gradient: {
                        enabled: true,
                        shadeIntensity: 0,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0
                        },
                    },
                    grid: {
                        show: true,
                        borderColor: '#fff',
                    },
                    yaxis: {
                        min: 20000000,
                        max: 250000000,
                        labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                        },
                        title: {
                        text: 'Price'
                        },
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                        },
                        axisBorder: {
                            show: false
                        },
                    },
                    tooltip: {
                        shared: false,
                        y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                        }
                    }
                    }

                    var chart = new ApexCharts(
                    document.querySelector("#stockmarket5"),
                    options
                    );

                    chart.render();
            }
            var stockmarket6 = jQuery('#stockmarket6')
                if (stockmarket6.length > 0) {
                    var options = {
                        chart: {
                            height: 300,
                            type: 'bar',
                            toolbar: {
                            show: false,
                         }
                        },
                        legend: {
                            show: true,
                            position: "top",
                            containerMargin: {
                              top: -20
                            }
                          },
                         plotOptions: {
                            bar: {
                                horizontal: true,
                                barHeight: '20%',

                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors: ['#8E54E9'],
                        fill: {
                            gradient: {
                                enabled: true,
                                shade: 'light',
                                type: "vertical",
                                shadeIntensity: 0.1,
                                gradientToColors: undefined,
                                inverseColors: true,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [50, 0, 100, 100]
                            },
                        },
                        series: [{
                            data: [400, 430, 448, 470, 540, 430, 448]
                        }],
                        grid: {
                            show: true,
                            borderColor: '#fff',
                        },
                        xaxis: {
                            categories: ['Tata', 'Reliance', 'ONGC', 'GAIL', 'Tata Motors', 'ACC', 'Mind Tree'],
                            labels: {
                                style: {
                                    colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-xaxis-label',
                                },
                            },
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                        }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#stockmarket6"),
                        options
                    );

                    chart.render();
             }

                // stockmarket7
                function generateData(baseval, count, yrange) {
                  var i = 0;
                  var series = [];
                  while (i < count) {
                      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
                      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
                      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

                      series.push([x, y, z]);
                      baseval += 86400000;
                      i++;
                  }
                  return series;
              }
                var stockmarket7 = jQuery('#stockmarket7')
                      if (stockmarket7.length > 0) {
                      
                    var options = {
                        chart: {
                            height: 390,
                            type: 'bubble',
                            toolbar: {
                        show: false
                        },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        legend: {
                            show: false,
                            position: "top",
                            containerMargin: {
                              top: -20
                            }
                          },
                        series: [{
                                name: 'Actual',
                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 12, {
                                    min: 10,
                                    max: 60
                                })
                            },
                            {
                                name: 'Budget',
                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 12, {
                                    min: 10,
                                    max: 60
                                })
                            }
                        ],
                         colors: ['#8E54E9', '#45aaf2'],
                        fill: {
                            opacity: 0.8,

                            gradient: {
                                enabled: false
                            }
                        },
                        xaxis: {
                            tickAmount: 12,
                            type: 'category',
                            axisBorder: {
                              show: false
                            },
                            label: {
                              offsetX: 10
                            }
                        },
                        yaxis: {
                            max: 70
                        }
                    }

                    var chart = new ApexCharts(
                        document.querySelector("#stockmarket7"),
                        options
                    );

                    chart.render();

                }


            // stockmarketdemo1
             var stockmarketdemo1 = jQuery('#stockmarketdemo1')
            if (stockmarketdemo1.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fb0792'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 1, 2, 3, 2, 1, 3, 8, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo1"),
                options
            );

            chart.render();

        }

             var stockmarketdemo2 = jQuery('#stockmarketdemo2')
            if (stockmarketdemo2.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#8E54E9'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3, 2, 1, 3, 2, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo2"),
                options
            );

            chart.render();

        }
         var stockmarketdemo3 = jQuery('#stockmarketdemo3')
            if (stockmarketdemo3.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fd9644'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 1, 2, 8, 2, 1, 3, 1, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo3"),
                options
            );

            chart.render();

        }
         var stockmarketdemo4 = jQuery('#stockmarketdemo4')
            if (stockmarketdemo4.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#2bcbba'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 8, 1, 3, 1, 2, 3, 2, 1, 3, 4, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo4"),
                options
            );

            chart.render();

        }

            var stockmarketdemo5 = jQuery('#stockmarketdemo5')
                if (stockmarketdemo5.length > 0) {
                    var options = {
                        chart: {
                            type: 'bar',
                            height: 100,
                            sparkline: {
                              enabled: true
                            }
                          },
                          plotOptions: {
                            bar: {
                              columnWidth: '80%'
                            }
                          },
                          colors:['#8E54E9'],
                          series: [{
                            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54,44, 12, 36, 9, 54, 66, 41, 89, 63, 25,25, 44, 12, 36, 9, 54,44, 12, 36, 9]
                          }],
                          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          xaxis: {
                            crosshairs: {
                              width: 1
                            },
                          },
                          tooltip: {
                            fixed: {
                              enabled: false
                            },
                            x: {
                              show: false
                            },
                            y: {
                              title: {
                                formatter: function (seriesName) {
                                  return ''
                                }
                              }
                            },
                            marker: {
                              show: false
                            }
                          }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#stockmarketdemo5"),
                        options
                    );

                    chart.render();
            }


            // stockmarketdemo6
             var stockmarketdemo6 = jQuery('#stockmarketdemo6')
                if (stockmarketdemo6.length > 0) {
                    var options = {
                            chart: {
                                height: 100,
                                width: 150,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 1
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#stockmarketdemo6"),
                    options
                );

                chart.render();
                }
                // stockmarketdemo7
             var stockmarketdemo7 = jQuery('#stockmarketdemo7')
                if (stockmarketdemo7.length > 0) {
                    var options = {
                            chart: {
                                height: 100,
                                width: 150,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 1
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#stockmarketdemo7"),
                    options
                );

                chart.render();
                }

                // stockmarketdemo8

                 var stockmarketdemo8 = jQuery('#stockmarketdemo8')
                 if (stockmarketdemo8.length > 0) {
                  var data = generateDayWiseTimeSeries(new Date('10 Feb 2018').getTime(), 185, {
                    min: 30,
                    max: 90
                  })
                  var optionsline2 = {
                    chart: {
                      id: 'stockmarketdemo8',
                      type: 'line',
                      height: 230,
                      toolbar: {
                        autoSelected: 'pan',
                        show: false
                      }
                    },
                    colors: ['#8E54E9'],
                    stroke: {
                      width: 2,
                      curve: 'smooth'
                    },
                    dataLabels: {
                      enabled: false
                    },
                    fill: {
                      opacity: 1,
                    },
                    markers: {
                      size: 0
                    },
                    series: [{
                      data: data
                    }],
                    xaxis: {
                      type: 'datetime'
                    }
                  }

                  var chartline2 = new ApexCharts(
                    document.querySelector("#stockmarketdemo8"),
                    optionsline2
                  );

                  chartline2.render();
              }


            // stockmarketdemo8bottom
             var stockmarketdemo8bottom = jQuery('#stockmarketdemo8bottom')
                if (stockmarketdemo8bottom.length > 0) {
                var options = {
                      chart: {
                        id: 'stockmarketdemo8bottom',
                        height: 130,
                        type: 'area',
                        brush:{
                          target: 'stockmarketdemo8',
                          enabled: true
                        },
                        selection: {
                          enabled: true,
                          xaxis: {
                            min: new Date('19 Jun 2018').getTime(),
                            max: new Date('14 Aug 2018').getTime()
                          }
                        },
                      },
                      colors: ['#8E54E9'],
                      series: [{
                        data: data
                      }],
                      fill: {
                        gradient: {
                          enabled: true,
                          opacityFrom: 0.91,
                          opacityTo: 0.1,
                        }
                      },
                      xaxis: {
                        type: 'datetime',
                        offsetX: 10,
                        tooltip: {
                          enabled: false
                        }
                      },
                      yaxis: {
                        tickAmount: 2
                      }
                    }

                    var chart = new ApexCharts(
                      document.querySelector("#stockmarketdemo8bottom"),
                      options
                    );

                    chart.render();
                }

                function generateDayWiseTimeSeries(baseval, count, yrange) {
                  var i = 0;
                  var series = [];
                  while (i < count) {
                    var x = baseval;
                    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                    series.push([x, y]);
                    baseval += 86400000;
                    i++;
                  }
                  return series;
                }


                 // stockmarketdemo9
             var stockmarketdemo9 = jQuery('#stockmarketdemo9')
                if (stockmarketdemo9.length > 0) {

                    var options = {
                          chart: {
                            height: 354,
                            type: 'line',
                            toolbar: {
                                  show: false,
                                },
                            zoom: {
                              enabled: false
                            },
                            animations: {
                              enabled: false
                            }
                          },
                          colors: ['#45aaf2', '#32b432', '#fd9644'],
                          legend: {
                            show: true,
                            showForSingleSeries: true,
                            showForZeroSeries: true,
                            position: 'top',
                            horizontalAlign: 'right'
                          },
                          stroke: {
                            width: [5,5,4],
                            curve: 'straight'
                          },
                          series: [{
                            name: 'Peter',
                            data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
                          }, {
                            name: 'Johnny',
                            data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
                          }, {
                            name: 'David',
                            data: [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
                          }],
                          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                          xaxis: {
                          },
                        }
                        var chart = new ApexCharts(
                          document.querySelector("#stockmarketdemo9"),
                          options
                        );

                        chart.render();
                      }

             // datingdemo1
             var datingdemo1 = jQuery('#datingdemo1')
                    if (datingdemo1.length > 0) {

                       var options = {
                            chart: {
                                height: 440,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                shadow: {
                                    enabled: false,
                                    color: '#bbb',
                                    top: 3,
                                    left: 2,
                                    blur: 3,
                                    opacity: 1
                                },
                            },
                            stroke: {
                                width: 4,
                                curve: 'smooth'
                            },
                            series: [{
                                name: 'Likes',
                                data: [1, 35, 10, 30, 8, 25, 6, 40, 10, 34, 8, 30]
                            }],
                            xaxis: {
                                type: 'datetime',
                                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000'],
                                 labels: {
                                    show: true,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            title: {
                                 align: 'left',
                                style: {
                                    fontSize: "16px",
                                    color: '#666'
                                }
                            },
                            grid: {
                            show: true,
                           borderColor: '#eceef3',
                             },
                            fill: {
                                type: 'gradient',
                                gradient: {
                                    shade: 'dark',
                                    gradientToColors: [ '#ff0792'],
                                    shadeIntensity: 1,
                                    type: 'horizontal',
                                    opacityFrom: 1,
                                    opacityTo: 1,
                                    stops: [0, 100, 100, 100]
                                },
                            },
                            markers: {
                                size: 5,
                                opacity: 0.9,
                                colors: ["#ffffff"],
                                strokeColor: "#ff0792",
                                strokeWidth: 2,

                                hover: {
                                    size: 7,
                                }
                            },
                            yaxis: {
                                min: -10,
                                max: 40,
                                title: {
                                    show: false,
                                },
                                labels: {
                                    show: false,
                                },
                                axisBorder: {
                                     show: false,
                                 },

                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#datingdemo1"),
                        options
                    );

                    chart.render();
            }

            // datingdemo2
             var datingdemo2 = jQuery('#datingdemo2')
                if (datingdemo2.length > 0) {
                    var options = {
                        chart: {
                            height: 350,
                            type: 'radialBar',
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: '22px',
                                    },
                                    value: {
                                        fontSize: '16px',
                                    },
                                    total: {
                                        show: true,
                                        label: 'Total',
                                        formatter: function (w) {
                                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                            return 249
                                        }
                                    }
                                }
                            }
                        },
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  shade: 'dark',
                                  type: "vertical",
                                  shadeIntensity: 1,
                                  opacityFrom: 1,
                                  opacityTo:1,
                                  gradientToColors: ['#8E54E9', '#45aaf2' , '#2bcbba'],
                                  stops: [0, 90, 100]
                                }
                          },
                        colors:['#8E54E9','#45aaf2', '#2bcbba'],
                        series: [45, 55, 80],
                        labels: ['Desktop', 'Tablet', 'Mobile'],
                        responsive: [{
                            breakpoint: 400,
                            options: {
                                chart: {
                                    offsetY:0,
                                    offsetX:0,
                                    height: 300,
                                }
                            },
                        }]

                    }

                   var chart = new ApexCharts(
                        document.querySelector("#datingdemo2"),
                        options
                    );

                    chart.render();
            }

            // datingdemo3
            function generateDayWiseTimeSeries(baseval, count, yrange) {
              var i = 0;
              var series = [];
              while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
              }
              return series;
            }

             var datingdemo3 = jQuery('#datingdemo3')
                if (datingdemo3.length > 0) {
                     var options = {
                      chart: {
                        height: 320,
                        type: 'area',
                        stacked: true,
                        toolbar: {
                              show: false,
                            },
                        events: {
                          selection: function(chart, e) {
                            console.log(new Date(e.xaxis.min) )
                          }
                        },

                      },
                      colors: ['#8c66e8', '#8ea4e8', '#efecf1'],
                      dataLabels: {
                          enabled: false
                      },
                      stroke: {
                        curve: 'smooth',
                        width: '4'
                      },
                      series: [{
                          name: 'Male',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 60
                          })
                        },
                        {
                          name: 'Female',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 20
                          })
                        },

                        {
                          name: 'Non Registered',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 15
                          })
                        }
                      ],
                      fill: {
                        gradient: {
                          enabled: true,
                          opacityFrom: 0.9,
                          opacityTo: 0.4,
                        }
                      },
                      legend: {
                        show: false,
                        showForSingleSeries: false,
                        showForZeroSeries: false,
                        position: 'top',
                        horizontalAlign: 'right'
                      },
                      xaxis: {
                        type: 'datetime'
                      },
                       yaxis: {
                        labels: {
                            show: false,
                        },
                        },
                    }

                    /*
                      // this function will generate output in this format
                      // data = [
                          [timestamp, 23],
                          [timestamp, 33],
                          [timestamp, 12]
                          ...
                      ]
                      */
                    
                   var chart = new ApexCharts(
                            document.querySelector("#datingdemo3"),
                            options
                        );

                        chart.render();
                    }

             // datingdemo4
                var datingdemo4 = jQuery('#datingdemo4')
                    if (datingdemo4.length > 0) {
                  var optionsArea = {
                      chart: {
                        height: 340,
                        type: 'area',
                        toolbar: {
                          show: false,
                        },
                        zoom: {
                          enabled: false
                        },
                      },
                      stroke: {
                        curve: 'straight'
                      },
                      colors:['#8E54E9', '#45aaf2'],
                      series: [
                        {
                          name: "Blog",
                          data: [{
                            x: 0,
                            y: 0
                          }, {
                            x: 4,
                            y: 5
                          }, {
                            x: 5,
                            y: 3
                          }, {
                            x: 9,
                            y: 8
                          }, {
                            x: 14,
                            y: 4
                          }, {
                            x: 18,
                            y: 5
                          }, {
                            x: 25,
                            y: 0
                          }]
                        },
                        {
                          name: "External",
                          data: [{
                            x: 0,
                            y: 0
                          }, {
                            x: 2,
                            y: 5
                          }, {
                            x: 5,
                            y: 4
                          }, {
                            x: 10,
                            y: 11
                          }, {
                            x: 14,
                            y: 4
                          }, {
                            x: 18,
                            y: 8
                          }, {
                            x: 25,
                            y: 0
                          }]
                        }
                      ],
                      fill: {
                        opacity: 1,
                        gradient: {
                          enabled: false,
                        }
                      },
                      markers: {
                        size: 0,
                        style: 'hollow',
                        hover: {
                          opacity: 5,
                        }
                      },
                      grid: {
                        show: true,
                       borderColor: '#eceef3',
                         },
                      tooltip: {
                        intersect: true,
                        shared: false,
                      },
                      xaxis: {
                        tooltip: {
                          enabled: false
                        },
                        labels: {
                          show: false
                        },
                        axisBorder: {
                          show: false
                        },
                        axisTicks: {
                          show: false
                        }
                      },
                      yaxis: {
                        tickAmount: 4,
                        max: 12,
                        axisBorder: {
                          show: false
                        },
                        axisTicks: {
                          show: false
                        },
                        labels: {
                          style: {
                            color: '#78909c'
                          }
                        }
                      },
                      legend: {
                        show: false
                      }
                    }

                    var chartArea = new ApexCharts(document.querySelector('#datingdemo4'), optionsArea);
                    chartArea.render();
                   }


              // datingdemo5
                var datingdemo5 = jQuery('#datingdemo5')
                    if (datingdemo5.length > 0) {
                        var options = {
                            chart: {
                                type: 'bar',
                                width: 120,
                                height: 50,
                                sparkline: {
                                  enabled: true
                                }
                              },
                              colors:['#8E54E9'],
                              plotOptions: {
                                bar: {
                                  columnWidth: '20%',
                                   endingShape: 'rounded',
                                }
                              },
                              series: [{
                                data: [15, 55, 60, 69, 53, 35, 54]
                              }],
                              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                              xaxis: {
                                crosshairs: {
                                  width: 1
                                },
                              },
                              tooltip: {
                                fixed: {
                                  enabled: false
                                },
                                x: {
                                  show: false
                                },
                                y: {
                                  title: {
                                    formatter: function (seriesName) {
                                      return ''
                                    }
                                  }
                                },
                                marker: {
                                  show: false
                                }
                              },
                              responsive: [{
                                breakpoint: 360,
                                options: {
                                    chart: {
                                        width:60,
                                        height:60
                                    }
                                },
                            },{
                                breakpoint: 480,
                                options: {
                                    chart: {
                                        width:100,
                                        height:80
                                    }
                                },
                            }]
                        }

                      var chart = new ApexCharts(
                                document.querySelector("#datingdemo5"),
                                options
                            );
                            chart.render();
                       }

               // datingdemo6
                var datingdemo6 = jQuery('#datingdemo6')
            if (datingdemo6.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#2bcbba'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo6"),
                        options
                    );
                    chart.render();
               }
               // datingdemo7
                var datingdemo7 = jQuery('#datingdemo7')
            if (datingdemo7.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#fb0792'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo7"),
                        options
                    );
                    chart.render();
               }

               // datingdemo8
                var datingdemo8 = jQuery('#datingdemo8')
            if (datingdemo8.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#32b432'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo8"),
                        options
                    );
                    chart.render();
               }

            // Job Portal
            var jobportaldemo1 = jQuery('#jobportaldemo1')
                if (jobportaldemo1.length > 0) {

                    var options = {
                        chart: {
                            height: 350,
                            type: 'bar'
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors:['#4776E6'],
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  type: "vertical",
                                  shadeIntensity: 0,
                                  opacityFrom: 1,
                                  opacityTo: 0,
                                  gradientToColors: ['#8E54E9'],
                                  stops: [0, 90, 100]
                                }
                          },
                        series: [{
                            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                        }],
                        grid: {
                            show: true,
                            borderColor: '#fff',
                        },
                        xaxis: {
                            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                            labels: {
                                style: {
                                    colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-xaxis-label',
                                },
                            },
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                        }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo1"),
                        options
                    );

                    chart.render();

            }
            var jobportaldemo2 = jQuery('#jobportaldemo2')
                if (jobportaldemo2.length > 0) {
                    var options = {
                        chart: {
                            width: 260,
                            type: 'donut',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        series:[60, 40, 25, 15],
                        labels: ['Direct', 'Referral', 'Organic', 'Social'],
                        colors:['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'dark',
                                type: "vertical",
                                shadeIntensity: 1,
                                opacityFrom: 1,
                                opacityTo: 1,
                                gradientToColors: ['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                                stops: [0, 90, 100]
                              }
                        },
                        legend: {
                            show: false,
                            position: 'left',
                            horizontalAlign: 'center',
                             fontSize: '14px',
                             itemMargin: {
                                horizontal: 20,
                                vertical: 5
                            },
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]

                    }

                    var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo2"),
                        options
                    );

                    chart.render();

                    var paper = chart.paper()

            }

            // jobportaldemo3
             var jobportaldemo3 = jQuery('#jobportaldemo3')
                if (jobportaldemo3.length > 0) {
                    var options = {
                        chart: {
                            height: 280,
                            type: 'radialBar',
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: '18px',
                                    },
                                    value: {
                                        fontSize: '16px',
                                    },
                                    total: {
                                        show: true,
                                        label: 'Total',
                                        formatter: function (w) {
                                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                            return 100 + '%'
                                        }
                                    }
                                }
                            }
                        },
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  shade: 'dark',
                                  type: "vertical",
                                  shadeIntensity: 1,
                                  opacityFrom: 1,
                                  opacityTo:0.5,
                                  gradientToColors: ['#8E54E9', '#4776E6'],
                                  stops: [0, 90, 100]
                                }
                          },
                        colors:['#8E54E9','#4776E6'],
                        series: [45, 55],
                        labels: ['Job Seekers', 'Job Providers'],
                        responsive: [{
                            breakpoint: 400,
                            options: {
                                chart: {
                                    offsetY:0,
                                    offsetX:0,
                                    height: 300,
                                }
                            },
                        }]

                    }

                   var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo3"),
                        options
                    );

                    chart.render();
            }
            // jobportaldemo4
            function generateDayWiseTimeSeries(baseval, count, yrange) {
              var i = 0;
              var series = [];
              while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
              }
              return series;
            }
             var jobportaldemo4 = jQuery('#jobportaldemo4')
                if (jobportaldemo4.length > 0) {
                     var options = {
                          chart: {
                            height: 300,
                            type: 'area',
                            stacked: true,
                            toolbar: {
                                  show: false,
                                },
                            events: {
                              selection: function(chart, e) {
                                console.log(new Date(e.xaxis.min) )
                              }
                            },
                          },
                          colors: ['#e231ad', '#9e06e7', '#efecf1'],
                          dataLabels: {
                              enabled: false
                          },
                          stroke: {
                            curve: 'smooth',
                            width: '4'
                          },
                          series: [{
                              name: 'Applicants',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 60
                              })
                            },
                            {
                              name: 'Interviews',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 20
                              })
                            },

                            {
                              name: 'Forwards',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 15
                              })
                            }
                          ],
                          fill: {
                            gradient: {
                              enabled: true,
                              opacityFrom: 0.9,
                              opacityTo: 0.4,
                            }
                          },
                          legend: {
                            show: false,
                            showForSingleSeries: false,
                            showForZeroSeries: false,
                            position: 'top',
                            horizontalAlign: 'right'
                          },
                          xaxis: {
                            type: 'datetime',
                            labels: {
                                offsetX: -5,
                            }
                          },
                           yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            responsive: [{
                              breakpoint: 480,
                              options: {
                                xaxis: {
                                  type: 'datetime',
                                  labels: {
                                      offsetX: 0,
                                  }
                                },
                              },
                          }]
                        }

                        /*
                          // this function will generate output in this format
                          // data = [
                              [timestamp, 23],
                              [timestamp, 33],
                              [timestamp, 12]
                              ...
                          ]
                          */
                       

                       var chart = new ApexCharts(
                                document.querySelector("#jobportaldemo4"),
                                options
                            );

                            chart.render();
                        }

                var jobportaldemo5 = jQuery('#jobportaldemo5')
                if (jobportaldemo5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.9,
                          opacityTo: 0.1,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#d270f9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#jobportaldemo5"),
                    options
                );

                chart.render();
                }


                // jobportaldemo6
             var jobportaldemo6 = jQuery('#jobportaldemo6')
                if (jobportaldemo6.length > 0) {
                    var options = {
                            chart: {
                                height: 200,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 3
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#jobportaldemo6"),
                    options
                );

                chart.render();
                }

                // CRM
                var crmdemo1 = jQuery('#crmdemo1')
                    if (crmdemo1.length > 0) {

                       var options = {
                            chart: {
                                height: 390,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                shadow: {
                                    enabled: false,
                                    color: '#bbb',
                                    top: 3,
                                    left: 2,
                                    blur: 3,
                                    opacity: 1
                                },
                            },
                            stroke: {
                                width: 4,
                                curve: 'smooth'
                            },
                            series: [{
                                name: 'Likes',
                                data: [1, 35, 10, 30, 8, 25, 6, 40, 10, 34, 8, 30]
                            }],
                            xaxis: {
                                type: 'datetime',
                                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000'],
                                axisBorder: {
                                 show: false,
                             },
                            },
                            title: {
                                 align: 'left',
                                style: {
                                    fontSize: "16px",
                                    color: '#666'
                                }
                            },
                            fill: {
                                type: 'gradient',
                                gradient: {
                                    shade: 'dark',
                                    gradientToColors: [ '#ff0792'],
                                    shadeIntensity: 1,
                                    type: 'horizontal',
                                    opacityFrom: 1,
                                    opacityTo: 1,
                                    stops: [0, 100, 100, 100]
                                },
                            },
                            markers: {
                                size: 5,
                                opacity: 0.9,
                                colors: ["#ffffff"],
                                strokeColor: "#ff0792",
                                strokeWidth: 2,

                                hover: {
                                    size: 7,
                                }
                            },
                            yaxis: {
                                min: -10,
                                max: 40,
                                title: {
                                    show: false,
                                },

                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#crmdemo1"),
                        options
                    );

                    chart.render();
            }

            var crmdemo2 = jQuery('#crmdemo2')
                if (crmdemo2.length > 0) {

                    var options = {
                        chart: {
                            height: 400,
                            type: 'bar',
                            toolbar: {
                                  show: false,
                                },
                        },
                        plotOptions: {
                            bar: {
                                 barHeight: '20%',
                                horizontal: true,
                            }
                        },
                        legend: {
                            show: true,
                            position: "top",
                            containerMargin: {
                              top: -10
                            }
                          },
                        grid: {
                        show: true,
                        borderColor: '#ebedf2',
                        },
                        colors:['#8E54E9'],
                        dataLabels: {
                            enabled: false
                        },
                        series: [{
                            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200]
                        }],
                        xaxis: {
                            categories: ['Deal lost', 'Lead', 'Negotiating', 'Qualified', 'Proposal submitted', 'Sale agreed', 'Running projects', 'Closed projects', 'Payment received'],
                            axisBorder: {
                                 show: false,
                             },
                        },
                        
                        responsive: [{
                          breakpoint: 400,
                          options: {
                            chart: {
                              height: 400,
                              type: 'bar',
                              toolbar: {
                                    show: false,
                                  },
                          },
                            plotOptions: {
                              bar: {
                                  horizontal: true,
                              }
                          },
                          
                          },
                      }]
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#crmdemo2"),
                        options
                    );

                    chart.render();
                }


            // Real Estate
            var realestatedemo1 = jQuery('#realestatedemo1')
                if (realestatedemo1.length > 0) {
                       var options = {
                            chart: {
                                height: 340,
                                type: 'area',
                                toolbar: {
                                show: false
                                },
                            },
                            dataLabels: {
                                enabled: false
                            },
                            legend: {
                                offsetY: -10,
                            },
                            colors:['#fb0792', '#8E54E9'],
                            fill: {
                            type: 'gradient',
                                gradient: {
                                  type: "vertical",
                                  shadeIntensity: 0,
                                  opacityFrom: 0.3,
                                  opacityTo: 0.2,
                                  gradientToColors: ['#fbacd9'],
                                  stops: [0, 90, 100]
                                }
                          },
                            stroke: {
                                curve: 'smooth',
                                width: 2
                            },
                            series: [{
                                name: 'Sale income',
                                data: [30, 50, 32, 33, 42, 30, 50, 42, 33, 42, 30, 50, 34]
                            },
                            {
                                name: 'Rent income',
                                data: [20, 30, 22, 23, 32, 20, 30, 22, 23, 32, 20, 30, 24]
                            }],
                            tooltip: {
                                x: {
                                    format: 'dd/MM/yy HH:mm'
                                },
                            },
                            xaxis: {
                                show: true,
                                labels: {
                                    show: true,
                                },
                                 axisBorder: {
                                     color: '#fafbfb',
                                     show: true,
                                 },
                                 axisTicks: {
                                 color: '#fafbfb',
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: true,
                            },
                            axisBorder: {
                                 color: '#fff',
                                 show: true,
                             },
                            },
                            grid: {
                            show: true,
                            borderColor: '#fafbfb',
                            },
                        }
                    var chart = new ApexCharts(
                        document.querySelector("#realestatedemo1"),
                        options
                    );
                    chart.render();
                 }

            var realestatedemo3 = jQuery('#realestatedemo3')
            if (realestatedemo3.length > 0) {
                var optionsBar = {
                  chart: {
                    type: 'bar',
                    height: 250,
                    width: '100%',
                    stacked: true,
                    foreColor: '#999',
                    toolbar: {
                        show: false
                        },
                  },
                  plotOptions: {
                    bar: {
                      dataLabels: {
                        enabled: false
                      },
                      columnWidth: '60%',
                      endingShape: 'rounded'
                    }
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  colors: ["#8E54E9", '#eceef3'],
                  series: [{
                    name: "Sessions",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }, {
                    name: "Views",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }],
                  xaxis: {
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    },
                    crosshairs: {
                      show: false
                    },
                    labels: {
                      show: false,
                      style: {
                        fontSize: '14px'
                      }
                    },
                  },
                  grid: {
                    xaxis: {
                      lines: {
                        show: false
                      },
                    },
                    yaxis: {
                      lines: {
                        show: false
                      },
                    }
                  },
                  yaxis: {
                    axisBorder: {
                      show: false
                    },
                    labels: {
                      show: false
                    },
                  },
                  legend: {
                    floating: false,
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -36
                  },
                  title: {
                    text: '10 days left',
                    align: 'left',
                  },
                  tooltip: {
                    shared: true
                  }

                }


                var chartBar = new ApexCharts(document.querySelector('#realestatedemo3'), optionsBar);
                chartBar.render();


                }

            // Crypto Currency
            var cryptodemo1 = jQuery('#crypto-demo1-candlestick')
                if (cryptodemo1.length > 0) {
                    var seriesData = [{
                            x: new Date(2016, 01, 01),
                            y: [51.98, 56.29, 51.59, 53.85]
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: [53.66, 54.99, 51.35, 52.95]
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: [52.96, 53.78, 51.54, 52.48]
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: [52.54, 52.79, 47.88, 49.24]
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: [49.10, 52.86, 47.70, 52.78]
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: [52.83, 53.48, 50.32, 52.29]
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: [52.20, 54.48, 51.64, 52.58]
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: [52.76, 57.35, 52.15, 57.03]
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: [57.04, 58.15, 48.88, 56.19]
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: [56.09, 58.85, 55.48, 58.79]
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: [58.78, 59.65, 58.23, 59.05]
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: [59.37, 61.11, 59.35, 60.34]
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: [60.40, 60.52, 56.71, 56.93]
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: [57.02, 59.71, 56.04, 56.82]
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: [56.97, 59.62, 54.77, 59.30]
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: [59.11, 62.29, 59.10, 59.85]
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: [59.97, 60.11, 55.66, 58.42]
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: [58.34, 60.93, 56.75, 57.42]
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: [57.76, 58.08, 51.18, 54.71]
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: [54.80, 61.42, 53.18, 57.35]
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: [57.56, 63.09, 57.00, 62.99]
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: [62.89, 63.42, 59.72, 61.76]
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: [61.71, 64.15, 61.29, 63.04]
                          }
                        ]

                        var seriesDataLinear = [{
                            x: new Date(2016, 01, 01),
                            y: 3.85
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: 2.95
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: -12.48
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: 19.24
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: 12.78
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: 22.29
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: -12.58
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: -17.03
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: -19.19
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: -28.79
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: -39.05
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: 20.34
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: 36.93
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: 36.82
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: 29.30
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: 39.85
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: 28.42
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: 37.42
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: 24.71
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: 37.35
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: 32.99
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: 31.76
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: 43.04
                          }
                        ]

                        var seriesData7 = [{
                            x: new Date(2016, 01, 01),
                            y: [1151.98, 1156.29, 1151.59, 1153.85]
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: [1153.66, 1154.99, 1151.35, 1152.95]
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: [1152.96, 1153.78, 1151.54, 1152.48]
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: [1152.54, 1152.79, 1147.88, 1149.24]
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: [1149.10, 1152.86, 1147.70, 1152.78]
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: [1152.83, 1153.48, 1150.32, 1152.29]
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: [1152.20, 1154.48, 1151.64, 1152.58]
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: [1152.76, 1157.35, 1152.15, 1157.03]
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: [1157.04, 1158.15, 1148.88, 1156.19]
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: [1156.09, 1158.85, 1155.48, 1158.79]
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: [1158.78, 1159.65, 1158.23, 1159.05]
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: [1159.37, 1161.11, 1159.35, 1160.34]
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: [1160.40, 1160.52, 1156.71, 1156.93]
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: [1157.02, 1159.71, 1156.04, 1156.82]
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: [1156.97, 1159.62, 1154.77, 1159.30]
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: [1159.11, 1162.29, 1159.10, 1159.85]
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: [1159.97, 1160.11, 1155.66, 1158.42]
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: [1158.34, 1160.93, 1156.75, 1157.42]
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: [1157.76, 1158.08, 1151.18, 1154.71]
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: [1154.80, 1161.42, 1153.18, 1157.35]
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: [1157.56, 1163.09, 1157.00, 1162.99]
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: [1162.89, 1163.42, 1159.72, 1161.76]
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: [1161.71, 1164.15, 1161.29, 1163.04]
                          }
                        ]

                        var seriesData2 = [{
                            x: new Date(1538778600000),
                            y: [6629.81, 6650.5, 6623.04, 6633.33]
                          },
                          {
                            x: new Date(1538780400000),
                            y: [6632.01, 6643.59, 6620, 6630.11]
                          },
                          {
                            x: new Date(1538782200000),
                            y: [6630.71, 6648.95, 6623.34, 6635.65]
                          },
                          {
                            x: new Date(1538784000000),
                            y: [6635.65, 6651, 6629.67, 6638.24]
                          },
                          {
                            x: new Date(1538785800000),
                            y: [6638.24, 6640, 6620, 6624.47]
                          },
                          {
                            x: new Date(1538787600000),
                            y: [6624.53, 6636.03, 6621.68, 6624.31]
                          },
                          {
                            x: new Date(1538789400000),
                            y: [6624.61, 6632.2, 6617, 6626.02]
                          },
                          {
                            x: new Date(1538791200000),
                            y: [6627, 6627.62, 6584.22, 6603.02]
                          },
                          {
                            x: new Date(1538793000000),
                            y: [6605, 6608.03, 6598.95, 6604.01]
                          },
                          {
                            x: new Date(1538794800000),
                            y: [6604.5, 6614.4, 6602.26, 6608.02]
                          },
                          {
                            x: new Date(1538796600000),
                            y: [6608.02, 6610.68, 6601.99, 6608.91]
                          },
                          {
                            x: new Date(1538798400000),
                            y: [6608.91, 6618.99, 6608.01, 6612]
                          },
                          {
                            x: new Date(1538800200000),
                            y: [6612, 6615.13, 6605.09, 6612]
                          },
                          {
                            x: new Date(1538802000000),
                            y: [6612, 6624.12, 6608.43, 6622.95]
                          },
                          {
                            x: new Date(1538803800000),
                            y: [6623.91, 6623.91, 6615, 6615.67]
                          },
                          {
                            x: new Date(1538805600000),
                            y: [6618.69, 6618.74, 6610, 6610.4]
                          },
                          {
                            x: new Date(1538807400000),
                            y: [6611, 6622.78, 6610.4, 6614.9]
                          },
                          {
                            x: new Date(1538809200000),
                            y: [6614.9, 6626.2, 6613.33, 6623.45]
                          },
                          {
                            x: new Date(1538811000000),
                            y: [6623.48, 6627, 6618.38, 6620.35]
                          },
                          {
                            x: new Date(1538812800000),
                            y: [6619.43, 6620.35, 6610.05, 6615.53]
                          },
                          {
                            x: new Date(1538814600000),
                            y: [6615.53, 6617.93, 6610, 6615.19]
                          },
                          {
                            x: new Date(1538816400000),
                            y: [6615.19, 6621.6, 6608.2, 6620]
                          },
                          {
                            x: new Date(1538818200000),
                            y: [6619.54, 6625.17, 6614.15, 6620]
                          },
                          {
                            x: new Date(1538820000000),
                            y: [6620.33, 6634.15, 6617.24, 6624.61]
                          },
                          {
                            x: new Date(1538821800000),
                            y: [6625.95, 6626, 6611.66, 6617.58]
                          },
                          {
                            x: new Date(1538823600000),
                            y: [6619, 6625.97, 6595.27, 6598.86]
                          },
                          {
                            x: new Date(1538825400000),
                            y: [6598.86, 6598.88, 6570, 6587.16]
                          },
                          {
                            x: new Date(1538827200000),
                            y: [6588.86, 6600, 6580, 6593.4]
                          },
                          {
                            x: new Date(1538829000000),
                            y: [6593.99, 6598.89, 6585, 6587.81]
                          },
                          {
                            x: new Date(1538830800000),
                            y: [6587.81, 6592.73, 6567.14, 6578]
                          },
                          {
                            x: new Date(1538832600000),
                            y: [6578.35, 6581.72, 6567.39, 6579]
                          },
                          {
                            x: new Date(1538834400000),
                            y: [6579.38, 6580.92, 6566.77, 6575.96]
                          },
                          {
                            x: new Date(1538836200000),
                            y: [6575.96, 6589, 6571.77, 6588.92]
                          },
                          {
                            x: new Date(1538838000000),
                            y: [6588.92, 6594, 6577.55, 6589.22]
                          },
                          {
                            x: new Date(1538839800000),
                            y: [6589.3, 6598.89, 6589.1, 6596.08]
                          },
                          {
                            x: new Date(1538841600000),
                            y: [6597.5, 6600, 6588.39, 6596.25]
                          },
                          {
                            x: new Date(1538843400000),
                            y: [6598.03, 6600, 6588.73, 6595.97]
                          },
                          {
                            x: new Date(1538845200000),
                            y: [6595.97, 6602.01, 6588.17, 6602]
                          },
                          {
                            x: new Date(1538847000000),
                            y: [6602, 6607, 6596.51, 6599.95]
                          },
                          {
                            x: new Date(1538848800000),
                            y: [6600.63, 6601.21, 6590.39, 6591.02]
                          },
                          {
                            x: new Date(1538850600000),
                            y: [6591.02, 6603.08, 6591, 6591]
                          },
                          {
                            x: new Date(1538852400000),
                            y: [6591, 6601.32, 6585, 6592]
                          },
                          {
                            x: new Date(1538854200000),
                            y: [6593.13, 6596.01, 6590, 6593.34]
                          },
                          {
                            x: new Date(1538856000000),
                            y: [6593.34, 6604.76, 6582.63, 6593.86]
                          },
                          {
                            x: new Date(1538857800000),
                            y: [6593.86, 6604.28, 6586.57, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6604.2, 6590, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6595, 6583.27, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6598.21, 6587.6, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6605, 6596.61, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.99, 6597.5, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6605, 6600, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6606, 6604.07, 6606]
                          },
                        ]

                        var seriesData3 = [{
                            x: new Date(1538867400000),
                            y: [6591.08, 6592.22, 6588.9, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6592, 6593.51]
                          },
                          {
                            x: new Date(1538868000000),
                            y: [6593.51, 6596.03, 6588.04, 6588.04]
                          },
                          {
                            x: new Date(1538868300000),
                            y: [6588.26, 6592.78, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6593.99, 6587.6, 6593.99]
                          },
                          {
                            x: new Date(1538868900000),
                            y: [6594, 6596.76, 6593.02, 6594.01]
                          },
                          {
                            x: new Date(1538869200000),
                            y: [6596, 6597, 6593.05, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6596.3, 6590.04, 6591.68]
                          },
                          {
                            x: new Date(1538869800000),
                            y: [6593.26, 6597.97, 6590.37, 6595.43]
                          },
                          {
                            x: new Date(1538870100000),
                            y: [6595.43, 6598.21, 6593.49, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594.15, 6594.8]
                          },
                          {
                            x: new Date(1538870700000),
                            y: [6595.01, 6599.8, 6594, 6598.78]
                          },
                          {
                            x: new Date(1538871000000),
                            y: [6598.77, 6598.79, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6596.2, 6591.92, 6594.01]
                          },
                          {
                            x: new Date(1538871600000),
                            y: [6594.51, 6601, 6590, 6599.59]
                          },
                          {
                            x: new Date(1538871900000),
                            y: [6593.6, 6599.58, 6593.6, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6602.05, 6596.61, 6601.65]
                          },
                          {
                            x: new Date(1538872500000),
                            y: [6602.05, 6602.94, 6597.5, 6600.05]
                          },
                          {
                            x: new Date(1538872800000),
                            y: [6602.96, 6603, 6600.37, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6601.43, 6600.5, 6601.4]
                          },
                          {
                            x: new Date(1538873400000),
                            y: [6601.42, 6605, 6600.5, 6600.64]
                          },
                          {
                            x: new Date(1538873700000),
                            y: [6600.64, 6603.84, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.48]
                          },
                          {
                            x: new Date(1538874300000),
                            y: [6601.73, 6605, 6600.59, 6601.54]
                          },
                          {
                            x: new Date(1538874600000),
                            y: [6602.8, 6605, 6600, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.19, 6590.64]
                          },
                          {
                            x: new Date(1538875200000),
                            y: [6593.95, 6598, 6589.14, 6591.44]
                          },
                          {
                            x: new Date(1538875500000),
                            y: [6591.48, 6593.45, 6589.15, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6598, 6592, 6595.85]
                          },
                          {
                            x: new Date(1538876100000),
                            y: [6595.85, 6601.76, 6595.83, 6601.72]
                          },
                          {
                            x: new Date(1538876400000),
                            y: [6601.69, 6605, 6598.52, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6604.4, 6601.51, 6601.62]
                          },
                          {
                            x: new Date(1538877000000),
                            y: [6601.74, 6602.88, 6599.09, 6600]
                          },
                          {
                            x: new Date(1538877300000),
                            y: [6599.35, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6604.13]
                          },
                          {
                            x: new Date(1538877900000),
                            y: [6603.06, 6604.45, 6601.25, 6602.06]
                          },
                          {
                            x: new Date(1538878200000),
                            y: [6602.06, 6604, 6600.93, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6602.41, 6599.09, 6602.41]
                          },
                          {
                            x: new Date(1538878800000),
                            y: [6602.41, 6603.95, 6600.02, 6603.89]
                          },
                          {
                            x: new Date(1538879100000),
                            y: [6603.89, 6604.44, 6602.52, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538879700000),
                            y: [6600.02, 6602.99, 6600, 6600.23]
                          },
                          {
                            x: new Date(1538880000000),
                            y: [6600.85, 6604.43, 6600.2, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6601.7, 6603.97]
                          },
                          {
                            x: new Date(1538880600000),
                            y: [6602.49, 6603.99, 6600.07, 6600.32]
                          },
                          {
                            x: new Date(1538880900000),
                            y: [6600.32, 6603.5, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.61, 6600.31, 6602.62]
                          },
                          {
                            x: new Date(1538881500000),
                            y: [6601.57, 6603.9, 6597.5, 6601.74]
                          },
                          {
                            x: new Date(1538881800000),
                            y: [6600, 6601.73, 6598.01, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.9, 6598.61, 6600.09]
                          },
                          {
                            x: new Date(1538882400000),
                            y: [6600.09, 6603.99, 6600, 6602.08]
                          },
                          {
                            x: new Date(1538882700000),
                            y: [6602.07, 6603.99, 6602.07, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6604.41, 6602.09, 6602.26]
                          },
                          {
                            x: new Date(1538883300000),
                            y: [6602.6, 6605, 6602.24, 6603.02]
                          },
                          {
                            x: new Date(1538883600000),
                            y: [6603.01, 6604.98, 6600, 6601.03]
                          },
                          {
                            x: new Date(1538883900000),
                            y: [6601.81, 6602.6, 6601.02, 6602.3]
                          },
                          {
                            x: new Date(1538884200000),
                            y: [6601.72, 6604.98, 6601.1, 6604.03]
                          },
                          {
                            x: new Date(1538884500000),
                            y: [6604.17, 6604.98, 6604.02, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6606, 6604.07, 6605.01]
                          },
                          {
                            x: new Date(1538885100000),
                            y: [6605, 6607.52, 6605, 6607.28]
                          },
                        ]



                        var seriesData4 = [{
                            x: new Date(1538858700000),
                            y: [6603.08, 6604.28, 6596.01, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6597, 6599.76]
                          },
                          {
                            x: new Date(1538860500000),
                            y: [6597.53, 6599.75, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6603, 6590, 6603]
                          },
                          {
                            x: new Date(1538862300000),
                            y: [6602.73, 6604.2, 6596.72, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6591.06, 6591.06]
                          },
                          {
                            x: new Date(1538864100000),
                            y: [6591.06, 6598.4, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6594.99, 6583.27, 6592.43]
                          },
                          {
                            x: new Date(1538865900000),
                            y: [6592.46, 6595, 6587.07, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6592.22, 6588.62, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6597, 6587.6, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6598.21, 6590.04, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6603, 6596.61, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6605, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6604.44, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.9, 6597.5, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.99, 6598.61, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6605, 6600, 6601.03]
                          },
                          {
                            x: new Date(1538883900000),
                            y: [6601.81, 6604.98, 6601.02, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6605.24, 6604.07, 6605.24]
                          },
                        ]


                        var seriesData5 = [{
                          x: 1538876100000,
                          y: [6595.85, 6601.76, 6595.83, 6601.72]
                        },
                        {
                          x: 1538876400000,
                          y: [6601.69, 6605, 6598.52, 6602.01]
                        },
                        {
                          x: 1538876700000,
                          y: [6602.02, 6604.4, 6601.51, 6601.62]
                        },
                        {
                          x: 1538877000000,
                          y: [6601.74, 6602.88, 6599.09, 6600]
                        },
                        {
                          x: 1538877300000,
                          y: [6599.35, 6605, 6599.09, 6603.06]
                        },
                        {
                          x: 1538877600000,
                          y: [6603.07, 6604.5, 6600.79, 6604.13]
                        },
                        {
                          x: 1538877900000,
                          y: [6603.06, 6604.45, 6601.25, 6602.06]
                        },
                        {
                          x: 1538878200000,
                          y: [6602.06, 6604, 6600.93, 6602.11]
                        },
                        {
                          x: 1538878500000,
                          y: [6602.25, 6602.41, 6599.09, 6602.41]
                        },
                        {
                          x: 1538878800000,
                          y: [6602.41, 6603.95, 6600.02, 6603.89]
                        },
                        {
                          x: 1538879100000,
                          y: [6603.89, 6604.44, 6602.52, 6603.89]
                        },
                        {
                          x: 1538879400000,
                          y: [6604.44, 6604.44, 6600, 6600.02]
                        },
                        {
                          x: 1538879700000,
                          y: [6600.02, 6602.99, 6600, 6600.23]
                        },
                        {
                          x: 1538880000000,
                          y: [6600.85, 6604.43, 6600.2, 6602.1]
                        },
                        {
                          x: 1538880300000,
                          y: [6602.19, 6604.42, 6601.7, 6603.97]
                        },
                        {
                          x: 1538880600000,
                          y: [6602.49, 6603.99, 6600.07, 6600.32]
                        },
                        {
                          x: 1538880900000,
                          y: [6600.32, 6603.5, 6600, 6603.5]
                        },
                        {
                          x: 1538881200000,
                          y: [6603.5, 6603.61, 6600.31, 6602.62]
                        },
                        {
                          x: 1538881500000,
                          y: [6601.57, 6603.9, 6597.5, 6601.74]
                        },
                        {
                          x: 1538881800000,
                          y: [6600, 6601.73, 6598.01, 6598.62]
                        },
                        {
                          x: 1538882100000,
                          y: [6598.61, 6603.9, 6598.61, 6600.09]
                        },
                        {
                          x: 1538882400000,
                          y: [6600.09, 6603.99, 6600, 6602.08]
                        },
                        {
                          x: 1538882700000,
                          y: [6602.07, 6603.99, 6602.07, 6603.86]
                        },
                        {
                          x: 1538883000000,
                          y: [6603.85, 6604.41, 6602.09, 6602.26]
                        },
                        {
                          x: 1538883300000,
                          y: [6602.6, 6605, 6602.24, 6603.02]
                        },
                        {
                          x: 1538883600000,
                          y: [6603.01, 6604.98, 6600, 6601.03]
                        },
                        {
                          x: 1538883900000,
                          y: [6601.81, 6602.6, 6601.02, 6602.3]
                        },
                        {
                          x: 1538884200000,
                          y: [6601.72, 6604.98, 6601.1, 6604.03]
                        },
                        {
                          x: 1538884500000,
                          y: [6604.17, 6604.98, 6604.02, 6604.07]
                        },
                        {
                          x: 1538884800000,
                          y: [6604.98, 6605.7, 6604.07, 6604.28]
                        },
                        ]



                        // var seriesData5 = [[1538856000000, [6593.34, 6600, 6582.63, 6600]], [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]]

                        var seriesData6 = [{
                            x: new Date(1538856000000),
                            y: [6593.34, 6600, 6582.63, 6600]
                          },
                          {
                            x: new Date(1538856900000),
                            y: [6595.16, 6604.76, 6590.73, 6593.86]
                          },
                          {
                            x: new Date(1538857800000),
                            y: [6593.86, 6604.28, 6586.57, 6601.17]
                          },
                          {
                            x: new Date(1538858700000),
                            y: [6603.08, 6604.28, 6596.01, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6597, 6599.76]
                          },
                          {
                            x: new Date(1538860500000),
                            y: [6597.53, 6599.75, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6603, 6590, 6603]
                          },
                          {
                            x: new Date(1538862300000),
                            y: [6602.73, 6604.2, 6596.72, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6591.06, 6591.06]
                          },
                          {
                            x: new Date(1538864100000),
                            y: [6591.06, 6598.4, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6594.99, 6583.27, 6592.43]
                          },
                          {
                            x: new Date(1538865900000),
                            y: [6592.46, 6595, 6587.07, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6592.22, 6588.62, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6597, 6587.6, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6598.21, 6590.04, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6603, 6596.61, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6605, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6604.44, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.9, 6597.5, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.9, 6598.61, 6600.09]
                          },
                        ]

                    var optionsCandlestick = {
                        chart: {
                            id: 'candles',
                            height: 360,
                            type: 'candlestick',
                            toolbar: {
                                autoSelected: 'pan',
                                show: false
                            },
                            zoom: {
                                enabled: false
                            },
                        },
                        plotOptions: {
                            candlestick: {
                                colors: {
                                upward: '#32b432',
                                downward: '#e3324c'
                                }
                            }
                        },
                        series: [{
                            data: seriesData
                        }],
                        xaxis: {
                            type: 'datetime'
                        }
                    }
            
                    var chartCandlestick = new ApexCharts(
                        document.querySelector("#crypto-demo1-candlestick"),
                        optionsCandlestick
                    );
            
                    chartCandlestick.render();
            
                    var options = {
                        chart: {
                            height: 160,
                            type: 'bar',
                            brush: {
                                enabled: true,
                                target: 'candles'
                            },
                            selection: {
                                enabled: true,
                                xaxis: {
                                    min: new Date('20 Jan 2017').getTime(),
                                    max: new Date('10 Dec 2017').getTime()
                                },
                                fill: {
                                    color: '#ccc',
                                    opacity: 0.4
                                },
                                stroke: {
                                    color: '#0D47A1',
                                }
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: '80%',
                                colors: {
                                    ranges: [
                                        {
                                            from: -1000,
                                            to: 0,
                                            color: '#F15B46'
                                        }, {
                                            from: 1,
                                            to: 10000,
                                            color: '#FEB019'
                                        }
                                    ],
                                   
                                },
                            }        
                        },
                        stroke: {
                            width: 0
                        },
                        series: [{
                            name: 'volume',
                            data: seriesDataLinear
                        }],
                        xaxis: {
                            type: 'datetime',
                            axisBorder: {
                                offsetX: 13
                            }
                        },
                        yaxis: {
                            labels: {
                                show: false
                            }
                        }
                    }
            
                    var chart = new ApexCharts(
                        document.querySelector("#crypto-demo1-bar"),
                        options
                    );
            
                    chart.render();
                }
            // cryptodemo2
             var cryptodemo2 = jQuery('#cryptodemo2')
            if (cryptodemo2.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fb0792'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo2"),
                options
            );

            chart.render();

        }
        // cryptodemo3
             var cryptodemo3 = jQuery('#cryptodemo3')
            if (cryptodemo3.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#2bcbba'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo3"),
                options
            );

            chart.render();

        }
        // cryptodemo4
             var cryptodemo4 = jQuery('#cryptodemo4')
            if (cryptodemo4.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#45aaf2'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo4"),
                options
            );

            chart.render();

        }
        // cryptodemo5
             var cryptodemo5 = jQuery('#cryptodemo5')
            if (cryptodemo5.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fd9644'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#cryptodemo5"),
                        options
                    );

                    chart.render();
                  }

            // cryptodemo6
              var cryptodemo6 = jQuery('#cryptodemo6')
                if (cryptodemo6.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 45, 30, 31, 37, 39, 62, 30, 35, 41];

                var options = {
                    chart: {
                        type: 'area',
                        height: 266,
                        width : 410,
                        sparkline: {
                          enabled: true,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 5,
                        colors: ['#ce83f2']
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 1,
                          opacityTo: 0.6,
                          stops: [100, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8300c2'],
                      responsive: [{
                        breakpoint: 1440,
                        options: {
                          chart: {
                            type: 'area',
                            width : 900,
                            sparkline: {
                              enabled: true,
                            },
                          },
                        
                        },
                    }]
                }

                var chart = new ApexCharts(
                    document.querySelector("#cryptodemo6"),
                    options
                );

                chart.render();
                }

                var cryptodemo7 = jQuery('#cryptodemo7');
                    if (cryptodemo7.length > 0) {
        
                       var optionsDonutTop = {
                              chart: {
                                height: 140,
                                width: 300,
                                type: 'donut',
                              },
                              colors: ['#2bcbba', '#eceef3'],
                              labels: ['Active Deal', 'Unconfirmed Deals'],
                              series: [456, 128],
                              legend: {
                                show: false
                              },
                              dataLabels: {
                                enabled: false
                              },
                              plotOptions: {
                                pie: {
                                  size: 60,
                                  donut: {
                                    size: '72%',
                                  },
                                  offsetX: 10,
                                  offsetY: 0,
                                  dataLabels: {
                                    enabled: false
                                  },
                                }
                              },
                              responsive: [{
                                breakpoint: 400,
                                options: {
                                 plotOptions: {
                                  pie: {
                                    offsetX: -35,
                                  }
                                },
                                
                                },
                            }]
                            }
                            var cryptodemo7 = new ApexCharts(document.querySelector('#cryptodemo7'), optionsDonutTop);
                            cryptodemo7.render();
                            }
               
             // irregular
             var irregular = jQuery('#irregular')
                if (irregular.length > 0) {

                    var dataSeries = [
                        [{
                            "date": "2014-01-01",
                            "value": 20000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 10379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 30493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 10785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 33901904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 11576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 14413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 15177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 16622100
                          },
                          {
                            "date": "2014-01-10",
                            "value": 17381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 18802310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 15531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 15748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 18706437
                          },
                          {
                            "date": "2014-01-15",
                            "value": 19752685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 21016418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 25622924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 25337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 22258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 23829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 24245689
                          },
                          {
                            "date": "2014-01-22",
                            "value": 26429711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 26259017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 25396183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 23107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 28659852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 25270783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 26270783
                          },
                          {
                            "date": "2014-01-29",
                            "value": 27270783
                          },
                          {
                            "date": "2014-01-30",
                            "value": 28270783
                          },
                          {
                            "date": "2014-01-31",
                            "value": 29270783
                          },
                          {
                            "date": "2014-02-01",
                            "value": 30270783
                          },
                          {
                            "date": "2014-02-02",
                            "value": 31270783
                          },
                          {
                            "date": "2014-02-03",
                            "value": 32270783
                          },
                          {
                            "date": "2014-02-04",
                            "value": 33270783
                          },
                          {
                            "date": "2014-02-05",
                            "value": 28270783
                          },
                          {
                            "date": "2014-02-06",
                            "value": 27270783
                          },
                          {
                            "date": "2014-02-07",
                            "value": 35270783
                          },
                          {
                            "date": "2014-02-08",
                            "value": 34270783
                          },
                          {
                            "date": "2014-02-09",
                            "value": 28270783
                          },
                          {
                            "date": "2014-02-10",
                            "value": 35270783
                          },
                          {
                            "date": "2014-02-11",
                            "value": 36270783
                          },
                          {
                            "date": "2014-02-12",
                            "value": 34127078
                          },
                          {
                            "date": "2014-02-13",
                            "value": 33124078
                          },
                          {
                            "date": "2014-02-14",
                            "value": 36227078
                          },
                          {
                            "date": "2014-02-15",
                            "value": 37827078
                          },
                          {
                            "date": "2014-02-16",
                            "value": 36427073
                          },
                          {
                            "date": "2014-02-17",
                            "value": 37570783
                          },
                          {
                            "date": "2014-02-18",
                            "value": 38627073
                          },
                          {
                            "date": "2014-02-19",
                            "value": 37727078
                          },
                          {
                            "date": "2014-02-20",
                            "value": 38827073
                          },
                          {
                            "date": "2014-02-21",
                            "value": 40927078
                          },
                          {
                            "date": "2014-02-22",
                            "value": 41027078
                          },
                          {
                            "date": "2014-02-23",
                            "value": 42127073
                          },
                          {
                            "date": "2014-02-24",
                            "value": 43220783
                          },
                          {
                            "date": "2014-02-25",
                            "value": 44327078
                          },
                          {
                            "date": "2014-02-26",
                            "value": 40427078
                          },
                          {
                            "date": "2014-02-27",
                            "value": 41027078
                          },
                          {
                            "date": "2014-02-28",
                            "value": 45627078
                          },
                          {
                            "date": "2014-03-01",
                            "value": 44727078
                          },
                          {
                            "date": "2014-03-02",
                            "value": 44227078
                          },
                          {
                            "date": "2014-03-03",
                            "value": 45227078
                          },
                          {
                            "date": "2014-03-04",
                            "value": 46027078
                          },
                          {
                            "date": "2014-03-05",
                            "value": 46927078
                          },
                          {
                            "date": "2014-03-06",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-07",
                            "value": 46227078
                          },
                          {
                            "date": "2014-03-08",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-09",
                            "value": 48027078
                          },
                          {
                            "date": "2014-03-10",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-11",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-12",
                            "value": 48017078
                          },
                          {
                            "date": "2014-03-13",
                            "value": 48077078
                          },
                          {
                            "date": "2014-03-14",
                            "value": 48087078
                          },
                          {
                            "date": "2014-03-15",
                            "value": 48017078
                          },
                          {
                            "date": "2014-03-16",
                            "value": 48047078
                          },
                          {
                            "date": "2014-03-17",
                            "value": 48067078
                          },
                          {
                            "date": "2014-03-18",
                            "value": 48077078
                          },
                          {
                            "date": "2014-03-19",
                            "value": 48027074
                          },
                          {
                            "date": "2014-03-20",
                            "value": 48927079
                          },
                          {
                            "date": "2014-03-21",
                            "value": 48727071
                          },
                          {
                            "date": "2014-03-22",
                            "value": 48127072
                          },
                          {
                            "date": "2014-03-23",
                            "value": 48527072
                          },
                          {
                            "date": "2014-03-24",
                            "value": 48627027
                          },
                          {
                            "date": "2014-03-25",
                            "value": 48027040
                          },
                          {
                            "date": "2014-03-26",
                            "value": 48027043
                          },
                          {
                            "date": "2014-03-27",
                            "value": 48057022
                          },
                          {
                            "date": "2014-03-28",
                            "value": 49057022
                          },
                          {
                            "date": "2014-03-29",
                            "value": 50057022
                          },
                          {
                            "date": "2014-03-30",
                            "value": 51057022
                          },
                          {
                            "date": "2014-03-31",
                            "value": 52057022
                          },
                          {
                            "date": "2014-04-01",
                            "value": 53057022
                          },
                          {
                            "date": "2014-04-02",
                            "value": 54057022
                          },
                          {
                            "date": "2014-04-03",
                            "value": 52057022
                          },
                          {
                            "date": "2014-04-04",
                            "value": 55057022
                          },
                          {
                            "date": "2014-04-05",
                            "value": 58270783
                          },
                          {
                            "date": "2014-04-06",
                            "value": 56270783
                          },
                          {
                            "date": "2014-04-07",
                            "value": 55270783
                          },
                          {
                            "date": "2014-04-08",
                            "value": 58270783
                          },
                          {
                            "date": "2014-04-09",
                            "value": 59270783
                          },
                          {
                            "date": "2014-04-10",
                            "value": 60270783
                          },
                          {
                            "date": "2014-04-11",
                            "value": 61270783
                          },
                          {
                            "date": "2014-04-12",
                            "value": 62270783
                          },
                          {
                            "date": "2014-04-13",
                            "value": 63270783
                          },
                          {
                            "date": "2014-04-14",
                            "value": 64270783
                          },
                          {
                            "date": "2014-04-15",
                            "value": 65270783
                          },
                          {
                            "date": "2014-04-16",
                            "value": 66270783
                          },
                          {
                            "date": "2014-04-17",
                            "value": 67270783
                          },
                          {
                            "date": "2014-04-18",
                            "value": 68270783
                          },
                          {
                            "date": "2014-04-19",
                            "value": 69270783
                          },
                          {
                            "date": "2014-04-20",
                            "value": 70270783
                          },
                          {
                            "date": "2014-04-21",
                            "value": 71270783
                          },
                          {
                            "date": "2014-04-22",
                            "value": 72270783
                          },
                          {
                            "date": "2014-04-23",
                            "value": 73270783
                          },
                          {
                            "date": "2014-04-24",
                            "value": 74270783
                          },
                          {
                            "date": "2014-04-25",
                            "value": 75270783
                          },
                          {
                            "date": "2014-04-26",
                            "value": 76660783
                          },
                          {
                            "date": "2014-04-27",
                            "value": 77270783
                          },
                          {
                            "date": "2014-04-28",
                            "value": 78370783
                          },
                          {
                            "date": "2014-04-29",
                            "value": 79470783
                          },
                          {
                            "date": "2014-04-30",
                            "value": 80170783
                          }
                        ],
                        [{
                            "date": "2014-01-01",
                            "value": 150000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 160379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 170493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 160785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 167391904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 161576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 161413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 152177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 143762210
                          },
                          {
                            "date": "2014-01-10",
                            "value": 144381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 154352310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 165531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 175748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 187064037
                          },
                          {
                            "date": "2014-01-15",
                            "value": 197520685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 210176418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 196122924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 207337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 200258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 186829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 192456897
                          },
                          {
                            "date": "2014-01-22",
                            "value": 204299711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 192759017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 203596183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 208107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 196359852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 192570783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 177967768
                          },
                          {
                            "date": "2014-01-29",
                            "value": 190632803
                          },
                          {
                            "date": "2014-01-30",
                            "value": 203725316
                          },
                          {
                            "date": "2014-01-31",
                            "value": 218226177
                          },
                          {
                            "date": "2014-02-01",
                            "value": 210698669
                          },
                          {
                            "date": "2014-02-02",
                            "value": 217640656
                          },
                          {
                            "date": "2014-02-03",
                            "value": 216142362
                          },
                          {
                            "date": "2014-02-04",
                            "value": 201410971
                          },
                          {
                            "date": "2014-02-05",
                            "value": 196704289
                          },
                          {
                            "date": "2014-02-06",
                            "value": 190436945
                          },
                          {
                            "date": "2014-02-07",
                            "value": 178891686
                          },
                          {
                            "date": "2014-02-08",
                            "value": 171613962
                          },
                          {
                            "date": "2014-02-09",
                            "value": 157579773
                          },
                          {
                            "date": "2014-02-10",
                            "value": 158677098
                          },
                          {
                            "date": "2014-02-11",
                            "value": 147129977
                          },
                          {
                            "date": "2014-02-12",
                            "value": 151561876
                          },
                          {
                            "date": "2014-02-13",
                            "value": 151627421
                          },
                          {
                            "date": "2014-02-14",
                            "value": 143543872
                          },
                          {
                            "date": "2014-02-15",
                            "value": 136581057
                          },
                          {
                            "date": "2014-02-16",
                            "value": 135560715
                          },
                          {
                            "date": "2014-02-17",
                            "value": 122625263
                          },
                          {
                            "date": "2014-02-18",
                            "value": 112091484
                          },
                          {
                            "date": "2014-02-19",
                            "value": 98810329
                          },
                          {
                            "date": "2014-02-20",
                            "value": 99882912
                          },
                          {
                            "date": "2014-02-21",
                            "value": 94943095
                          },
                          {
                            "date": "2014-02-22",
                            "value": 104875743
                          },
                          {
                            "date": "2014-02-23",
                            "value": 116383678
                          },
                          {
                            "date": "2014-02-24",
                            "value": 125028841
                          },
                          {
                            "date": "2014-02-25",
                            "value": 123967310
                          },
                          {
                            "date": "2014-02-26",
                            "value": 133167029
                          },
                          {
                            "date": "2014-02-27",
                            "value": 128577263
                          },
                          {
                            "date": "2014-02-28",
                            "value": 115836969
                          },
                          {
                            "date": "2014-03-01",
                            "value": 119264529
                          },
                          {
                            "date": "2014-03-02",
                            "value": 109363374
                          },
                          {
                            "date": "2014-03-03",
                            "value": 113985628
                          },
                          {
                            "date": "2014-03-04",
                            "value": 114650999
                          },
                          {
                            "date": "2014-03-05",
                            "value": 110866108
                          },
                          {
                            "date": "2014-03-06",
                            "value": 96473454
                          },
                          {
                            "date": "2014-03-07",
                            "value": 104075886
                          },
                          {
                            "date": "2014-03-08",
                            "value": 103568384
                          },
                          {
                            "date": "2014-03-09",
                            "value": 101534883
                          },
                          {
                            "date": "2014-03-10",
                            "value": 115825447
                          },
                          {
                            "date": "2014-03-11",
                            "value": 126133916
                          },
                          {
                            "date": "2014-03-12",
                            "value": 116502109
                          },
                          {
                            "date": "2014-03-13",
                            "value": 130169411
                          },
                          {
                            "date": "2014-03-14",
                            "value": 124296886
                          },
                          {
                            "date": "2014-03-15",
                            "value": 126347399
                          },
                          {
                            "date": "2014-03-16",
                            "value": 131483669
                          },
                          {
                            "date": "2014-03-17",
                            "value": 142811333
                          },
                          {
                            "date": "2014-03-18",
                            "value": 129675396
                          },
                          {
                            "date": "2014-03-19",
                            "value": 115514483
                          },
                          {
                            "date": "2014-03-20",
                            "value": 117630630
                          },
                          {
                            "date": "2014-03-21",
                            "value": 122340239
                          },
                          {
                            "date": "2014-03-22",
                            "value": 132349091
                          },
                          {
                            "date": "2014-03-23",
                            "value": 125613305
                          },
                          {
                            "date": "2014-03-24",
                            "value": 135592466
                          },
                          {
                            "date": "2014-03-25",
                            "value": 123408762
                          },
                          {
                            "date": "2014-03-26",
                            "value": 111991454
                          },
                          {
                            "date": "2014-03-27",
                            "value": 116123955
                          },
                          {
                            "date": "2014-03-28",
                            "value": 112817214
                          },
                          {
                            "date": "2014-03-29",
                            "value": 113029590
                          },
                          {
                            "date": "2014-03-30",
                            "value": 108753398
                          },
                          {
                            "date": "2014-03-31",
                            "value": 99383763
                          },
                          {
                            "date": "2014-04-01",
                            "value": 100151737
                          },
                          {
                            "date": "2014-04-02",
                            "value": 94985209
                          },
                          {
                            "date": "2014-04-03",
                            "value": 82913669
                          },
                          {
                            "date": "2014-04-04",
                            "value": 78748268
                          },
                          {
                            "date": "2014-04-05",
                            "value": 63829135
                          },
                          {
                            "date": "2014-04-06",
                            "value": 78694727
                          },
                          {
                            "date": "2014-04-07",
                            "value": 80868994
                          },
                          {
                            "date": "2014-04-08",
                            "value": 93799013
                          },
                          {
                            "date": "2014-04-09",
                            "value": 99042416
                          },
                          {
                            "date": "2014-04-10",
                            "value": 97298692
                          },
                          {
                            "date": "2014-04-11",
                            "value": 83353499
                          },
                          {
                            "date": "2014-04-12",
                            "value": 71248129
                          },
                          {
                            "date": "2014-04-13",
                            "value": 75253744
                          },
                          {
                            "date": "2014-04-14",
                            "value": 68976648
                          },
                          {
                            "date": "2014-04-15",
                            "value": 71002284
                          },
                          {
                            "date": "2014-04-16",
                            "value": 75052401
                          },
                          {
                            "date": "2014-04-17",
                            "value": 83894030
                          },
                          {
                            "date": "2014-04-18",
                            "value": 90236528
                          },
                          {
                            "date": "2014-04-19",
                            "value": 99739114
                          },
                          {
                            "date": "2014-04-20",
                            "value": 96407136
                          },
                          {
                            "date": "2014-04-21",
                            "value": 108323177
                          },
                          {
                            "date": "2014-04-22",
                            "value": 101578914
                          },
                          {
                            "date": "2014-04-23",
                            "value": 115877608
                          },
                          {
                            "date": "2014-04-24",
                            "value": 112088857
                          },
                          {
                            "date": "2014-04-25",
                            "value": 112071353
                          },
                          {
                            "date": "2014-04-26",
                            "value": 101790062
                          },
                          {
                            "date": "2014-04-27",
                            "value": 115003761
                          },
                          {
                            "date": "2014-04-28",
                            "value": 120457727
                          },
                          {
                            "date": "2014-04-29",
                            "value": 118253926
                          },
                          {
                            "date": "2014-04-30",
                            "value": 117956992
                          }
                        ],
                        [{
                            "date": "2014-01-01",
                            "value": 50000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 60379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 40493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 60785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 67391904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 61576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 61413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 82177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 103762210
                          },
                          {
                            "date": "2014-01-10",
                            "value": 84381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 54352310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 65531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 75748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 47064037
                          },
                          {
                            "date": "2014-01-15",
                            "value": 67520685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 60176418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 66122924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 57337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 100258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 46829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 92456897
                          },
                          {
                            "date": "2014-01-22",
                            "value": 94299711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 62759017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 103596183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 108107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 66359852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 62570783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 77967768
                          },
                          {
                            "date": "2014-01-29",
                            "value": 60632803
                          },
                          {
                            "date": "2014-01-30",
                            "value": 103725316
                          },
                          {
                            "date": "2014-01-31",
                            "value": 98226177
                          },
                          {
                            "date": "2014-02-01",
                            "value": 60698669
                          },
                          {
                            "date": "2014-02-02",
                            "value": 67640656
                          },
                          {
                            "date": "2014-02-03",
                            "value": 66142362
                          },
                          {
                            "date": "2014-02-04",
                            "value": 101410971
                          },
                          {
                            "date": "2014-02-05",
                            "value": 66704289
                          },
                          {
                            "date": "2014-02-06",
                            "value": 60436945
                          },
                          {
                            "date": "2014-02-07",
                            "value": 78891686
                          },
                          {
                            "date": "2014-02-08",
                            "value": 71613962
                          },
                          {
                            "date": "2014-02-09",
                            "value": 107579773
                          },
                          {
                            "date": "2014-02-10",
                            "value": 58677098
                          },
                          {
                            "date": "2014-02-11",
                            "value": 87129977
                          },
                          {
                            "date": "2014-02-12",
                            "value": 51561876
                          },
                          {
                            "date": "2014-02-13",
                            "value": 51627421
                          },
                          {
                            "date": "2014-02-14",
                            "value": 83543872
                          },
                          {
                            "date": "2014-02-15",
                            "value": 66581057
                          },
                          {
                            "date": "2014-02-16",
                            "value": 65560715
                          },
                          {
                            "date": "2014-02-17",
                            "value": 62625263
                          },
                          {
                            "date": "2014-02-18",
                            "value": 92091484
                          },
                          {
                            "date": "2014-02-19",
                            "value": 48810329
                          },
                          {
                            "date": "2014-02-20",
                            "value": 49882912
                          },
                          {
                            "date": "2014-02-21",
                            "value": 44943095
                          },
                          {
                            "date": "2014-02-22",
                            "value": 104875743
                          },
                          {
                            "date": "2014-02-23",
                            "value": 96383678
                          },
                          {
                            "date": "2014-02-24",
                            "value": 105028841
                          },
                          {
                            "date": "2014-02-25",
                            "value": 63967310
                          },
                          {
                            "date": "2014-02-26",
                            "value": 63167029
                          },
                          {
                            "date": "2014-02-27",
                            "value": 68577263
                          },
                          {
                            "date": "2014-02-28",
                            "value": 95836969
                          },
                          {
                            "date": "2014-03-01",
                            "value": 99264529
                          },
                          {
                            "date": "2014-03-02",
                            "value": 109363374
                          },
                          {
                            "date": "2014-03-03",
                            "value": 93985628
                          },
                          {
                            "date": "2014-03-04",
                            "value": 94650999
                          },
                          {
                            "date": "2014-03-05",
                            "value": 90866108
                          },
                          {
                            "date": "2014-03-06",
                            "value": 46473454
                          },
                          {
                            "date": "2014-03-07",
                            "value": 84075886
                          },
                          {
                            "date": "2014-03-08",
                            "value": 103568384
                          },
                          {
                            "date": "2014-03-09",
                            "value": 101534883
                          },
                          {
                            "date": "2014-03-10",
                            "value": 95825447
                          },
                          {
                            "date": "2014-03-11",
                            "value": 66133916
                          },
                          {
                            "date": "2014-03-12",
                            "value": 96502109
                          },
                          {
                            "date": "2014-03-13",
                            "value": 80169411
                          },
                          {
                            "date": "2014-03-14",
                            "value": 84296886
                          },
                          {
                            "date": "2014-03-15",
                            "value": 86347399
                          },
                          {
                            "date": "2014-03-16",
                            "value": 31483669
                          },
                          {
                            "date": "2014-03-17",
                            "value": 82811333
                          },
                          {
                            "date": "2014-03-18",
                            "value": 89675396
                          },
                          {
                            "date": "2014-03-19",
                            "value": 95514483
                          },
                          {
                            "date": "2014-03-20",
                            "value": 97630630
                          },
                          {
                            "date": "2014-03-21",
                            "value": 62340239
                          },
                          {
                            "date": "2014-03-22",
                            "value": 62349091
                          },
                          {
                            "date": "2014-03-23",
                            "value": 65613305
                          },
                          {
                            "date": "2014-03-24",
                            "value": 65592466
                          },
                          {
                            "date": "2014-03-25",
                            "value": 63408762
                          },
                          {
                            "date": "2014-03-26",
                            "value": 91991454
                          },
                          {
                            "date": "2014-03-27",
                            "value": 96123955
                          },
                          {
                            "date": "2014-03-28",
                            "value": 92817214
                          },
                          {
                            "date": "2014-03-29",
                            "value": 93029590
                          },
                          {
                            "date": "2014-03-30",
                            "value": 108753398
                          },
                          {
                            "date": "2014-03-31",
                            "value": 49383763
                          },
                          {
                            "date": "2014-04-01",
                            "value": 100151737
                          },
                          {
                            "date": "2014-04-02",
                            "value": 44985209
                          },
                          {
                            "date": "2014-04-03",
                            "value": 52913669
                          },
                          {
                            "date": "2014-04-04",
                            "value": 48748268
                          },
                          {
                            "date": "2014-04-05",
                            "value": 23829135
                          },
                          {
                            "date": "2014-04-06",
                            "value": 58694727
                          },
                          {
                            "date": "2014-04-07",
                            "value": 50868994
                          },
                          {
                            "date": "2014-04-08",
                            "value": 43799013
                          },
                          {
                            "date": "2014-04-09",
                            "value": 4042416
                          },
                          {
                            "date": "2014-04-10",
                            "value": 47298692
                          },
                          {
                            "date": "2014-04-11",
                            "value": 53353499
                          },
                          {
                            "date": "2014-04-12",
                            "value": 71248129
                          },
                          {
                            "date": "2014-04-13",
                            "value": 75253744
                          },
                          {
                            "date": "2014-04-14",
                            "value": 68976648
                          },
                          {
                            "date": "2014-04-15",
                            "value": 71002284
                          },
                          {
                            "date": "2014-04-16",
                            "value": 75052401
                          },
                          {
                            "date": "2014-04-17",
                            "value": 83894030
                          },
                          {
                            "date": "2014-04-18",
                            "value": 50236528
                          },
                          {
                            "date": "2014-04-19",
                            "value": 59739114
                          },
                          {
                            "date": "2014-04-20",
                            "value": 56407136
                          },
                          {
                            "date": "2014-04-21",
                            "value": 108323177
                          },
                          {
                            "date": "2014-04-22",
                            "value": 101578914
                          },
                          {
                            "date": "2014-04-23",
                            "value": 95877608
                          },
                          {
                            "date": "2014-04-24",
                            "value": 62088857
                          },
                          {
                            "date": "2014-04-25",
                            "value": 92071353
                          },
                          {
                            "date": "2014-04-26",
                            "value": 81790062
                          },
                          {
                            "date": "2014-04-27",
                            "value": 105003761
                          },
                          {
                            "date": "2014-04-28",
                            "value": 100457727
                          },
                          {
                            "date": "2014-04-29",
                            "value": 98253926
                          },
                          {
                            "date": "2014-04-30",
                            "value": 67956992
                          }
                        ]
                      ]
                    var ts1 = 1388534400000;
                var ts2 = 1388620800000;
                var ts3 = 1389052800000;

                var dataSet = [[],[],[]];

                for(var i=0; i<12; i++) {
                    ts1 = ts1 + 86400000;
                    var innerArr = [ts1, dataSeries[2][i].value];
                    dataSet[0].push(innerArr)
                }
                for(var i=0; i<18; i++) {
                    ts2 = ts2 + 86400000;
                    var innerArr = [ts2, dataSeries[1][i].value];
                    dataSet[1].push(innerArr)
                }
                for(var i=0; i<12; i++) {
                    ts3 = ts3 + 86400000;
                    var innerArr = [ts3, dataSeries[0][i].value];
                    dataSet[2].push(innerArr)
                }

                var options = {
                    chart: {
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        enabled: false
                    },
                    },
                    plotOptions: {
                    line: {
                        curve: 'smooth',
                    }
                    },
                    dataLabels: {
                    enabled: false
                    },
                    series: [{
                    name: 'PRODUCT A',
                    data: dataSet[0]
                    }, {
                    name: 'PRODUCT B',
                    data: dataSet[1]
                    }, {
                    name: 'PRODUCT C',
                    data: dataSet[2]
                    }],
                    markers: {
                    size: 0,
                    style: 'full',
                    },
                    fill: {
                    gradient: {
                        enabled: true,
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100]
                        },
                },
                    yaxis: {
                    labels: {
                        style: {
                            color: '#8e8da4',
                        },
                        offsetX: 0,
                        formatter: function(val) {
                            return (val / 1000000).toFixed(2);
                        },
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    }
                    },
                    xaxis: {
                    type: 'datetime',
                    tickAmount: 8,
                    min: new Date("01/01/2014").getTime(),
                    max: new Date("01/20/2014").getTime(),
                    labels: {
                        rotate: -15,
                        rotateAlways: true,
                        formatter: function(val, timestamp) {
                            return moment(new Date(timestamp)).format("DD MMM YYYY")
                        }
                    }
                    },
                    title: {
                    text: 'Irregular Data in Time Series',
                    align: 'left',
                    offsetX: 14
                    },
                    tooltip: {
                    shared: true
                    },
                    legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetX: -10
                    }
                }

                var chart = new ApexCharts(
                        document.querySelector("#irregular"),
                        options
                    );

                    chart.render();

                            }
                  
                    
        
    }
    });

})(window, document, window.jQuery);