$(function() {
    var $everything = $('*');

    $(window).resize(function() {
        $everything.css("z-index", 1);
    });
});