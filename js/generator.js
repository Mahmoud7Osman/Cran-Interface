let boxes  = document.querySelectorAll("input[type='checkbox']");
let nBoxes = boxes.size;

function boxesSelect(box){
    for (let i; i<=nBoxes; i++){
        console.log("ayre");
        if (i == box && boxes[i].checked == false){
            boxes[i].checked = true;
            continue;
        }
        boxes[i].checked = false;
    }
}

for (let i in boxes){
    console.log(i);
    boxes[i].onclick = () =>{ boxesSelect(i) };
}