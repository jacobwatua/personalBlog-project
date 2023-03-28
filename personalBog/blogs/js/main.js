function toogle_side_menu() {
    var menu = document.getElementsByClassName("side-menu");
    if (menu[0].style.display == "none") {
        menu[0].style = "\
        display: block;\
        position: fixed;\
        height: 100%;";
    }
    else{
        menu[0].style.display = "none";
    }
}


