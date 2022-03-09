function websites(sitesName) {
    let tabs;
    let sites = document.getElementsByClassName("sites");
    for (tabs = 0; tabs < sites.length; tabs++) {
        sites[tabs].style.display = "none";
    }
    document.getElementById(sitesName).style.display = "flex";

}


const btn = document.querySelector(".menu-btn");
btn.addEventListener("click", toggleMenu);


function toggleMenu() {
    const btnIcon = document.querySelector(".icon-x")
    let menu = document.querySelector(".conteudo-nav");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        btnIcon.src = "./images/icon-hamburger.svg";
    } else {
        menu.style.display = "block";
        btnIcon.src = "./images/icon-close.svg";

    }
}