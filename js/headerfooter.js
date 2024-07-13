// Load Header & Footer External HTML //
window.onload = function () {
    const xhttpHeader = new XMLHttpRequest();
    xhttpHeader.onload = function () {
        document.getElementById("header").innerHTML = this.responseText;
    }
    xhttpHeader.open("GET", "/header.html");
    xhttpHeader.send();

    const xhttpFooter = new XMLHttpRequest();
    xhttpFooter.onload = function () {
        document.getElementById("footer").innerHTML = this.responseText;
    }
    xhttpFooter.open("GET", "/footer.html");
    xhttpFooter.send();
}

// Underline Page on Header //

if (window.location.pathname === "/") {
    document.getElementById("work-u").style.opacity = "1";
} else if (window.location.pathname === "/aboutme") {
    document.getElementById("aboutme-u").style.opacity = "1";
}