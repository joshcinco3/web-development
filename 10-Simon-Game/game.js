var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    var userSound = playSound(userChosenColor);
    userSound.play();

    console.log(userClickedPattern);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var sound = playSound(randomChosenColor);
    sound.play();
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    
    return audio;
}