// Load Content HTML //
const xhttpHeader = new XMLHttpRequest();
xhttpHeader.onload = function () {
    document.getElementById("content").innerHTML = this.responseText;
}
xhttpHeader.open("GET", "./content.html");
xhttpHeader.send();