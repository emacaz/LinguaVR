
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
  
  // document.getElementById("myForm").submit();
}

document.getElementById("form_id").addEventListener("submit", function(event) {
    event.preventDefault();

    const API = 'https://5zgbdl1m7g.execute-api.sa-east-1.amazonaws.com/save_email';
    
    const email = document.querySelector("input[name='email']").value.toLowerCase().replace(/\s/g, '');
    const submitBtn = document.getElementById('submitBtn');
    const responseMessage = document.getElementById("responseMessage");
    
    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'not-allowed';
    submitBtn.style.backgroundColor = '#ccc';

    document.querySelector("input[name='email']").value = "";
    grecaptcha.reset();

    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, token: grecaptcha.getResponse() })
    })
    .then(response => response.json())
    .then(data => {
      responseMessage.textContent = data.body;
      document.getElementById("confirmationModal").style.display = "block";
      submitBtn.textContent = "Enviar";
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