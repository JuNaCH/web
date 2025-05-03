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
window.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalList = document.getElementById('modalList');
  const closeModal = document.getElementById('closeModal');

  const trabajoDetalles = {
    'Electricidad': [
      'Cambio de bastidores',
      'Cambio de cableado interno',
      'Cambio de caja de control',
      'Cambio de tablero',
      'Arreglo de disyuntores'
    ],
    'Albañileria': [
      'Revoque fino y grueso',
      'Colocación de ladrillos',
      'Reparaciones de muros',
      'Nivelación de superficies',
      'Construcción de medianeras'
    ],
    'Plomeria': [
      'Reparación de caños rotos',
      'Cambio de grifería',
      'Desobstrucción de cañerías',
      'Instalación de sanitarios',
      'Detección de pérdidas'
    ],
    'Pintura': [
      'Pintura interior y exterior',
      'Preparación de superficies',
      'Aplicación de látex y esmaltes',
      'Reparación de humedad',
      'Pintura en altura y fachadas'
    ],
    'Reparaciones, armado de muebles': [
      'Armado de muebles',
      'Colocación de estantes',
      'Reparación de puertas y cajones',
      'Ajustes de cerraduras',
      'Fijaciones varias'
    ],
    'Arreglos de gas': [
      'Revisión de cañerías',
      'Instalación de calefactores',
      'Sellado de pérdidas',
      'Pruebas de hermeticidad',
      'Conexión de termotanques'
    ],
    'Reparaciones varias del hogar': [
      'Mantenimiento general',
      'Filtraciones y humedad',
      'Colocación de artefactos',
      'Ajustes de aberturas',
      'Trabajos chicos a domicilio'
    ],
    'Heladeras, lavacarropas, secarropas etc': [
      'Diagnóstico y reparación de fallas',
      'Reemplazo de piezas',
      'Mantenimiento preventivo',
      'Conexión segura de artefactos',
      'Servicios a domicilio'
    ]
  };

  closeModal.addEventListener('click', function(e) {
    e.stopImmediatePropagation(); // Detiene todos los eventos
    modalOverlay.style.display = 'none';
  });
  
  modalOverlay.addEventListener('click', function(e) {
    // Cerrar solo si se hace clic directamente en el overlay
    // y no en sus hijos (incluyendo el modal-content)
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  }, true); // Usamos capture phase para mayor seguridad

  document.querySelectorAll('.trabajo-container .box h2').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      const titulo = el.textContent.trim();
      modalTitle.textContent = titulo;
      modalList.innerHTML = '';

      const detalles = trabajoDetalles[titulo] || ['Información no disponible.'];

      detalles.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalList.appendChild(li);
      });

      modalOverlay.style.display = 'flex';
    });
  });
});


//SOBRE NOSOTROS BOTON

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const extraContent = document.getElementById("extra-content");

  if (toggleBtn && extraContent) {
    toggleBtn.addEventListener("click", function () {
      extraContent.classList.toggle("expanded");
      toggleBtn.classList.toggle("expanded");

      if (extraContent.classList.contains("expanded")) {
        toggleBtn.innerHTML = 'Mostrar menos <i class="bx bx-chevron-up"></i>';
      } else {
        toggleBtn.innerHTML = 'Leer más <i class="bx bx-chevron-down"></i>';
      }
    });
  }
});


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

