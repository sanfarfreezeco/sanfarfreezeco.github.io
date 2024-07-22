// Load Header HTML //
let headerUrl;
switch (document.location.pathname) {
    case "/":
        headerUrl = "/headerLeft_index.html";
        break;
    case "/aboutme/":
        headerUrl = "/headerLeft_aboutme.html";
        break;
    default:
        headerUrl = "/headerLeft.html";
}

const xhttpHeaderLeft = new XMLHttpRequest();
xhttpHeaderLeft.onload = function () {
    document.getElementById("container-left").innerHTML = this.responseText;
}
xhttpHeaderLeft.open("GET", headerUrl);
xhttpHeaderLeft.send();

const xhttpHeaderRight = new XMLHttpRequest();
xhttpHeaderRight.onload = function () {
    document.getElementById("container-right").innerHTML = this.responseText;
}
xhttpHeaderRight.open("GET", "/headerRight.html");
xhttpHeaderRight.send();

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