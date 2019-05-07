$(document).ready(function(){

  //jQuery calls
  $body = "body";
  $container = ".container ";
  $firstChild = ".card:first-child ";
  $lastChild = ".card:last-child ";
  $secondChild = ".card:nth-child(2) ";
  $dataCard = "data-card";
  $textArea = $secondChild + "textarea ";
  $howToButton = ".how-to-button ";
  $howToBox = ".how-to-box ";

  //start with glad by default
  $($body).addClass('glad');

  //changes background based on card type
  function changeColor(){
    var cardData = $($secondChild).attr($dataCard);
    $($body).attr('class', $body).fadeIn(1000,function(){
      $($body).addClass(cardData);
    });
  }

  //pops up how to box
  $($howToButton).click(function(){
    $($howToBox).fadeIn().click(function(){
      $(this).fadeOut();
    });
  });

  $("body, .card").swipe( {
    //Generic swipe handler for all directions
    //possible args are: event, direction, distance, duration, fingerCount, fingerData
    swipe:function(event, direction) {
      switch(direction){
        case "left":
          $($firstChild).appendTo($container);
          changeColor();
          break;
        case "right":
          $($lastChild).prependTo($container);
          changeColor();
          break;
        case "up":
          //TODO animate card up, return to natural state (possibly from bottom)
          console.log($($textArea).val());
          $($textArea).val(""); //set this to blank after submit
      }
    },
    excludedElements: "" //allows for swiping to work over any type of element
  });
});
