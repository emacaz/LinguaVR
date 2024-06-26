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


function recaptchaCallback(token) {
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = false;
  submitBtn.style.cursor = 'pointer';
  submitBtn.style.backgroundColor = '#1e3745';
  // Opcional: Puedes enviar el formulario automáticamente si lo deseas
  // document.getElementById("myForm").submit();
}

document.getElementById("form_id").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario para fines de demostración
    // Aquí puedes agregar el código para enviar el formulario a tu servidor
    // Si el envío del formulario es exitoso, muestra el mensaje de confirmación
    const email = document.querySelector("input[name='email']").value.toLowerCase().replace(/\s/g, '');
    const API = 'https://5zgbdl1m7g.execute-api.sa-east-1.amazonaws.com/save_email';
    
    console.log(email);
    console.log("Correo enviado...");
    document.getElementById("confirmationModal").style.display = "block";
    document.querySelector("input[name='email']").value = ""; // Limpiar el campo de correo
    grecaptcha.reset(); // Reiniciar reCAPTCHA
    
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'not-allowed';
    submitBtn.style.backgroundColor = '#ccc';

    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Sucess1:', data);
      alert(data);
    })
    .catch((error) => {
      console.error('Error', error);
    });
});

document.getElementById("closeModal").onclick = function() {
    document.getElementById("confirmationModal").style.display = "none";
};

document.getElementById("acceptBtn").onclick = function() {
    document.getElementById("confirmationModal").style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById("confirmationModal")) {
        document.getElementById("confirmationModal").style.display = "none";
    }
};

// document.getElementById('form_id').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const recaptchaResponse = grecaptcha.getResponse();
    
//     fetch('https://baodlvjrsd.execute-api.sa-east-1.amazonaws.com/test', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: email, recaptchaResponse: recaptchaResponse }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }); 