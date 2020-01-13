$(document).ready(function () {
    $('.iframe-div audio').css('display', 'none');
    
        for(var i=0;i<6;i++){
            var ele = $("."+i+"language");
            ele.css('display','none');
        }
});

function buttonClicked() {
    console.log("In function");
    $(".iframe")[0]
    .contentWindow
    .postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $(".iframe-row").hide();
    $(".button-row").hide();
    // $('.iframe-div audio').show();
    document.getElementById('audioplayer').play();
    for (var i = 0; i <= 10 ; i++) {
        window.setTimeout(
          (function (i){ 
            return function() {
                var ele = $("."+i+"language");
                ele.css('display','block');
            }
          })(i),i * 1000)
        }
}
