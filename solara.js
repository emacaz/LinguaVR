document.addEventListener("DOMContentLoaded", function() {
    fetch('solara.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('evolution_container_id');
            
            data.forEach(item => {
                const section = document.createElement('section');
                section.className = 'evolution';
                section.id = `version-${item.version.replace('.', '-')}`;
                
                section.innerHTML = `
                    <h2>Versión ${item.version}</h2>
                    <p><strong>Fecha:</strong> ${item.fecha}</p>
                    <p><strong>Descripción:</strong> ${item.descripcion}</p>
                    <div class="media">
                        <img src="${item.imagen}" alt="Versión ${item.version}">
                        <iframe src="${item.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="notes">
                        <p>${item.notas}</p>
                    </div>
                `;
                
                container.appendChild(section);
            });
        })
        .catch(error => console.error('Error al cargar los datos de evolución:', error));
});
