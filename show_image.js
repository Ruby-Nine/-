const imagePath = "assets/"

var currImageId = -1;
var questions = database["questionLists"];

var total = questions.length;
var difficulty = "normal";

const hintBox = document.getElementById("hint");
var image = document.getElementById("currentImage").src;

document.getElementById('showRandomImage').addEventListener('click', function () {
    showRandomImage()
});
document.getElementById('currentImage').onload = function () {
    document.getElementById("showRandomImage").setAttribute("aria-busy", false);
    document.getElementById("showRandomImage").innerHTML = "随机选取图片";
};
document.getElementById('showHint').addEventListener('click', function(){
    showHint();
});
document.getElementById('showOrigin').addEventListener('click', function(){
    showOrigin();
});
document.getElementById('showAnswer').addEventListener('click', function(){
    showAnswer();
});
document.getElementById('test').addEventListener('click', function(){
    setImageId();
});
document.getElementById('changeDifficulty').addEventListener('click', function(){
    changeDifficulty();
})


function showRandomImage(){
    randomImageId();
    while(difficulty!="normal" && questions[currImageId]["difficulty"] != difficulty){
        randomImageId();
    }
<<<<<<< HEAD
    showImage();
}

function changeDifficulty(){
    if(difficulty=="normal"){
        difficulty="easy";
        document.getElementById('changeDifficulty').innerText="简单模式";
    }else{
        difficulty="normal";
        document.getElementById('changeDifficulty').innerText="普通模式";
    }
=======
    let randomImageSrc = imagePath + questions[currImageId]["image"];
    document.getElementById("showRandomImage").setAttribute("aria-busy", true);
    document.getElementById("showRandomImage").innerHTML = "加载中...";
    document.getElementById("currentImage").src = randomImageSrc;
    // document.getElementById("hint").value = "";
    // document.getElementById("origin").value = "";
    // document.getElementById("answer").value = "";
    hintBox.innerHTML = "";
>>>>>>> 4d7de4bc2d463b7e8f7518349fca85887c3d20e4
}

function showHint(){
    let hint = questions[currImageId]["hint"];
    // document.getElementById("hint").value = hint;
    // alert(hint);
    hintBox.innerHTML = hint;
}

function showOrigin(){
    let origin = questions[currImageId]["origin"];
    // document.getElementById("origin").value = origin;
    // alert(origin);
    hintBox.innerHTML = origin;
}

function showAnswer(){
    // showHint();
    // showOrigin();
    let origin = questions[currImageId]["origin"];
    let answer = questions[currImageId]["answer"];
    // alert("出处：" + origin + "\n" + answer);
    // document.getElementById("answer").value = answer;
    hintBox.innerHTML = "《" + origin + "》: " + answer;
}

function randomImageId(){ 
    let newId = -1;
    do{
        newId = Math.floor(Math.random() * total); 
    }while (newId == currImageId)
    currImageId = newId;
} 

function setImageId(){
    var newId = prompt("请输入图片id","");
    newId -= 1;
    currImageId = newId;
    showImage();
}

function showImage(){
    let randomImageSrc = imagePath + questions[currImageId]["image"];
    document.getElementById("currentImage").src = randomImageSrc;
    // document.getElementById("hint").value = "";
    // document.getElementById("origin").value = "";
    // document.getElementById("answer").value = "";
    hintBox.innerHTML = "";
}
