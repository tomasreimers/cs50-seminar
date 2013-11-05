// slide in left
jQuery.fn.slideRight = function () {
    $(this).css('left',-$(this).width());
    $(this).stop().animate({left:0,opacity: 1}, 500, function() {});
    return this;
}

jQuery.fn.slideOutRight = function () {
    $(this).stop().animate({left: $(document).width(),opacity: 1}, 500, function() {});
    return this;
}

// slide out right
jQuery.fn.slideLeft = function() {
    $(this).stop().animate({left: -$(this).width(), opacity: 0},500, function() {});
    return this;
}

$("a").click(function(e){
  e.preventDefault();
  $('.active').slideOutRight().removeClass('active');
  var location = $(this).attr('href');
  $('#'+location).slideRight().addClass('active');
})

$(document).ready(function(){
  $(".toc").click(function(){
    if ($(this).attr('active') == 'true') {
      $(this).attr('active',false);
      $(".left").slideLeft();
    }
    else {
      $(this).attr('active',true);
      $('.left').slideRight();
    }
  });

  $(".wrapper").click(function (){
    $('.toc').attr('active',false);
    $(".left").slideLeft();
  });
  $('.content').css('left',-$(this).width()).show();
  $('#start').slideRight().addClass('active');
})