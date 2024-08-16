
function clearGrid(){
    const container = document.querySelector("#container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function setColor(){
    this.style.backgroundColor = "red";
}
function getGridSizes(){
    let gridSize = prompt("Enter the size of the grid between 600 and 900");
    typeof Number(gridSize);
    if(gridSize > 900 || gridSize < 600){
        alert("Please enter a number between 600 and 900!")
        getGridSizes();
    }
    let columnSize = prompt("Enter a column size between 2 and 100");
    typeof Number(columnSize);
    if(columnSize > 100 || columnSize < 2){
        alert("Please enter a number between 2 and 100!")
        getGridSizes();
    }
    let rowSize = prompt("Enter a row size between 2 and 100");
    typeof Number(rowSize);
    if(rowSize > 100 || rowSize < 2){
        alert("Please enter a number between 2 and 100!");
        getGridSizes();
    }
    
    startSketch(gridSize, columnSize, rowSize);
}
function startSketch(gridSize, columnSize, rowSize){
    const container = document.querySelector("#container");

        container.style.width = `${gridSize}px`;
        container.style.height =`${gridSize}px`;

    for(let i = 0; i < (columnSize * rowSize); i++){
        const divBox = document.createElement("div");
        divBox.classList.add("divBox")
        divBox.style.width = `${(gridSize / rowSize)- 2}px`;
        divBox.style.height = `${(gridSize / columnSize)-2}px`;
        divBox.style.background = "black";
        divBox.style.color = "white";
        divBox.style.margin = "1px";
        container.appendChild(divBox);
        divBox.addEventListener("mouseover", setColor);
       
    }


}
