//Das hier ist der Button/Link, der gedrückt wird
let button = document.getElementById("close-button");

//Hier muss die ID des Elements hin, welches aus- und eingeblendet wird
let nav = document.getElementById("nav");

//Fügt einen Click-Listener hinzu
button.addEventListener("click", btnClick);

function btnClick() {
  //style bekommt den aktuellen Wert des Elements(block oder non)
  let style = window.getComputedStyle(nav).height;
    if (style === "0px") {
        nav.style.visibility = "visible";
        nav.style.opacity = "100";
        nav.style.height = "200px"
        
    } else {
        nav.style.visibility = "hidden";
        nav.style.opacity = "0";
        nav.style.height = "0px";
    }
}