     // Arreglo de objetos para almacenar los Eventos
     const eventos = [];
     // Función para cargar los datos del archivo JSON y crear objetos Recital
     function cargarEventos() {
         fetch('eventos.json')
             .then(response => response.json())
             .then(data => {
                 data.forEach(eventoData => {
                     if (eventoData.tipo === 'Recital') {
                         const recital = new Recital(eventoData.nombre, eventoData.descripcion, eventoData.precio, eventoData.imagen, eventoData.banda);
                         eventos.push(recital);
                     } else if (eventoData.tipo === 'Cine') {
                         const cine = new Cine(eventoData.nombre, eventoData.descripcion, eventoData.precio, eventoData.imagen, eventoData.duracion);
                         eventos.push(cine);
                     } else if (eventoData.tipo === 'Teatro') {
                         const teatro = new Teatro(eventoData.nombre, eventoData.descripcion, eventoData.precio, eventoData.imagen, eventoData.autor);
                         eventos.push(teatro);
                     }
                 });

             })
             .catch(error => console.error('Error al cargar el archivo JSON:', error));
     }   

    // Función para mostrar los recitales en pantalla
    function mostrarEvento(tipo) {
        const recitalesContainer = document.getElementById('recitales-container');
        const brElement = document.createElement('br');
        eventos.forEach(evento => {
            if (evento.constructor.name===tipo) {
                const recitalElement = document.createElement('div');
                evento.className = 'container-card';
                
                recitalElement.innerHTML = evento.mostrarHTML();
                recitalesContainer.appendChild(recitalElement);
                
                
                

            }            

        });
    }

    cargarEventos()