(function(window, document, $, undefined){

    $(function(){
        var exportTable = jQuery(".export-table-wrapper");
        if (exportTable.length > 0) {
            $("#export-table").tableExport({
                headers: true,
                footers: true,
                formats: ["xlsx", "csv", "txt"],
                bootstrap: true,
                exportButtons: true,
                position: "top"                
            });
        }
    });

})(window, document, window.jQuery);