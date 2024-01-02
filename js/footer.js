/*
$(function () {
    $("#footer").load("/footer.html");
});
 */

window.onload = function() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("footer").innerHTML = this.responseText;
    }
    xhttp.open("GET",  "/footer.html");
    xhttp.send();

    var rmWm = document.querySelector('[style="z-index:9999999"]');
    if (rmWm) {
        rmWm.style.display = 'none';
    }
};