window.onscroll = function () { stickyHeader() };

var header = document.getElementById("header");
var menu = document.getElementById("menu");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        menu.style.paddingTop = header.offsetHeight + "px";
        console.log(header.offsetHeight);

    } else {
        header.classList.remove("sticky");
        menu.style.paddingTop = 0 + "px";
    }
}