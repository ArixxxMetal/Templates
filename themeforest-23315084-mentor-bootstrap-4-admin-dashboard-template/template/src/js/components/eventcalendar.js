(function(window, document, $, undefined){

    $(function(){
        var eventCalendar = jQuery(".event-calendar");
        if (eventCalendar.length > 0) {
            $('#external-events .fc-event').each(function() {

                // store data so the calendar knows to render an event upon drop
                $(this).data('event', {
                    title: $.trim($(this).text()), // use the element's text as the event title
                    stick: true, // maintain when user navigates (see docs on the renderEvent method)
                    className: $(this).data('color')
                });

                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 999,
                    revert: true,      // will cause the event to go back to its
                    revertDuration: 0  //  original position after the drag
                });

            });

            $('#event-calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true,
                droppable: true,
                drop: function() {
                    // is the "remove after drop" checkbox checked?
                    if ($('#drop-remove').is(':checked')) {
                      // if so, remove the element from the "Draggable Events" list
                      $(this).remove();
                    }
                  },
                events: [{
                        title: 'Simple Event',
                        start: '2019-02-22',
                        end: '2019-02-25',
                        className: 'fc-event-danger'
                    },
                    {
                        title: 'Google',
                        url: 'https://www.google.com/',
                        start: '2019-02-18',
                        className: 'fc-event-success'
                    },
                    {
                        title: 'Family Vacation',
                        start: '2019-02-14',
                        end: '2019-02-18',
                        className: 'fc-event-primary'
                    }
                ]
            });
        }
    });

})(window, document, window.jQuery);