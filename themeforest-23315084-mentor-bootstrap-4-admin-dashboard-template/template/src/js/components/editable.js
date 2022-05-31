(function(window, document, $, undefined){

    $(function(){
        var dualListBox = jQuery("#tableedit");
        if (dualListBox.length > 0) {
        $('#tableedit').Tabledit({
            deleteButton: false,
            saveButton: false,
            autoFocus: false,
            buttons: {
                edit: {
                    class: 'btn btn-sm btn-primary',
                    html: '<span class="fa fa-pencil"></span> &nbsp EDIT',
                    action: 'edit'
                }
            },
            columns: {
                identifier: [0, 'id'],
                editable: [[1, 'car'], [2, 'color']]
            }
        });
    }
});

})(window, document, window.jQuery);