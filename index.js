//var kunci buat gampang manggil query selector
kunci=document.querySelectorAll(".drum");
//calling methodenya
pushSound();
document.addEventListener("keydown",function(e){
    makeSound(e.key);
})
function makeSound(event){
    
    
            switch (event) {
                case "w":
                    var tom1=new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "a":
                    var tom2=new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "s":
                    var tom3=new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    document.getElementById("title").textContent = "test";
                    break;
                case "d":
                    var tom4=new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                case "j":
                    var snare=new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                case "k":
                    var crash=new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                case "l":
                    var kickbass=new Audio("sounds/kick-bass.mp3");
                    kickbass.play();
            }
            buttonAnimation(event);
            

              
 }

function pushSound(){
for (let i = 0; i < kunci.length; i++) {
    kunci[i].addEventListener("click", function(){
        switch (kunci[i].innerHTML) {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kickbass=new Audio("sounds/kick-bass.mp3");
                kickbass.play();
        }
        buttonAnimation(kunci[i].innerHTML)
        
    });
        
    }
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
       activeButton.classList.remove("pressed"); 
    }, 100);
}
