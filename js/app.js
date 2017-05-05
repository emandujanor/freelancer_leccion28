window.onscroll = function() {cambiarMenu()};

function cambiarMenu() {
    if (document.body.scrollTop > 70) {
        document.getElementById("links").className = "linksScroll";
    } else if(document.body.scrollTop < 70) {
        document.getElementById("links").className = " ";
    }
}
