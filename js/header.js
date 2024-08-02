if (document.location.pathname === "/aboutme/") {
    window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("header-container").style.backgroundColor = "rgba(255, 250, 240, 0.75)";
        document.getElementById("header-container").style.boxShadow = "0 0 20px grey";
        document.getElementById("header-container").style.webkitBoxShadow = "0 0 20px grey";
    });
} else {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 50) {
            document.getElementById("header-container").style.backgroundColor = "rgba(255, 250, 240, 0.75)";
            document.getElementById("header-container").style.boxShadow = "0 0 20px grey";
            document.getElementById("header-container").style.webkitBoxShadow = "0 0 20px grey";
        } else {
            document.getElementById("header-container").style.backgroundColor = "floralwhite";
            document.getElementById("header-container").style.boxShadow = "initial";
            document.getElementById("header-container").style.webkitBoxShadow = "initial";
        }
    });
}