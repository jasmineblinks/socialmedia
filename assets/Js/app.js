

function darkMode(){
    let mode = document.getElementById("grid");
    let b = document.getElementById("cardcolor");
    let c = document.getElementById("thecolor");
    mode.classList.toggle("light-mode"); 
    b.classList.toggle("whitecard");
    c.classList.toggle("whitecard");
    
}


darkMode();
