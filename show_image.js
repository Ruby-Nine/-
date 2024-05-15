const imagePath = "assets/"

var currImageId = -1;
var questions = database["questionLists"];

var total = questions.length;

document.getElementById('showRandomImage').addEventListener('click', function () {
    showRandomImage();
});

document.getElementById('showAnswer').addEventListener('click', function(){
    showAnswer();
});

function showRandomImage(){
    randomImageId();
    let randomImageSrc = imagePath + questions[currImageId]["image"];
    document.getElementById("currentImage").src = randomImageSrc;
}

function showAnswer(){
}

function randomImageId(){ 
    let newId = -1;
    do{
        newId = Math.floor(Math.random() * total); 
    }while (newId == currImageId)
    currImageId = newId;
} 
