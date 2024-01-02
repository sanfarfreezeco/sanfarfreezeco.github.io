function select(category) {
    var items = document.querySelectorAll('.img-grid3');
    items.forEach(function (item) {
        if (category === 'semua' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function selAll() {
    document.getElementById("selAll").className = "button active";
    document.getElementById("selCosplay").className = "button";
    document.getElementById("selObjek").className = "button";
    document.getElementById("selPemandangan").className = "button";
    document.getElementById("selPotret").className = "button";
}

function selCosplay() {
    document.getElementById("selAll").className = "button";
    document.getElementById("selCosplay").className = "button active";
    document.getElementById("selObjek").className = "button";
    document.getElementById("selPemandangan").className = "button";
    document.getElementById("selPotret").className = "button";
}

function selObjek() {
    document.getElementById("selAll").className = "button";
    document.getElementById("selCosplay").className = "button";
    document.getElementById("selObjek").className = "button active";
    document.getElementById("selPemandangan").className = "button";
    document.getElementById("selPotret").className = "button";
}

function selPemandangan() {
    document.getElementById("selAll").className = "button";
    document.getElementById("selCosplay").className = "button";
    document.getElementById("selObjek").className = "button";
    document.getElementById("selPemandangan").className = "button active";
    document.getElementById("selPotret").className = "button";
}

function selPotret() {
    document.getElementById("selAll").className = "button";
    document.getElementById("selCosplay").className = "button";
    document.getElementById("selObjek").className = "button";
    document.getElementById("selPemandangan").className = "button";
    document.getElementById("selPotret").className = "button active";
}