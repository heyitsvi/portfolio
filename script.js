const dropdown = document.getElementById("drop-down");
const nav = document.getElementById("nav-menu");
const navbar = document.getElementById("nav-bar");



function toggleBtn(){
    console.log("clicked");
    nav.classList.toggle('show');
    navbar.classList.toggle('show');

}

dropdown.addEventListener("click", toggleBtn);