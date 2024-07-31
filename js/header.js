if (document.location.pathname === "/aboutme/") {
    window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("header-container").style.backgroundColor = "rgba(255, 250, 240, 0.75)";
        document.getElementById("header-container").style.boxShadow = "0 0 20px grey";
    });
} else {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 50) {
            document.getElementById("header-container").style.backgroundColor = "rgba(255, 250, 240, 0.75)";
            document.getElementById("header-container").style.boxShadow = "0 0 20px grey";
        } else {
            document.getElementById("header-container").style.backgroundColor = "floralwhite";
            document.getElementById("header-container").style.boxShadow = "initial";
        }
    });
}

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 50) {
        document.getElementById("scroll-to-top-phone").style.height = "auto";
        document.getElementById("scroll-to-top-phone").style.opacity = "1";
        document.getElementById("scroll-to-top").style.right = "35px";
        document.getElementById("scroll-to-top").style.opacity = "1";
    } else {
        document.getElementById("scroll-to-top-phone").style.height = "0";
        document.getElementById("scroll-to-top-phone").style.opacity = "0";
        document.getElementById("scroll-to-top").style.right = "-40vw";
        document.getElementById("scroll-to-top").style.opacity = "0";
    }
});

function openMenu() {
    document.getElementById("menu-screen-phone").style.width = "100%";
}

function closeMenu() {
    document.getElementById("menu-screen-phone").style.width = "0";
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}