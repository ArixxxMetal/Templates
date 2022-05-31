(function(window, document, $, undefined){

    $(function(){
        var eventListCalendar = jQuery(".event-list-calendar");
        if (eventListCalendar.length > 0) {
            $('#event-list-calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'listDay,listWeek,month'
                },
                views: {
                    listDay: { buttonText: 'list day' },
                    listWeek: { buttonText: 'list week' }
                },
                height: 650,
                defaultView: 'listWeek',
                defaultDate: '2018-09-12',
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events: [{
                        title: 'All Day Event',
                        start: '2018-09-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2018-09-07',
                        end: '2018-09-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2018-09-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2018-09-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: '2018-09-11',
                        end: '2018-09-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2018-09-12T10:30:00',
                        end: '2018-09-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2018-09-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2018-09-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2018-09-12T17:30:00'
                    },
                    {
                        title: 'Dinner',
                        start: '2018-09-12T20:00:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2018-09-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2018-09-28'
                    }
                ]
            });
        }
    });

})(window, document, window.jQuery);