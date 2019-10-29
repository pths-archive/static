$(function(){
    var images = $('img[alt]');
    images.css('cursor', 'zoom-in');
    images.click(function() {
        var img = $(this);
        window.open(img.attr('src'), img.attr('alt'));
    });
});
