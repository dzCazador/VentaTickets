// Definir la clase Evento
class Evento {
    constructor(nombre, descripcion, precio,imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio,
        this.imagen = imagen;
    }
    mostrarHTML(){
        return "";
    };
}

// Definir la clase Recital que hereda de Evento
class Recital extends Evento {
    constructor(nombre, descripcion, precio, imagen,banda) {
        super(nombre, descripcion, precio,imagen);
        this.banda = banda;
    }
    mostrarHTML(){
        return "<div class='card'>" +
                "<figure><img src='images/"+this.imagen+"'></figure>" +
                "<div class='contenido-card'>"+
                "<h3>"+this.nombre+"</h3>"+
                "<p>"+this.descripcion+"</p>"+
                "<p>Precio: Desde $"+this.precio+"</p>"+
                "<p>Banda: "+this.banda+"</p>"+
                "</div></div>"
    }
}
class Cine extends Evento {
    constructor(nombre, descripcion, precio, imagen,duracion) {
        super(nombre, descripcion, precio,imagen);
        this.duracion = duracion;
    }
    mostrarHTML(){
        return "<div class='card'>" +
                "<figure><img src='images/"+this.imagen+"'></figure>" +
                "<div class='contenido-card'>"+
                "<h3>"+this.nombre+"</h3>"+
                "<p>"+this.descripcion+"</p>"+
                "<p>Precio: Desde $"+this.precio+"</p>"+
                "<p>Duracion: "+this.duracion+"</p>"+
                "</div></div>"
    }
}
class Teatro extends Evento {
    constructor(nombre, descripcion, precio, imagen,autor) {
        super(nombre, descripcion, precio,imagen);
        this.autor = autor;
    }
    mostrarHTML(){
        return "<div class='card'>" +
                "<figure><img src='images/"+this.imagen+"'></figure>" +
                "<div class='contenido-card'>"+
                "<h3>"+this.nombre+"</h3>"+
                "<p>"+this.descripcion+"</p>"+
                "<p>Precio: Desde $"+this.precio+"</p>"+
                "<p>Autor: "+this.autor+"</p>"+
                "</div></div>"
    }
}
