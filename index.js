let gameSeq=[];
let userSeq=[];

let btns=["blue","yellow","green","pink"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started== false){
        console.log("game is started")
        started=true;

        levelUp();
    }    
});

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}

function levelUp(){
    level++;
    h2.innerText= `Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(){
    console.log(`curr level : `, level);
}
function btnPress(){
    let btn=this;
    userFlash(btn); 

    userFlash=btn.getAttribute("id");
    userSeq.push(userFlash);
    console.log(userFlash);

    checkAns();
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}