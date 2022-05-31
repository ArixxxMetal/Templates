(function(window, document, $, undefined){

$(function(){
    var comingsoon = $('.comingsoon')
    if (comingsoon.length > 0) {
        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        let countDown = new Date('dec 30, 2019 00:00:00').getTime(),
        x = setInterval(function() {
        let now = new Date().getTime(),
        distance = countDown - now;
        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second)
}
});

})(window, document, window.jQuery);
