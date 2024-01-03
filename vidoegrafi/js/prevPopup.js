function popupShow() {
    document.getElementById('preview-bg').classList.toggle('prevbg-show');
    document.getElementById('preview').classList.toggle('prev-show');
}

function popupHide() {
    var prev = document.getElementById('preview');
    prev.classList.toggle('prev-show');
    prev.classList.toggle('prev-hide');
    document.getElementById('preview-bg').classList.toggle('prevbg-show');
    setTimeout(function () {
        prev.classList.toggle('prev-hide');
    }, 290);
}

function popupShow2(href) {
    var openin = document.getElementById('openin');
    if (
        href.id == 'https://www.youtube.com' &&
        href.id == 'https://youtube.com' &&
        href.id == 'https://www.youtu.be' &&
        href.id == 'https://youtu.be'
    ) {
        openin.contain = 'Open In Youtube';
        openin.href = href.id;
    } else if (
        href.id == 'https://www.behance.net'
    ) {
        openin.contain = 'Open In Behance';
        openin.href = href.id;
    }
    document.getElementById('preview-bg').classList.toggle('prevbg-show');
    document.getElementById('preview').classList.toggle('prev-show');
}