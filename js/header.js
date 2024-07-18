// Underline Page on Header //
window.onload = function () {
    if (window.location.pathname === "/") {
        document.getElementById("work-u").style.opacity = "1";
    } else if (window.location.pathname === "/aboutme/") {
        document.getElementById("aboutme-u").style.opacity = "1";
    }
}