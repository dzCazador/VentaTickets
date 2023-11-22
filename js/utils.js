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

    function loginUsuario(){
        event.preventDefault();
        const nombreUsuario = document.getElementById("login").value;
        const contraseña = document.getElementById("password").value;

        const usuarioEncontrado = listaUsuarios.find((usuario) => usuario.nombreUsuario.toUpperCase() === nombreUsuario.toUpperCase());

        if (usuarioEncontrado) {
            if (usuarioEncontrado.contraseña === contraseña) {
                //guardarUsuarioLogueado
                localStorage.setItem("usuarioLogueado", usuarioEncontrado.nombreUsuario);
                location.reload();
            } else {
                alert("Contraseña incorrecta");
            }
        } else {
            alert("Usuario no encontrado");
        }
    }


    function ComprarTicket(idEvento){
        eventoSeleccionado =eventos.find((evento) => evento.id==idEvento);
        document.getElementById("evento").value=eventoSeleccionado.nombre;
        document.getElementById("cantidadEntradas").value=1;
        document.getElementById("precioUnitario").value='Precio: '+ eventoSeleccionado.precio;
        document.getElementById("precioEventoHidden").value=eventoSeleccionado.precio;
        document.getElementById("precioTotal").value='Total: '+ eventoSeleccionado.precio;;

    }

    function ModificaCantidad(){
        var total =  document.getElementById("precioEventoHidden").value *document.getElementById("cantidadEntradas").value;
        document.getElementById("precioTotal").value='Total: '+ total;;
    }

    function FinalizarCompra(idEvento){
        eventoSeleccionado =eventos.find((evento) => evento.id==idEvento);
        document.getElementById("evento").value=eventoSeleccionado.nombre;
        document.getElementById("cantidadEntradas").value=1;
        document.getElementById("precioUnitario").value='Precio: '+ eventoSeleccionado.precio;
        document.getElementById("precioEventoHidden").value=eventoSeleccionado.precio;
        document.getElementById("precioTotal").value='Total: '+ eventoSeleccionado.precio;;

    }


    function crearModal() {
        // Crea el elemento modal
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.setAttribute("id", "ModalCompra");
        const dialog = document.createElement("div");
        dialog.classList.add("modal-dialog");
        dialog.classList.add("modal-dialog-centered");
      
        dialog.innerHTML = "<div class='modal-content'>"+
                           "<div class='modal-header'>"+
                           "<h4 class='modal-title'>Finalizar la Compra</h4>"+
                           "</div>"+
                           "<div class='modal-body'>"+
                           "<input type='hidden' id='precioEventoHidden'>"+
                           "<input type='text' id='evento' class='fadeIn first' name='evento' placeholder='evento' readonly>"+
                           "<input type='number' min='1' id='cantidadEntradas' class='fadeIn first' name='cantidadEntradas' placeholder='cantidadEntradas' onchange='ModificaCantidad()'><br>"+
                           "<input type='text' min='1' id='precioUnitario' class='fadeIn first' name='cantidadEntradas' placeholder='cantidadEntradas' text='Precio:' readonly>"+
                           "<input type='text' min='1' id='precioTotal' class='fadeIn first' name='cantidadEntradas' placeholder='cantidadEntradas' value='Total:' readonly>"+
                           "</div>"+
                           "<div class='modal-footer'>"+
                           "<button type='button' class='btn btn-secondary' data-dismiss='modal' onclick='cerrarModal()'>Cancelar</button>"+
                           "<button type='button' class='btn btn-primary' data-bs-target='#ModalFinalizar' data-bs-toggle='modal'>Confirmar</button>"+
                           "</div>"+
                           "</div>";
        modal.appendChild(dialog);
        // Agrega el modal al DOM
        document.body.appendChild(modal);
      }

      function crearModaFinalizar() {
        // Crea el elemento modal
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.setAttribute("id", "ModalFinalizar");
        const dialog = document.createElement("div");
        dialog.classList.add("modal-dialog");
        dialog.classList.add("modal-dialog-centered");
      
        dialog.innerHTML = "<div class='modal-content'>"+
                           "<div class='modal-header'>"+
                           "<h4 class='modal-title'>Compra Realizada</h4>"+
                           "</div>"+
                           "<div class='modal-body'>"+
                           "La compra de la Entrada para RECITAL se ha realizado con exito. Se le ha enviado via PDF a su mail MAIL@MAIL>"+
                           "</div>"+
                           "<div class='modal-footer'>"+
                           "<button type='submit' class='btn btn-primary' data-bs-dismiss='modal'>Aceptar</button>"+
                           "</div>"+
                           "</div>";
        modal.appendChild(dialog);
        // Agrega el modal al DOM
        document.body.appendChild(modal);
      }

      function cerrarModal() {
        // Cierra el modal
        const modal = document.getElementById("ModalCompra");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
       const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) {
            document.body.removeChild(backdrop);
        }
        location.reload();
    }
      
      document.addEventListener("DOMContentLoaded", function () {
        crearModal();
        crearModaFinalizar();
        cargarEventos();
      });
