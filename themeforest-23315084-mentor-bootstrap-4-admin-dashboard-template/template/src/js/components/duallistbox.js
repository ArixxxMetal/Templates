(function(window, document, $, undefined){

    $(function(){
        var dualListBox = jQuery(".duallistbox");
        if (dualListBox.length > 0) {
            $('#duallistbox').bootstrapDualListbox({
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false
            });
        }
    });

})(window, document, window.jQuery);