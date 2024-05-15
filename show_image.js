const imageDictPath = 'question/';
const ansDictPath = 'answer/';

var currImageId=-1;
var images=[
    "为什么要弹春日影.png",
    "但是我拒绝！.png",
    "你是我的master吗.png",
    "其他人做得到吗！.png",
    "在虚拟的故事当中寻求真实感的人脑袋一定有问题.png",
    "成为魔法少女吧.png",
    "我打宿傩，真的假的.png",
    "所以，不要停下来啊.png",
    "真相只有一个.png"
];


var totalImages = images.length;
    

document.getElementById('showRandomImage').addEventListener('click', function () {
    showRandomImage();
});

document.getElementById('showAnswer').addEventListener('click', function(){
    showAnswer();
});

function showRandomImage(){
    randomImageId();
    let randomImageSrc = imageDictPath + images[currImageId];
    document.getElementById("currentImage").src = randomImageSrc;
}

function showAnswer(){
    let answerImageSrc = ansDictPath + images[currImageId];
    document.getElementById("currentImage").src = answerImageSrc;
}

function randomImageId(){ 
    let newId = -1;
    do{
        newId = Math.floor(Math.random() * totalImages); 
    }while (newId == currImageId)
    currImageId = newId;
} 
