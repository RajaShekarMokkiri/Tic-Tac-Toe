let box0 = document.querySelector(".box1Box1")
let box1 = document.querySelector(".box2Box1")
let box2 = document.querySelector(".box3Box1")
let box3 = document.querySelector(".box1Box2")
let box4 = document.querySelector(".box2Box2")
let box5 = document.querySelector(".box3Box2")
let box6 = document.querySelector(".box1Box3")
let box7 = document.querySelector(".box2Box3")
let box8 = document.querySelector(".box3Box3")
let button = document.querySelector("button");

let start = document.querySelector(".start");

start.addEventListener("click",()=>{
    start.textContent = "Player 1 Turn";
    start.style.display= "flex";
    start.style.backgroundColor= "red";
    start.style.color= "white";
    start.style.paddingLeft = "13px";
    start.style.paddingRight = "13px";

})


let currentPlayer = "X";


function handleStart(){
    //  start.textContent = currentPlayer ==="X" ? "Player 1 Turn": "Player 2 Turn";
    if(start.textContent === "Player 1 Turn"){
        let res1 = start.textContent= "Player 2 Turn";
        let res2 = start.style.backgroundColor = "yellow";
        let res3 = start.style.color = "red";
        return res3;
    }else{
        let res1 = start.textContent= "Player 1 Turn";
        let res2 = start.style.backgroundColor = "red";
        let res3 = start.style.color = "white";
        return res1,res2,res3;
    }
}





function handleClick(box){
    if(box.textContent !==""){
        return alert("That box is already filled");
    }

    box.textContent=currentPlayer;


    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.color = "red";
    box.style.fontSize = "20px";


    currentPlayer = currentPlayer ==="X"?"O":"X";
}



// checking winner
function checkWinner(){
    let comb= [
        [box0,box1,box2],
        [box3,box4,box5],
        [box6,box7,box8],
        [box0,box3,box6],
        [box1,box4,box7],
        [box2,box5,box8],
        [box0,box4,box8],
        [box2,box4,box6],
    ];

    for(let i of comb){
        let[a,b,c]=i;
        if(a.textContent && a.textContent === b.textContent  && b.textContent === c.textContent){
            start.textContent = `${a.textContent} wins`;
            return true;
        }
    }
    return false;
}



//main code
const boxes = [box0, box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8]

boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(start.textContent === "Start"){
            return alert("Please Enter Start Button");
        }else{
              handleClick(box);
              handleStart();
              checkWinner();
        }

    })
})



//Reset button

button.addEventListener("click",()=>{
    boxes.forEach(box=>{
        box.textContent="";
    })
    start.textContent = "Start";
    start.style.backgroundColor = "green";
    start.style.color = "white";
})





















