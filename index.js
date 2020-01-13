$(document).ready(function(){
    $('.iframe-div audio').css('display','none');
  });

function buttonClicked(){
    console.log("In function");
    $(".iframe-div video").hide();
    $(".button-div").hide();
    $('.iframe-div audio').show();
    document.getElementById('audioplayer').play();
    
}
