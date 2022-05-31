(function(window, document, $, undefined){

    $(function(){
        var dataTable = jQuery(".datatable-wrapper");
        if (dataTable.length > 0) {
            $('#datatable').DataTable({
                "bLengthChange": false,
                "searching": false,
                "bPaginate":true,
                "bSortable": true
                });
        }
    });

})(window, document, window.jQuery);