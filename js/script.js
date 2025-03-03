

$(document).ready(function () {

    
    window.onload = function(){
        $('#audio-start').get(0).play();

    }


    var audioStart = $('#audio-start').get(0);

    function playAudioStart() {
        audioStart.play();
    }
    
    function pauseAudioStart() {
        audioStart.pause();
    }
    


});


