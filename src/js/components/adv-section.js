var $ = window.jQuery = require('jquery');

$('body').on('change', '[data-behavior~="toggle-fullscreen-components"]', function(event) {

  $('.adv-section')    .toggleClass('adv-section--fullscreen');
  $('.adv-tophat')     .toggleClass('adv-tophat--fullscreen');
  $('.adv-header-app') .toggleClass('adv-header-app--fullscreen');
  $('.adv-nav-global') .toggleClass('adv-nav-global--fullscreen');
  $('.adv-topper')     .toggleClass('adv-topper--fullscreen');
  $('.adv-footer')     .toggleClass('adv-footer--fullscreen');
  $('.adv-screen-id')  .toggleClass('adv-screen-id--fullscreen');

})

