$(document).ready(function () {
    $('.iframe-div audio').css('display', 'none');
});

function buttonClicked() {
    console.log("In function");
    $(".iframe")[0]
    .contentWindow
    .postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $(".iframe-div iframe").hide();
    $(".button-div").hide();
    // $('.iframe-div audio').show();
    document.getElementById('audioplayer').play();

}
