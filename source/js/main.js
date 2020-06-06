// import {log} from './logger';
// import {init as initHeader} from './components/header';
import {init as initEvents} from './components/events';
// import SmoothScroll from 'smooth-scroll';
// import './components/events/events-controller';

// import initPlugins from './all-plugins';
import 'jquery';
// import 'bootstrap';
import ScrollReveal from 'scrollreveal'
// import 'fancybox';
// import 'bxslider';


$(document).ready(function() {
  // Mobile menu trigger script
  const $menuTrigger = $(".menu-trigger");

  $menuTrigger.click(function() {
      $(this).toggleClass('active');
      $(".mobile-menu").toggleClass('visible');
  });

  $('.mobile-menu .nav-link').click(function () {
    $(".mobile-menu").removeClass('visible');
    $menuTrigger.removeClass('active');
  });

  // Smoothscroll script
  $('.nav-link').click(function() {
      var dis = $(this),
          disTarget = dis.children('a').data('target'),
          ScrollTo = $(disTarget).offset().top;
      dis.siblings('.nav-link').removeClass('active');
      dis.addClass('active');
      $(this).toggleClass('active');
      $('html,body').animate({ scrollTop: ScrollTo });
  });
  // contact form script
  $('.form-wrap input').blur(function() {
      tmpval = $(this).val();
      if (tmpval == '') {
          $(this).addClass('empty');
          $(this).removeClass('not-empty');
      } else {
          $(this).addClass('not-empty');
          $(this).removeClass('empty');
      }
  });
  // testimonial slider
  // $('.testimonial-slider').bxSlider({
  //     auto: true,
  //     mode: 'fade',
  //     infiniteLoop: true,
  //     controls: false
  // });
  // Changing the defaults
  window.sr = ScrollReveal();
  // Customizing a reveal set
  sr.reveal('.each-service', { origin: 'bottom', distance: '100px', duration: 1000, delay: 0, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
  // sript for fixed header on scroll
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
          $("#Header").addClass("header-fixed");
      } else {
          $("#Header").removeClass("header-fixed");
      }
  });
});


// const initSmoothScrollLinks = () => {
//   var scroll = new SmoothScroll('a[href*="#"]', {
//     ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
//     header: '.aa-header', // Selector for fixed headers (must be a valid CSS selector)
//     topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
//     speed: 500, // Integer. How fast to complete the scroll in milliseconds
//     clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
//     easing: 'easeInOutCubic', // Easing pattern to use
//     customEasing: function (time) {
//       return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
//     },
//     updateURL: true, // Update the URL on scroll
//     popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
//     emitEvents: true // Emit custom events
//   });
// }

// initHeader();
// initSmoothScrollLinks();
// initSmoothScrollLinks();
// initEvents();

const nanogalletyConf = {
  // GALLERY AND THUMBNAIL LAYOUT
  itemsBaseURL: '/static/',
  // items: [
  //   { src: 'berlin1.jpg', srct: 'berlin1_t.jpg', title: 'Berlin 1' },
  //   { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
  //   { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' }
  // ],
  galleryMosaic : [
    { w: 2, h: 2, c: 1, r: 1 },
    { w: 1, h: 1, c: 3, r: 1 },
    { w: 1, h: 1, c: 3, r: 2 },
    { w: 1, h: 1, c: 4, r: 1 },
    { w: 1, h: 1, c: 4, r: 2 },
    // { w: 2, h: 2, c: 5, r: 2 },
    // { w: 1, h: 1, c: 4, r: 3 },
    // { w: 2, h: 1, c: 2, r: 3 },
    // { w: 1, h: 2, c: 1, r: 3 },
    // { w: 1, h: 1, c: 2, r: 4 },
    // { w: 2, h: 1, c: 3, r: 4 },
    // { w: 1, h: 1, c: 5, r: 4 },
    // { w: 1, h: 1, c: 6, r: 4 }
  ],
  galleryMosaicXS : [
    { w: 2, h: 2, c: 1, r: 1 },
    { w: 1, h: 2, c: 1, r: 3 },
    // { w: 2, h: 1, c: 2, r: 3 },
    // { w: 1, h: 1, c: 2, r: 4 },
    // { w: 1, h: 1, c: 3, r: 4 }
  ],
  galleryMosaicSM : [
    { w: 2, h: 2, c: 1, r: 1 },
    { w: 1, h: 1, c: 3, r: 1 },
    // { w: 1, h: 1, c: 3, r: 2 },
    // { w: 1, h: 2, c: 1, r: 3 },
    // { w: 2, h: 1, c: 2, r: 3 },
    // { w: 1, h: 1, c: 2, r: 4 },
    // { w: 1, h: 1, c: 3, r: 4 }
  ],
  galleryMaxRows: 1,
  galleryDisplayMode: 'rows',

  thumbnailHeight: '250', thumbnailWidth: '320',
  thumbnailAlignment: 'scaled',
  thumbnailGutterWidth: 10, thumbnailGutterHeight: 10,
  thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

  thumbnailToolbarImage: null,
  thumbnailToolbarAlbum: null,
  thumbnailLabel: { display: false },

  // DISPLAY ANIMATION
  galleryDisplayTransitionDuration: 0,
  thumbnailDisplayTransition: 'fadeIn',
  thumbnailDisplayTransitionDuration: 0,
  // thumbnailDisplayInterval: 10,

  // THUMBNAIL HOVER ANIMATION
  // thumbnailBuildInit2: 'image_scale_1.15',
  // thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
  touchAnimation: true,
  touchAutoOpenDelay: 500,

  // LIGHTBOX
  viewerToolbar: { display: false },
  viewerTools:    {
    topRight:  'fullscreenButton, closeButton'
  },

  // DEEP LINKING
  locationHash: true
}

