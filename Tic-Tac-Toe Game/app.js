let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;//playerX, playerY

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame =() => {
    turnO = true;
    anableboxes();
    msgcontainer.classList.add("hide");
    
} 

boxes.forEach(box=>{
    box.addEventListener("click",()=> {
    
        if ( turnO){
            box.innerText = "O";
            turnO =false

        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.ariaDisabled=true;

        checkwinner();
    });

});

const ariaDisabledboxes = () =>{
    for (let box of boxes ){
        box.ariaDisabled =true;
    }
}

const anableboxes = () =>{
    for (let box of boxes ){
        box.ariaDisabled =false;
        box.innerText = "";
    }
}

const showWinner = (Winner) =>{
    msg.innerText = "Congratulation,  You are Winner!!! ";
    msgcontainer.classList.remove("hide");
    ariaDisabledboxes();
}
const checkwinner = () => {
    for(let pattern of winPatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);

            }
        }
    }
};

newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

