(function(window, document, $, undefined){

    $(function(){
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);

          getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute('data-target');
        
            if (!selector || selector === '#') {
              selector = element.getAttribute('href') || '';
            }
        
            try {
              return document.querySelector(selector) ? selector : null;
            } catch (err) {
              return null;
            }
        }
   
    $('.mobile-toggle').on('click', function() {
        $('body').toggleClass('sidebar-toggled');
      });

      $(document).on('click', '.mega-menu.dropdown-menu', function (e) {
        e.stopPropagation();
      });

      $('.sidebar-toggle').on('click', function() {
        $('body').toggleClass('sidebar-mini');
        $('.app-navbar').toggleClass('expand');
      });

      $('.app-navbar').hover(function() {
        if($('body').hasClass('sidebar-mini')) {
          $('.navbar-header').toggleClass('expand');
        }
      });

      $('.search').on('click', function() {
        $('.search-wrapper').fadeIn(200);
      });

       //Search Box Close 
       $('.close-btn').on('click', function() {
        $('.search-wrapper').fadeOut(200);
      });
    });
})(window, document, window.jQuery);