const conf1 = Object.assign({}, {
  items: [
    { src: 'images/apartment1/1.jpg', srct: 'images/apartment1/t/1.jpg',},
    { src: 'images/apartment1/5.jpg', srct: 'images/apartment1/t/5.jpg',},
    { src: 'images/apartment1/2.jpg', srct: 'images/apartment1/t/2.jpg',},
    { src: 'images/apartment1/3.jpg', srct: 'images/apartment1/t/3.jpg',},
    { src: 'images/apartment1/4.jpg', srct: 'images/apartment1/t/4.jpg',},
    { src: 'images/apartment1/6.jpg', srct: 'images/apartment1/t/6.jpg',},
    { src: 'images/apartment1/7.jpg', srct: 'images/apartment1/t/7.jpg',},
  ],
}, nanogalletyConf);

const conf2 = Object.assign({}, {
  items: [
    { src: 'images/apartment2/1.jpg', srct: 'images/apartment2/1.jpg', },
    { src: 'images/apartment2/2.jpg', srct: 'images/apartment2/2.jpg', },
    { src: 'images/apartment2/3.jpg', srct: 'images/apartment2/3.jpg', },
    { src: 'images/apartment2/4.jpg', srct: 'images/apartment2/4.jpg', },
    { src: 'images/apartment2/5.jpg', srct: 'images/apartment2/5.jpg', },
  ]
}, nanogalletyConf);

const confHero = Object.assign({}, nanogalletyConf, {
  items: [
    { src: 'images/hero/mosaico1.jpg', srct: 'images/hero/t/mosaico1.jpg', },
    { src: 'images/hero/mosaico2.jpg', srct: 'images/hero/t/mosaico2.jpg', },
    { src: 'images/hero/mosaico3.jpg', srct: 'images/hero/t/mosaico3.jpg', },
    { src: 'images/hero/mosaico4.jpg', srct: 'images/hero/t/mosaico4.jpg', },
    { src: 'images/hero/mosaico5.jpg', srct: 'images/hero/t/mosaico5.jpg', },
    { src: 'images/hero/mosaico6.jpg', srct: 'images/hero/t/mosaico6.jpg', },
    { src: 'images/hero/mosaico7.jpg', srct: 'images/hero/t/mosaico7.jpg', },
    { src: 'images/hero/mosaico8.jpg', srct: 'images/hero/t/mosaico8.jpg', },
    { src: 'images/hero/mosaico9.jpg', srct: 'images/hero/t/mosaico9.jpg', },
  ],
  galleryMosaic : [
    { w: 1, h: 1, c: 1, r: 1 },
    { w: 1, h: 1, c: 2, r: 1 },
    { w: 1, h: 1, c: 3, r: 1 },
    { w: 1, h: 1, c: 1, r: 2 },
    { w: 1, h: 1, c: 2, r: 2 },
    { w: 1, h: 1, c: 3, r: 2 },
    { w: 1, h: 1, c: 1, r: 3},
    { w: 1, h: 1, c: 2, r: 3 },
    { w: 1, h: 1, c: 3, r: 3 },
  ],
  galleryMosaicXS : [
    { w: 2, h: 2, c: 1, r: 1 },
    { w: 1, h: 1, c: 2, r: 1 },
    { w: 1, h: 1, c: 3, r: 1 },
    { w: 1, h: 1, c: 1, r: 2 },
    { w: 1, h: 1, c: 2, r: 2 },
    { w: 1, h: 1, c: 3, r: 2 },
    { w: 1, h: 1, c: 1, r: 3},
    { w: 1, h: 1, c: 2, r: 3 },
    { w: 1, h: 1, c: 3, r: 3 },
  ],
});


jQuery("#nanogallery-flat1").nanogallery2(conf1);
jQuery("#nanogallery-flat2").nanogallery2(conf2);
jQuery("#nanogallery-hero").nanogallery2(confHero);
