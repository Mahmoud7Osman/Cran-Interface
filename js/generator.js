let Choices      = document.getElementsByTagName("choice");
let onlineSetup  = document.getElementById("onlinesetup");
let offlineSetup = document.getElementById("offlinesetup");
let onlinebtn    = document.getElementById("online");
let offlinebtn   = document.getElementById("offline");
let length       = Choices.length;
let create       = document.getElementById("create");
let buyProVersion= document.getElementsByTagName("bpv");

function Select(c) {
    for (let choice in Choices){
        if (choice == c){
            Choices[c].style.backgroundColor = "blue";
            Choices[c].style.color           = "white";
            Choices[c].style.border          = "2px solid black";

            if (Choices[c].textContent == "Online"){
                offlineSetup.style.display = "none";
                onlineSetup.style.display  = "block";
            } else {
                onlineSetup.style.display = "none";
                offlineSetup.style.display  = "block";
            }
            continue;
        }
        Choices[choice].style.backgroundColor = "rgb(108, 255, 255)";
        Choices[choice].style.border          = '';
        Choices[choice].style.color = "black";
    }
}



create.onclick = () =>{
    for(let i in buyProVersion){
        buyProVersion[i].innerHTML = "Buy Pro Version With Lifetime Access in Order to Create Your Own CRAN Keyloggers";
    }
};

for (let choice in Choices){
    Choices[choice].onclick = ()=>{Select(choice)};
}