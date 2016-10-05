$(document).ready(function(){

  $('.ig__videos__play').click(function(e){
    $(this).next().next().show();
    $(this).next().hide();
    $(this).hide();
    $('.ig__videos').removeClass('ig__videos--overlay');
    //play the video
    $(".ig__videos__youtube")[0].src += "?autoplay=1";
    // e.preventDefault();
  });

  $('.ig__info__register__cta').click(function(){
    $('.ig__info__register').slideToggle();
  })

});
