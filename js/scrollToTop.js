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

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}