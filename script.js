// document.getElementById('recordButton').addEventListener('click', function() {
//     var button = document.getElementById('recordButton');
//     var buttonText = document.getElementById('buttonText');
//     var recordingIndicator = document.getElementById('recordingIndicator');

//     if (buttonText.textContent === 'Grabar') {
//         buttonText.textContent = 'Parar';
//         button.classList.add('recording');
//         recordingIndicator.style.display = 'flex';
//         // Aquí inicia la grabación
//     } else {
//         buttonText.textContent = 'Grabar';
//         button.classList.remove('recording');
//         recordingIndicator.style.display = 'none';
//         // Aquí para la grabación
//     }
// });

// document.addEventListener('mousemove', function(e) {
//     const x = e.clientX;
//     const y = e.clientY;
//     const size = 100; // Tamaño del rango alrededor del puntero

//     document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) ${size}px)`;
// });

document.addEventListener("DOMContentLoaded", function() {
    const text = "El Futuro del Aprendizaje Personalizado";
    let i = 0;
    const speed = 80;
    const delay = 3000; // Tiempo de espera antes de borrar el texto (en milisegundos)
    const h1 = document.getElementById("hero_title_id");
  
    function typeWriter() {
      if (i < text.length) {
        h1.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(eraseText, delay);
      }
    }

    function eraseText() {
      if (i >= 0) {
        h1.innerHTML = text.substring(0, i);
        i--;
        setTimeout(eraseText, speed);
      } else {
        setTimeout(typeWriter, speed);
      }
    }

    h1.innerHTML = ""; // Limpiar el contenido antes de comenzar a escribir
    typeWriter();
});
