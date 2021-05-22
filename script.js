var character = document.getElementById("character");
var block = document.getElementById("block");

function jumpCharacter() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
}

var checkLoser = setInterval(function(){
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft < 50 && blockLeft > 0 && charTop >=280){
        block.style.animation ="none";
        block.style.display ="none";
        alert("You lose Punk")
        window.location.reload();
    }
},10)

