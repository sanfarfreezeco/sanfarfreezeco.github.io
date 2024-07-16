// Load Header & Footer External HTML //
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