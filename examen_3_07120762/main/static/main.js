$(function(){
    $('.tweet').click(function(){
        $(this).toggleClass('yellow');
    });
    $('.tweet a').click(function(){
        $(this).parent().remove();
    });
});