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
        window.location.hash = '#' + index;
        $body.animate({ scrollTop: $section(index).offset().top }, 200);

        var notes = $section(index).find('div.notes');
        if (notes.length) { console.log(notes.text()); }
    };

    var current = function() {
        // current slide is the one that's top is in the top half of the screen
        var i = Math.floor($sections.length * ($body.scrollTop() + 1) / $body.height());
        return (i < 0) ? 0 : i;
    };

    var jumpToNext = function() {
        jumpTo(current() + 1);
    };

    var jumpToHash = function() {
        var hash = window.location.hash.substring(1);
        jumpTo(parseInt(hash) || 0);
    };

    $body.keypress(jumpToNext);

    //window.onhashchange = jumpToHash;
    window.onscroll = function() {
        var index = current();
        window.location.hash = '#' + index;
    };

    jumpToHash();

});
