/*global $*/
$('document').ready(function () {
    'use strict';
    $('.containham').click(function () {
        $('.containham').toggleClass('close');
        $('.menu').toggleClass('active');
        $('nav').toggleClass('active');
        $('#abtsocialicons').toggleClass('active');
        $('#introtext').toggleClass('activeop');
        $('footer').toggleClass('activeop');
        $('#centerlogo').toggleClass('activeop');
        $('#bodytext').toggleClass('activeop');
        $('#skillset').toggleClass('activeop');
        $('#workdone').toggleClass('activeop');
        $('#contactss').toggleClass('activeop');
    });
});
