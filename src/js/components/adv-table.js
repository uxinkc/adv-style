const $ = window.jQuery = require('jquery');

$('body').on('change', '[data-behavior~="select-table-row"]', function(event) {
  const $self = $(this);
  const $row = $self.closest('tr');
  $row.toggleClass('adv-table__row--selected');
})

$('body').on('change', '[data-behavior~="select-one-table-row"]', function(event) {
  const $self = $(this);
  const $row = $self.closest('tr');
  $row
    .addClass('adv-table__row--selected')
    .siblings('tr')
      .removeClass('adv-table__row--selected')
    ;
  ;
})
