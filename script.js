document.getElementById('recordButton').addEventListener('click', function() {
    var button = document.getElementById('recordButton');
    var buttonText = document.getElementById('buttonText');
    var recordingIndicator = document.getElementById('recordingIndicator');

    if (buttonText.textContent === 'Grabar') {
        buttonText.textContent = 'Parar';
        button.classList.add('recording');
        recordingIndicator.style.display = 'flex';
        // Aquí inicia la grabación
    } else {
        buttonText.textContent = 'Grabar';
        button.classList.remove('recording');
        recordingIndicator.style.display = 'none';
        // Aquí para la grabación
    }
});
