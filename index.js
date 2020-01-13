$(document).ready(function () {
    $('.iframe-div audio').css('display', 'none');
    
        for(var i=0;i< 25;i++){
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
    showLanguages();
}

async function showLanguages(){
    console.log('show()');
    for (var i = 0; i < 25 ; i++) {
        window.setTimeout(
          (function (i){ 
            return function() {
                var ele = $("."+i+"language");
                ele.css('display','block');
            }
          })(i),i * 1000)
          await sleep(2000);
        }
        
        clearLanguages();
}
 function clearLanguages(){
     console.log('clear()');
    for(var i=0;i< 25;i++){
        var ele = $("."+i+"language");
        ele.css('display','none');
    }
 }

 function sleep(ms) {
    console.log('sleep()');
    return new Promise(resolve => setTimeout(resolve, ms));
  }