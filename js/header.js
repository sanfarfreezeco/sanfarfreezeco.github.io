window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 50) {
        document.getElementById("header-container").style.backgroundColor = "rgba(255, 250, 240, 0.75)"
        document.getElementById("header-container").style.boxShadow = "0 0 20px grey";
    } else {
        document.getElementById("header-container").style.backgroundColor = "floralwhite";
        document.getElementById("header-container").style.boxShadow = "initial";
    }
});