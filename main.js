let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// esconder el menu y la busqueda con el scroll
window.onscroll  = () => {
menu.classList.remove('active')
search.classList.remove('active')

}



// galeria de fotos 
let galeriaIndex = 0;
const galeriaTrack = document.getElementById("galeriaTrack");
const slideItems = galeriaTrack.querySelectorAll("img");
const slideWidth = slideItems[0].clientWidth;
const totalVisible = 3;

// mover 1 imagen por vez
function moveSlide(direction) {
  galeriaIndex += direction;

  // Si nos pasamos del total real, reiniciamos sin flash visual
  if (galeriaIndex >= slideItems.length - totalVisible) {
    galeriaIndex = 0;
    galeriaTrack.style.transition = 'none';
    galeriaTrack.style.transform = `translateX(0px)`;
    // Esperamos un "frame" antes de volver a animar
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        galeriaTrack.style.transition = 'transform 0.5s ease';
        galeriaIndex += direction;
        galeriaTrack.style.transform = `translateX(-${galeriaIndex * slideWidth}px)`;
      });
    });
    return;
  }

  // Movimiento normal
  galeriaTrack.style.transition = 'transform 0.5s ease';
  galeriaTrack.style.transform = `translateX(-${galeriaIndex * slideWidth}px)`;
}

// header
let header = document.querySelector('Header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});