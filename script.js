function board(size){
    const board = document.querySelector(".board");
    board.style.gridAutoColumns = "50px";
    board.style.gridAutoRows = "50px";

    for(let x=0; x<size; x++){
        for(let y=0; y<size; y++){
            let item = document.createElement("div");

            item.addEventListener("mouseenter", () => {
                item.style.background = "black";
            })

            //item.style.border = "1px solid black"
            item.style.gridColumn = x+1;
            item.style.gridRow = y+1;

            board.appendChild(item);
        }
    }
}

board(16);