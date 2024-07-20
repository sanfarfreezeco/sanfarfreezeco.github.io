// Load Header HTML //
const xhttpHeader = new XMLHttpRequest();
xhttpHeader.onload = function () {
    document.getElementById("header").innerHTML = this.responseText;
}
xhttpHeader.open("GET", "/header.html");
xhttpHeader.send();

// Load Footer HTML //
const xhttpFooter = new XMLHttpRequest();
xhttpFooter.onload = function () {
    document.getElementById("footer").innerHTML = this.responseText;
}
xhttpFooter.open("GET", "/footer.html");
xhttpFooter.send();

// Load Content HTML //
const xhttpContent = new XMLHttpRequest();
xhttpContent.onload = function () {
    document.getElementById("content").innerHTML = this.responseText;
}
xhttpContent.open("GET", "./content.html");
xhttpContent.send();