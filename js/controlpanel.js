const output=document.querySelector(".controloutput");
const selfdestroy=document.querySelector("#selfdestroy");
const cls=document.querySelector("#cls");

function selfDestroy() {
    output.innerHTML += "Sending Self Destroy Signal...<br>";
    output.scrollTop = output.scrollHeight;
}

selfdestroy.onclick = selfDestroy;
cls.onclick = () =>{
    output.innerHTML = '';
}