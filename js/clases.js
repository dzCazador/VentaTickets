// Definir la clase Evento
class Evento {
    static id_Evento = 1;
    #id;#nombre; #descripcion; #precio; #imagen;
    constructor(nombre, descripcion, precio,imagen) {
        this.#id=Evento.id_Evento++;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#precio = precio,
        this.#imagen = imagen;
    }
    get id() {return this.#id}
    get nombre() {return this.#nombre}
    get descripcion() {return this.#descripcion}
    get precio() {return this.#precio}
    get imagen() {return this.#imagen}
    

    mostrarHTML(){
        return "";
    };
}

// Definir la clase Recital que hereda de Evento
class Recital extends Evento {
    #banda;
    constructor(nombre, descripcion, precio, imagen,banda) {
        super(nombre, descripcion, precio,imagen);
        this.#banda = banda;
    }
    mostrarHTML(){
        return "<div class='card' >" +
                "<figure><img src='images/"+this.imagen+"'></figure>" +
                "<div class='contenido-card'>"+
                "<h3>"+this.nombre+"</h3>"+
                "<p>"+this.descripcion+"</p>"+
                "<p>Precio: Desde $"+this.precio+"</p>"+
                "<p>Banda: "+this.#banda+"</p>"+
                "<button type='button' class='btn btn-danger' data-bs-toggle='modal' data-bs-target='#ModalCompra' onclick='ComprarTicket("+this.id+")'>Comprar</button>"+
                "</div></div>"
    }
}
class Cine extends Evento {
    #duracion;
    constructor(nombre, descripcion, precio, imagen,duracion) {
        super(nombre, descripcion, precio,imagen);
        this.#duracion = duracion;
    }
    mostrarHTML(){
        return "<div class='card'>" +
                "<figure><img src='images/"+this.imagen+"'></figure>" +
                "<div class='contenido-card'>"+
                "<h3>"+this.nombre+"</h3>"+
                "<p>"+this.descripcion+"</p>"+
                "<p>Precio: Desde $"+this.precio+"</p>"+
                "<p>Duracion: "+this.#duracion+"</p>"+
                "<button type='button' class='btn btn-danger' data-bs-toggle='modal' data-bs-target='#ModalCompra' onclick='ComprarTicket("+this.id+")'>Comprar</button>"+
                "</div></div>"
    }
}
class Teatro extends Evento {
    #autor;
    constructor(nombre, descripcion, precio, imagen,autor) {
        super(nombre, descripcion, precio,imagen);
        this.#autor = autor;
    }
    mostrarHTML(){
        return "<div class='card'>" +
                "<figure><img src='images/"+this.imagen+"'></figure>" +
                "<div class='contenido-card'>"+
                "<h3>"+this.nombre+"</h3>"+
                "<p>"+this.descripcion+"</p>"+
                "<p>Precio: Desde $"+this.precio+"</p>"+
                "<p>Autor: "+this.#autor+"</p>"+
                "<button type='button' class='btn btn-danger' data-bs-toggle='modal' data-bs-target='#ModalCompra' onclick='ComprarTicket("+this.id+")'>Comprar</button>"+
                "</div></div>"
    }
}


class Persona {
    #nombre;
    #apellido;
    constructor(p_nombre, p_apellido) {
        this.#nombre = p_nombre;
        this.#apellido = p_apellido;
    }
    get nombreCompleto(){
        return this.#nombre + ' ' + this.#apellido;
    }
}

class Usuario extends Persona {
    #user;#password;#mail;
    constructor(p_nombre, p_apellido,p_user, p_password,p_mail) {
        super(p_nombre,p_apellido);
        this.#user = p_user;
        this.#password = p_password;
        this.#mail=p_mail;
    }

    get nombreUsuario() {
        return this.#user;
    }

    set nombreUsuario(nuevoNombre) {
        this.#user = nuevoNombre;
    }

    get contraseña() {
        return this.#password;
    }

    set contraseña(nuevaContraseña) {
        this.#password = nuevaContraseña;
    }
}