let imANumber = 0;
let intervalID;
let n = 500;
let isTimerRunning = true;

const pause = document.getElementById("pause");

const htmlCounter = document.getElementById("counter")
htmlCounter.textContent = imANumber;

document.getElementById("plus").addEventListener('click',function(){
    imANumber = imANumber + 1
    htmlCounter.textContent = imANumber
});

document.getElementById("minus").addEventListener('click',function(){
    if(imANumber > 0){
        imANumber = imANumber - 1
    } else {
        console.log('Number cannot be negative')
    }
    htmlCounter.textContent = imANumber
});

function startCount(){
    imANumber = imANumber + 1
    htmlCounter.textContent = imANumber;
} 

document.addEventListener('DOMContentLoaded', (event) => {
    if(isTimerRunning == true){
        intervalID = setInterval(startCount,n);
    }
});

function replacePause(){
    pause.textContent = "resume"
};

function replaceResume(){
    pause.textContent = "pause"
};

pause.addEventListener("click", function(){
    if(isTimerRunning == true){
        clearInterval(intervalID);
        replacePause();
    } else {
        intervalID = setInterval(startCount,n);
        replaceResume();
    }
    isTimerRunning = !isTimerRunning;
})

const makeAPost = document.getElementById("submit");

makeAPost.addEventListener("click",function(event){
    event.preventDefault();
    const commentBoxValue = document.getElementById("comment-input").value;
    const li = document.createElement("li");
    const text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("list").appendChild(li);
    document.getElementById("comment-input").value = "";
});

const postALike = document.getElementById("heart");

postALike.addEventListener("click",function(event){
    console.log('something clicked')
    event.preventDefault();
    const li = document.createElement("li");
    const heartIcon = document.createTextNode(`You ❤️ the number ${imANumber}!`);
    document.getElementById("list").appendChild(li);
    li.appendChild(heartIcon);
});

