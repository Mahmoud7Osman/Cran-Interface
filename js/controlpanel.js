const output        =   document.querySelector(".controloutput");
const selfdestroy   =   document.querySelector("#selfdestroy");
const listen        =   document.querySelector("#listen");
const cls           =   document.querySelector("#cls");



function selfDestroy() {
    output.innerHTML += "Sending Self Destroy Signal<br>";



    output.scrollTop = output.scrollHeight;
}
function Kill(){
    output.innerHTML += "Sending Kill Signal<br>";


    output.scrollTop = output.scrollHeight;
}
function Connect() {
    output.innerHTML += "Connecting<br>";

    output.scrollTop = output.scrollHeight;
}
function Listen() {
    output.innerHTML += "Listening For Incoming Cran Session<br>";

    output.scrollTop = output.scrollHeight;
}



selfdestroy.onclick = selfDestroy;
cls.onclick = () =>{
    output.innerHTML = '';
}
