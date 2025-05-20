function init_board() {
    let bg_x = 0;
    let bg_y = 0;
    const rows = board.querySelectorAll(".row");
    console.log(rows);
    if (rows.length > 0) {
        for (let i=0; i < rows.length; i++) {
            board.removeChild(rows[i]);
            state.pop();
        }
    }
    for (let y=0; y<size; y++) {
        let row = document.createElement("div"); 
        row.style.width = board_width + "px";
        row.classList.add("row");
        board.appendChild(row);
        let state_row = [];
        for (let x=0; x < size; x++) {
            if (x == size - 1 && y == size - 1) break;
            let element = document.createElement("div");
            element.id = "b" + x + y;
            element.classList.add("field");
            element.style.backgroundImage = "url(images/" + image + ".png)";
            element.style.backgroundSize = board_width + "px";
            element.style.height = board_width / size + "px";
            element.style.width = board_width / size + "px";
            element.style.backgroundPositionX = bg_x - x * board_width / size + "px";
            element.style.backgroundPositionY = bg_y - y * board_width / size + "px";
            row.appendChild(element);
            let tile_id = y * size + x;
            state_row.push(tile_id);
        }
        state.push(state_row);
    }
    console.log(state);
}

/*==========================================================================================================================*/
/*  M  A  I  N                                                                                                              */
/*==========================================================================================================================*/

const board_width = 450;
let size = 4;
let image = "graffiti";
let state = [];

const board = document.getElementById("board");
board.style.width = board_width + "px";

const input_size = document.getElementById("input_size");
input_size.value = size;
input_size.onchange = function() {
    size = parseInt(input_size.value);
    console.log(size);
    init_board();
}

const input_image = document.getElementById("input_image");
input_image.value = image;
input_image.onchange = function() {
    image = input_image.value;
    init_board();
}
init_board();