
let button = document.getElementById("close-button");

let nav = document.getElementById("nav");

button.addEventListener("click", btnClick);

function btnClick() {
  let style = window.getComputedStyle(nav).height;
    if (style === "0px") {
        nav.style.visibility = "visible";
        nav.style.opacity = "100";
        nav.style.maxHeight = "1000px"
        
    } else {
        nav.style.visibility = "hidden";
        nav.style.opacity = "0";
        nav.style.maxHeight = "0px";
    }
}