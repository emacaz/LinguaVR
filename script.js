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

document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const size = 100; // Tamaño del rango alrededor del puntero

    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) ${size}px)`;
});