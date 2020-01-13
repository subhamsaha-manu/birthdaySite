$(document).ready(function () {
    $('.iframe-div audio').css('display', 'none');
    $('.english').css('display','none');
        for(var i=0;i< 25;i++){
            var ele = $("."+i+"language");
            ele.css('display','none');
        }
});
var loopCount = 0;
var  i=0;
function buttonClicked() {
    console.log("In function");
    $(".iframe")[0]
    .contentWindow
    .postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $(".iframe-row").hide();
    $(".button-row").hide();
    // $('.iframe-div audio').show();
    document.getElementById('audioplayer').play();
    var showInterval = setInterval(function(){ 
        var ele = $("."+i+"language");
        ele.css('display','block');
        i++;
        ++loopCount;
        console.log(loopCount);
        if(loopCount === 25)
            clearInterval(showInterval);
     }, 2000);
   var removeInterval= setInterval(function(){
        console.log('clear()');
     if(loopCount===25){
         console.log("Working");
        for(var i=0;i< 25;i++){
            var ele = $("."+i+"language");
            ele.css('display','none');
            clearInterval(removeInterval);
        }
     }
    }, 10000);
    
    var lastInterval = setInterval(function(){
        if(loopCount>=25){
            console.log("Show");
            $('.english').css('display','block');
            clearInterval(lastInterval);
        }
    },1000)
}