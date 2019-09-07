



function resetGrid(){
    const container=document.querySelector(".grid");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    let size=document.getElementById("size").value;
    console.log(size);
    if (size<=0){
        size=16;
    }
    console.log(size);
    createGrid(size);
    
}

function createGrid(size){
    const width=500/size;
    const height=500/size;
    for(let i=1;i<(size*size)+1;i++){
        let node=document.createElement("div");
        node.style.padding="0";
        node.style.margin="0";
        node.style.width=`${width}px`;
        node.style.height=`${height}px`;
        node.style.backgroundColor="black";
        node.style.display="inline-block";
        node.style.float="left";
        document.querySelector(".grid").appendChild(node);
    }
    addListeners();
}


function addListeners(){
    let clicked=false;
    const paper=document.querySelector(".grid");

    for (let i=1;i<paper.childElementCount;i++){
        let dot=paper.children[i];
        dot.addEventListener('mousedown',()=>{clicked=true});
        dot.addEventListener('mouseup',()=>{clicked=false});
        dot.addEventListener('mouseover',(e) => {
            if(clicked){
                console.log("clicked");
                e.target.style.backgroundColor="yellow";
            }
        })
    }
}