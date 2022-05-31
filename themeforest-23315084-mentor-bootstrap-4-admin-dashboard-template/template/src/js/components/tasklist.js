(function(window, document, $, undefined){

    $(function(){
        $("#checkAll").click(function () {
            $('input:checkbox').not(this).prop('checked', this.checked);
        });
});

})(window, document, window.jQuery);