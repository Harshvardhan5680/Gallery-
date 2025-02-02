// Open lightbox with clicked image
function openLightbox(imgElement) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

// Close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}