function Automovil(marca,modelo,color,anio,titular){
    this.marca = marca,
    this.modelo = modelo,
    this.color = color,
    this.anio = anio,
    this.titular = titular
}

let automovil1 = new Automovil("Ford","Mondeo","Verde",2000,"John Doe")
let automovil2 = new Automovil("Citröen","Xsara","Gris",1997,"Ewan Mcgregor")
let automovil3 = new Automovil("Citröen","Cactus","Azul",2017,"Charles Brown")
let automovil4 = new Automovil("Citröen","C3","Azul",2003,"Melanie Carlston")

let instancias = [automovil1,automovil2,automovil3,automovil4]

//  recibe un nuevo dueño por parametro y actualiza la propiedad titular

Automovil.prototype.venderAutomovil = function(){
    let nuevoTitular = document.getElementById("cambiotitular").value;
    let modelo = document.getElementById("modelocambio").value;

    for (let auto of instancias) {
        if (auto.modelo === modelo) {
            auto.titular = nuevoTitular;
        }
    }    
}

/* retonar el resultado de concatenar las propiedades 
del automovil con el formato: Marca - Modelo - Año - Titular */

Automovil.prototype.verAuto = function(){
    let mensaje = this.marca + " - " + this.modelo + " - " + this.anio + " - " + this.titular
    return mensaje
}

Automovil.prototype.encender = function(){
    alert("El automovil esta en marcha")
}

function informacionAutomovil() {
    let listaRegistros = document.getElementById("listaRegistros");
    
    for (let coche of instancias) {
        let elementoLi = document.createElement("li");
        elementoLi.textContent = coche.verAuto();
        listaRegistros.appendChild(elementoLi);
    }
}




