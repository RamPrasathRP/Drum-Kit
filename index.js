// Creating a variable for the buttons 🙂
var numberOfDrumButtons = document.querySelectorAll('.drum').length;

// Adding click event listeners to buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML); // Call a function to play sound
    });
}

// Adding keyboard event listener
document.addEventListener('keydown', function (event) {
    playSound(event.key); // Pass the pressed key to the function
});

// Function to play the sound based on key
function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log("Invalid key: " + key);
    }
}
