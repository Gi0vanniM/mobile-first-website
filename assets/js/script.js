// window.onscroll = function () { stickyHeader() };

// var header = document.getElementById("header");
// var menu = document.getElementById("menu");
// var sticky = header.offsetTop;

// function stickyHeader() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//         menu.style.paddingTop = header.offsetHeight + "px";
//         console.log(header.offsetHeight);

//     } else {
//         header.classList.remove("sticky");
//         menu.style.paddingTop = 0 + "px";
//     }
// }

function dropDownHeader() {
    document.getElementById("dropdown-header").classList.toggle("show");
}

function dropDownNav() {
    document.getElementById("dropdown-nav").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}