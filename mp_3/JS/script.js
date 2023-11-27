


/*  Audio Play 1*/
var audio ;
var len = document.getElementsByClassName("myBTNA").length;

document.getElementById("stopbutton").addEventListener("click", function(){
    audio.pause();
});

for (var i=0; i<len; i++){
    document.querySelectorAll(".myBTNA")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        document.querySelector("h3").innerHTML= text + "is Play";
        audioplay(text);
    });
}

function audioplay(text){
    switch (text){
        case "N-1":  
          audio = new Audio("Sound/a1.mp3");
          audio.play();
          break;
    
          case "N-2":  
          audio = new Audio("Sound/a2.mp3");
          audio.play();
          break;
    
          case "N-3":  
          audio = new Audio("Sound/a3.mp3");
          audio.play();
          break;
    
          case "N-4":  
          audio = new Audio("Sound/a4.mp3");
          audio.play();
          break;

          case "N-5":  
          audio = new Audio("Sound/a5.mp3");
          audio.play();
          break;

          case "N-6":  
          audio = new Audio("Sound/a6.mp3");
          audio.play();
          break;
    
          case "N-7":  
          audio = new Audio("Sound/a7.mp3");
          audio.play();
          break;
    
          case "N-8":  
          audio = new Audio("Sound/a8.mp3");
          audio.play();
          break;
    
          case "N-9":  
          audio = new Audio("Sound/a9.mp3");
          audio.play();
          break;

          case "N-10":  
          audio = new Audio("Sound/a11.mp3");
          audio.play();
          break;
      }
     
}











/*  Audio Play 2*/
var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");

playButton.addEventListener("click", function() {
  audio.play();
});

stopButton.addEventListener("click", function() {
  audio.pause();
  audio.currentTime = 0;
});




/*  Audio Play 3*/
 





















