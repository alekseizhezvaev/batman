'use strict';
$(document).ready(function () {
    const tabsItem = $('.full-info-tabs__item');
    tabsItem.on('click', function (event) {
        event.preventDefault();
        const activeItem = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeItem).toggleClass('visible');
        $('.item-active').toggleClass('item-active');
        $(this).toggleClass('item-active');
    });
});