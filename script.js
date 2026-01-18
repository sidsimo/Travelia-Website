let menu = document.getElementById("menu");
let show = document.getElementById("show");
let closeX = document.getElementById("close");
menu.addEventListener("click", ()=> {
    show.style.display = "block";
});

closeX.addEventListener("click" , ()=> {
    show.style.display = "none";
});