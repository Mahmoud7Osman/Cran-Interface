const output        =   document.querySelector(".controloutput");
const selfdestroy   =   document.querySelector("#selfdestroy");
const listen        =   document.querySelector("#listen");
const cls           =   document.querySelector("#cls");

function selfDestroy() {
    output.innerHTML += "Sending Self Destroy Signal...<br>";
    output.scrollTop = output.scrollHeight;
}
function Listen() {
    
}
selfdestroy.onclick = selfDestroy;
cls.onclick = () =>{
    output.innerHTML = '';
}
