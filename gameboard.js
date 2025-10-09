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
    
    
   //if game over break out of loop 
    //else call placeChip turnSwitch and checkWin 
function connectFourGame(){
    placeChip();
    turnSwitch();
    checkWin();
}

function placeChip(row,column,dot){
    //console.log(dot.row , dot.column);
    const columnUsed = parseInt(dot.dataset.column) - 1; //get the column using variable error need to rename
    let placedRow = null; 
    for (let rowUsed = spots.length - 1; rowUsed >= 0; rowUsed--) {//find lowest spot
        if (spots[rowUsed][columnUsed] === "") { 
            spots[rowUsed][columnUsed] = currentPlayer; 
            placedRow=rowUsed;
            break;
        }
    }
    const finalDot = document.querySelector(
    `.dot[data-row="${placedRow + 1}"][data-column="${columnUsed + 1}"]`
);
    if (currentPlayer=="Yellow"){
    finalDot.classList.add("Y");
    spots[placedRow][columnUsed]="Y";
    console.log(spots);
    }
    else{
        finalDot.classList.add("B");
        spots[placedRow][columnUsed]="B";
        console.log(spots);
    }
turnSwitch();
    //check whose turn where they click place color of chip 
    //and add to spots array
checkWin();
}

function turnSwitch(){
//switch color of chip placed and whose turn it is 
 currentPlayer = (currentPlayer === 'Blue') ? 'Yellow' : 'Blue';
}


function checkWin(){
// //look over final from last year and adapt to fit this 
        for(let i=0;i<6; i++ ){
            for(let j=0;j<6;j++){
            if (
                i <= 2 &&
                spots[i] !== undefined &&
                spots[i + 1] !== undefined &&
                spots[i + 2] !== undefined &&
                spots[i + 3] !== undefined &&
                spots[i][j] !== "" && spots[i][j] === spots[i + 1][j] &&
                spots[i][j] === spots[i + 2][j] && spots[i][j] === spots[i + 3][j]
            ){
                console.log("Vertical win!");
                gameOver = true;
                return true;
                }   
            if (//accross 
                j<= 2 &&
                spots[i] &&
                spots[i][j]!==""&&
                spots[i][j]===spots[i][j+1]&&
                spots[i][j]===spots[i][j+2] && spots[i][j]===spots[i][j+3]
            ){
                console.log("game over");
                gameOver=true;
                return true;
            }
            if(//diagonal
                i>= 3 && j<=2 &&
                spots[i] && spots[i-1] && spots[i-2] && spots[i-3] && 
                spots[i][j] !== "" &&
                spots[i][j]===spots[i-1][j+1] &&
                spots[i][j]===spots[i-2][j+2] && spots[i][j]===spots[i-3][j+3]
            ){
                console.log("game over");
                gameOver=true;
                return true;
            }
            if( ///other diagonal
                i<=2 && j<=2 &&
                spots[i] && spots[i+1] && spots[i+2] && spots[i+3] && spots[i][j] !== ""&&
                spots[i][j]===spots[i+1][j+1] &&
                spots[i][j]=== spots[i+2][j+2] && spots[i][j]===spots[i+3][j+3]
            ){
                console.log("game over");
                gameOver=true;
                return true;
            }
        }
    } 
    return false;
}
