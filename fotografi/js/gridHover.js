document.getElementById("header").style.backgroundColor = gr1;
var fotoGrid = document.getElementById("foto-grid");

function bgnormal() {
    document.getElementById("header").style.backgroundColor = "floralwhite";
    document.getElementById("foto-grid").style.backgroundColor = "floralwhite";
    document.getElementById("grid-1").style.opacity = "1";
    document.getElementById("grid-2").style.opacity = "1";
    document.getElementById("grid-3").style.opacity = "1";
    document.getElementById("grid-4").style.opacity = "1";
    document.getElementById("header").style.transitionDuration = "2s";
    document.getElementById("foto-grid").style.transitionDuration = "2s";
    document.getElementById("grid-1").style.transitionDuration = "0.3s";
    document.getElementById("grid-2").style.transitionDuration = "0.3s";
    document.getElementById("grid-3").style.transitionDuration = "0.3s";
    document.getElementById("grid-4").style.transitionDuration = "0.3s";
}

function grid1() {
    gr1 = "#f8af94"
    document.getElementById("foto-grid").style.backgroundColor = "#f8af94";
    document.getElementById("grid-2").style.opacity = "0.4";
    document.getElementById("grid-3").style.opacity = "0.4";
    document.getElementById("grid-4").style.opacity = "0.4";
    document.getElementById("header").style.transitionDuration = "2s";
    document.getElementById("foto-grid").style.transitionDuration = "2s";
    document.getElementById("grid-2").style.transitionDuration = "0.3s";
    document.getElementById("grid-3").style.transitionDuration = "0.3s";
    document.getElementById("grid-4").style.transitionDuration = "0.3s";
}

function grid2() {
    document.getElementById("header").style.backgroundColor = "#b8e0f8";
    document.getElementById("foto-grid").style.backgroundColor = "#b8e0f8";
    document.getElementById("grid-1").style.opacity = "0.4";
    document.getElementById("grid-3").style.opacity = "0.4";
    document.getElementById("grid-4").style.opacity = "0.4";
    document.getElementById("header").style.transitionDuration = "2s";
    document.getElementById("foto-grid").style.transitionDuration = "2s";
    document.getElementById("grid-1").style.transitionDuration = "0.3s";
    document.getElementById("grid-3").style.transitionDuration = "0.3s";
    document.getElementById("grid-4").style.transitionDuration = "0.3s";
}

function grid3() {
    document.getElementById("header").style.backgroundColor = "#afb99b";
    document.getElementById("foto-grid").style.backgroundColor = "#afb99b";
    document.getElementById("grid-1").style.opacity = "0.4";
    document.getElementById("grid-2").style.opacity = "0.4";
    document.getElementById("grid-4").style.opacity = "0.4";
    document.getElementById("header").style.transitionDuration = "2s";
    document.getElementById("foto-grid").style.transitionDuration = "2s";
    document.getElementById("grid-1").style.transitionDuration = "0.3s";
    document.getElementById("grid-2").style.transitionDuration = "0.3s";
    document.getElementById("grid-4").style.transitionDuration = "0.3s";
}

function grid4() {
    document.getElementById("header").style.backgroundColor = "#e5b69a";
    document.getElementById("foto-grid").style.backgroundColor = "#e5b69a";
    document.getElementById("grid-1").style.opacity = "0.4";
    document.getElementById("grid-2").style.opacity = "0.4";
    document.getElementById("grid-3").style.opacity = "0.4";
    document.getElementById("header").style.transitionDuration = "2s";
    document.getElementById("foto-grid").style.transitionDuration = "2s";
    document.getElementById("grid-1").style.transitionDuration = "0.3s";
    document.getElementById("grid-2").style.transitionDuration = "0.3s";
    document.getElementById("grid-3").style.transitionDuration = "0.3s";
}
