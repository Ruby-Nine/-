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
});
document.getElementById('about').addEventListener('click', function(){
    about();
});


function showRandomImage(){
    randomImageId();
    while(difficulty!="normal" && questions[currImageId]["difficulty"] != difficulty){
        randomImageId();
    }
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
        newId = Math.floor(Math.random() * (total-1)) + 1; 
    }while (newId == currImageId)
    currImageId = newId;
} 

function setImageId(){
    var newId = prompt("请输入图片id", currImageId);
    // magic number: 999 读取所有图片
    if(newId == 999){
        alert("init");
        for(currImageId=1; currImageId<total; ++currImageId){
            showImage();
        }
        currImageId = 0;
        showImage();
    }else{
        newId -= 1;
        currImageId = newId;
        showImage();
    }
}

function showImage(){
    let randomImageSrc = imagePath + questions[currImageId]["image"];
    document.getElementById("currentImage").src = randomImageSrc;
    // document.getElementById("hint").value = "";
    // document.getElementById("origin").value = "";
    // document.getElementById("answer").value = "";
    hintBox.innerHTML = "";
}

function about(){
    alert("\
        主要负责人: Ruby\n\
        网页制作: 西瓜 Ruby\n\
        素材剪辑: 茶茶 Ruby\n\
        素材收集：全体团子动漫社社员\
    ");
}