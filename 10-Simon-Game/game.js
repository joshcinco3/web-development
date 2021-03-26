var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    
    console.log(userClickedPattern);
});

function nextSequence() {
    if (level === 0) {
        $("#level-title").text("Level 0");
    }
    
    level++;
    $("#level-title").text("Level " + level)

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass(".pressed").delay(100).removeClass(".pressed");
}

$(document).on("keydown", function(e) {
    nextSequence();
})