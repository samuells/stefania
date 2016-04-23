jQuery(document).ready(function($) {
    'use strict';

    // ******** TOGGLE MOBILE MENU ******* //
    $('.js-toggle-mobile-menu').on('click', function(event) {
        event.preventDefault();
        $(this).removeClass('no-animation').closest('header').toggleClass('menu-opened');
    });
});
