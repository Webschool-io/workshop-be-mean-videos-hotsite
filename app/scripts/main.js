/* jshint devel:true */
(function (window, document) {
  var form = $('.form-news'),
      nav = $('.navigation');

  nav.on('click', 'a', function(e){
    e.preventDefault();
  });
  // track event on subscription submit
  form.on('submit', function(event) {
    var input = event.target.querySelector('.email'),
        inputValue = input.value;

    ga('send', 'event', 'Form Submit', 'Waiting List', input.value);
  });

  // paralax on header
  $('.header').stellar();

  // navigation scroll effect
  $(window).scroll(function (event) {
    var y = $(this).scrollTop(),
        top = nav.height();

    if (y >= top + 20) {
      nav.addClass('fixed');
    }
    else if (y <= 1 && nav.hasClass('fixed')) {
      nav.removeClass('fixed');
      nav.addClass('show');
    }
  });

  // scroll to
  var menu = $('.menu-item'),
      menuLink = menu.find('a');

  menuLink.on('click', function (event) {
    var menuAnchor = event.target.getAttribute('href'),
        parent = event.target.parentNode;

    $('html, body').animate({
      scrollTop: $(menuAnchor)[0].offsetTop - 60
    }, 1500);

    window.addEventListener('hashchange', function (event) {
      var hash = event.newURL.match(/\#.*/g).toString();

      if (menuAnchor === hash) {
        parent.classList.add('active');
      }
      else {
        parent.classList.remove('active');
      }
    });
  });


})(window, document);
