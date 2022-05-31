(function(window, document, $, undefined){

    $(function(){
        var rangeslider = jQuery(".rangeslider-wrapper");
        if (rangeslider.length > 0) {
                //slider-1
                $("#slider-1").ionRangeSlider();
                //slider-2
                $("#slider-2").ionRangeSlider({
                    min: 100,
                    max: 1000,
                    from: 550
                });
                //slider-3
                $("#slider-3").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: 0,
                    max: 1000,
                    from: 200,
                    to: 800,
                    prefix: "$"
                });
                //slider-4
                $("#slider-4").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -1000,
                    max: 1000,
                    from: -500,
                    to: 500
                });
                //slider-5
                $("#slider-5").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -1000,
                    max: 1000,
                    from: -500,
                    to: 500,
                    step: 250
                });
                //slider-6
                $("#slider-6").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -12.8,
                    max: 12.8,
                    from: -3.2,
                    to: 3.2,
                    step: 0.1
                });
                //slider-7
                $("#slider-7").ionRangeSlider({
                    type: "double",
                    grid: true,
                    from: 1,
                    to: 5,
                    values: [0, 10, 100, 1000, 10000, 100000, 1000000]
                });
                //slider-8
                $("#slider-8").ionRangeSlider({
                    grid: true,
                    from: 5,
                    values: [
                        "zero", "one",
                        "two", "three",
                        "four", "five",
                        "six", "seven",
                        "eight", "nine",
                        "ten"
                    ]
                });
                //slider-9
                $("#slider-9").ionRangeSlider({
                    grid: true,
                    from: 3,
                    values: [
                        "January", "February", "March",
                        "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"
                    ]
                });
                //slider-10
                $("#slider-10").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 100000,
                    step: 1000,
                    prettify_enabled: false
                });
                //slider-11
                $("#slider-11").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 200000,
                    step: 1000,
                    prettify_enabled: true
                });
                //slider-12
                $("#slider-12").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 300000,
                    step: 1000,
                    prettify_enabled: true,
                    prettify_separator: "."
                });
                //slider-13
                $("#slider-13").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 400000,
                    step: 1000,
                    prettify_enabled: true,
                    prettify: function(num) {
                        return (Math.random() * num).toFixed(0);
                    }
                });
                //slider-14
                $("#slider-14").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: 0,
                    max: 10000,
                    from: 1000,
                    step: 9000,
                    prefix: "$"
                });
                //slider-15
                $("#slider-15").ionRangeSlider({
                    type: "single",
                    grid: true,
                    min: -90,
                    max: 90,
                    from: 0,
                    postfix: "°"
                });
                //slider-16
                $("#slider-16").ionRangeSlider({
                    grid: true,
                    min: 18,
                    max: 70,
                    from: 30,
                    prefix: "Age ",
                    max_postfix: "+"
                });
                //slider-17
                $("#slider-17").ionRangeSlider({
                    type: "double",
                    min: 100,
                    max: 200,
                    from: 145,
                    to: 155,
                    prefix: "Weight: ",
                    postfix: " million pounds",
                    decorate_both: true
                });
                //Slider-inter-1
                var $update = $(".js-update-43");
                $("#slider-inter_1").ionRangeSlider({
                    type: "single",
                    min: 0,
                    max: 100,
                    from: 50,
                    keyboard: true,
                    onStart: function(data) {
                        console.log("onStart");
                    },
                    onChange: function(data) {
                        console.log("onChange");
                    },
                    onFinish: function(data) {
                        console.log("onFinish");
                    },
                    onUpdate: function(data) {
                        console.log("onUpdate");
                    }
                });
                var slider = $("#slider-inter_1").data("ionRangeSlider");
                $update.on("click", function() {
                    slider.update({
                        from: 10
                    });
                });
        }
    });

})(window, document, window.jQuery);