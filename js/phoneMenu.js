function preventScrollingiOS(e) {
    e.preventDefault();
}

function openMenu() {
    document.getElementById("menu-screen-phone").style.width = "100%";
    document.body.style.overflowY = "hidden";
    document.addEventListener('touchmove', preventScrollingiOS, { passive: false });
}

function closeMenu() {
    document.getElementById("menu-screen-phone").style.width = "0";
    document.body.style.overflowY = "initial";
    document.removeEventListener('touchmove', preventScrollingiOS, { passive: false });
}