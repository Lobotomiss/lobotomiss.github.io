function explode() {
            const audio = new Audio('assets/sounds/x_files.mp3');
            audio.play();

            document.getElementById("whitlegoy_txt").innerHTML = "AAaaaAAaAAAAAaaaaAAaaauuuughghhghhg"
            document.getElementById("whitlegoy_img").src = "assets/images/explosion.gif"
            document.getElementById("pet_img").src = "assets/images/explosion.gif"


            document.getElementById("glitter_left").src = "assets/images/sus.gif"
            document.getElementById("glitter_right").src = "assets/images/sus_flip.gif"

        }
        function pipe() {
            const audio = new Audio('assets/sounds/metal_pipe.mp3');
            audio.play();
        }
        function zoom() {
            document.getElementById("dog_img").src = "assets/images/lex_zoom.jpg"
            const audio = new Audio('assets/sounds/megaborkvania.mp3');
            audio.play();
        }
        function zoomout() {
            document.getElementById("dog_img").src = "assets/images/lex.jpg"
        }

//script for collapsable

function collapse() {
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}

//script for lil_guy




//actually learning the javascript without just vibing it
let firstName = "Billy", lastName = "mc Cain";

console.log("hello " + firstName + " " + lastName);

let person = {
  name: 'ass kechup',
  age: 15,
};
console.log("name: " + person.name + ". age: " + person.age)

// array om shit in te laten voegen als keuze. eerste is 0, tweede is 1, etc:

let selectedColors = ["red", "blue"];
console.log(selectedColors[1]);

//functions:
function greet(ass) {
  console.log("hello " + ass);
}
greet("john");

//math!
function square(number) {
  return number * number;
}

let numberSquare = square(5);

console.log(numberSquare)