// game state//
let gameOver = false;
spots=[]
currentPlayer= "Blue";
//set up//
let gameBoard, rows, columns;

//set up empty board//
for (let i=0; i<= 5; i++){
    spots.push(["","","","","",""]);
}
//["","","","","","",] spots array will look like
//["","","","","","",] after loop
//["","","","","","",]
//["","","","","","",]
//["","","","","","",]
//["","","","","","",]


//like wordle set up
document.addEventListener('DOMContentLoaded', function(){
    gameBoard = document.querySelector('.board');
    rows= document.querySelectorAll('.rows')
    columns= document.querySelectorAll('.columns');
    })


//set up click listener
// gameBoard = document.getElementById('game-board');
// gameBoard.addEventListener('click',(event)=>{
//     console.log("click works");
//     const dot= event.target;
//     const dots = document.querySelectorAll('.dot');

const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
    dot.addEventListener('click', function(e) {
    const column = parseInt(dot.dataset.column) - 1; 
    const row = parseInt(dot.dataset.row) - 1;
    console.log(`Clicked: Row ${row}, Column ${column}`);
    placeChip(row,column,dot);
    });
});
    //if (!dot.classList.contains('dot')) return; //makes sure it is a dot 
    
    
 
function connectFourGame(){
    //if game over break out of loop 
    //else call placeChip turnSwitch and checkWin
    placeChip();
}

function placeChip(row,column,dot){
    console.log(dot.row , dot.column);
    if (currentPlayer=="Yellow"){
    dot.classList.add("Y");
    spots[row][column]="Y";
    console.log(spots);
    }
    else{
        dot.classList.add("B");
        spots[row][column]="B";
        console.log(spots);
    }
turnSwitch();

    //check whose turn where they click place color of chip 
    //and add to spots array

}

function turnSwitch(){
//switch color of chip placed and whose turn it is 
 currentPlayer = (currentPlayer === 'Blue') ? 'Yellow' : 'Blue';
}


// function checkWin(){
// //look over final from last year and adapt to fit this 
// }