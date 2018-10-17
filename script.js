function createBoard(size){
    const board = document.querySelector(".board");
    board.style.gridAutoColumns = 800/size;
    board.style.gridAutoRows = 800/size;

    for(let x=0; x<size; x++){
        for(let y=0; y<size; y++){
            let item = document.createElement("div");

            //item.style.border = "1px solid black"
            item.style.gridColumn = x+1;
            item.style.gridRow = y+1;

            board.appendChild(item);
        }
    }
}

function turnBlack(){
    const items = document.querySelectorAll(".board div");

    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("black");
        })
    })
}

function clearBoard(){
    const board = document.querySelector(".board");
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }    

    let newSize = prompt("New Board Size");
    createBoard(newSize);
    turnBlack();
}

createBoard(24);
turnBlack();