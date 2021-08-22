!(function ($) {
  'use strict'

  var App = function () {}

  //PreLoader
  ;(App.prototype.initPreLoader = function () {
    $('#status').fadeOut()
    $('#preloader').delay(350).fadeOut('slow')
    $('body').delay(350).css({
      overflow: 'visible',
    })
  }),
    //scroll
    (App.prototype.initStickyMenu = function () {
      var navbar = document.querySelector('nav')
      window.onscroll = function () {
        // pageYOffset or scrollY
        if (window.pageYOffset > 200) {
          navbar.classList.add('stickyadd')
        } else {
          navbar.classList.remove('stickyadd')
        }
      }
    }),
    // scrollspy
    (App.prototype.initScrollspy = function () {
      var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#main_nav',
        offset: 70,
      })
    }),
    //Work
    (App.prototype.initWork = function () {
      $(window).on('load', function () {
        var $container = $('.work-filter')
        var $filter = $('#menu-filter')
        $container.isotope({
          filter: '*',
          layoutMode: 'fitRows',
          animationOptions: {
            duration: 750,
            easing: 'linear',
          },
        })

        $filter.find('a').on('click', function () {
          var selector = $(this).attr('data-filter')
          $filter.find('a').removeClass('active')
          $(this).addClass('active')
          $container.isotope({
            filter: selector,
            animationOptions: {
              animationDuration: 750,
              easing: 'linear',
              queue: false,
            },
          })
          return false
        })
      })
    }),
    //Magnificpop
    (App.prototype.initMagnificPopup = function () {
      $('.img-zoom').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1],
        },
      })
    }),
    // BACK TO TOP
    (App.prototype.initBackToTop = function () {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
          $('.back_top').fadeIn()
        } else {
          $('.back_top').fadeOut()
        }
      })
      $('.back_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
        return false
      })
    }),
    (App.prototype.init = function () {
      this.initPreLoader()
      this.initStickyMenu()
      this.initScrollspy()
      this.initWork()
      this.initMagnificPopup()
      this.initBackToTop()
    }),
    //init
    ($.App = new App()),
    ($.App.Constructor = App)
})(window.jQuery),
  //initializing
  (function ($) {
    'use strict'
    $.App.init()
  })(window.jQuery)

// Randomize Background
// const home = document.querySelector('#home')
// const flipCoin = Math.floor(Math.random() * 2)
// console.log(flipCoin)
// home.style.backgroundImage = flipCoin
//   ? "url('images/header-bg.jpg')"
//   : "url('images/header-bg2.jpg')"
