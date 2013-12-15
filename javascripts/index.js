$(function() {
    var $everything = $('*'),
        $sections = $('section'),
        $body = $('body');

    $(window).resize(function() {
        $everything.css("z-index", 1);
    });

    var $section = function(index) {
        if (index < 0) { index = 0; }
        if (index >= $sections.length) { index = $sections.length -1; }
        return $($sections.get(index));
    }

    var jumpTo = function(index) {
        $body.animate({ scrollTop: $section(index).offset().top }, 'fast');
    };

    var current = function() {
        // current slide is the one that's top is in the top half of the screen
        return Math.floor($sections.length * ($body.scrollTop() + 1) / $body.height());
    };

    var jumpToNext = function() {
        jumpTo(current() + 1);
    }

    $body
        .click(jumpToNext)
        .keypress(jumpToNext);

    jumpTo(0);
    
});