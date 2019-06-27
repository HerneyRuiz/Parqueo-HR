'use strict'

class Vehiculo {

    constructor(marca, placa, ano){
        this.marca = marca;
        this.placa = placa;
        this.ano = ano;
    } // fin metodo constructor

}; // fin clase Producto


class UI {

    aggVehiculo(vehiculo){
        const vehiculoList = document.getElementById('vehiculo-list');

        const elementoVehiculo = document.createElement('div');

        elementoVehiculo.innerHTML =
        `
            <div class="card text-center mb-4">

                <div class="card-body">
                    
                    <strong> Marca: ${vehiculo.marca} </strong>
                    <strong> Placa: ${vehiculo.placa} </strong>
                    <strong> Año: ${vehiculo.ano} </strong>
                    <a href="#" class="btn btn-danger" name="btnEliminar">Eliminar</a>
                </div>

            </div>
        `;

        vehiculoList.appendChild(elementoVehiculo);
    } // fin metodo aggProducto

    resetearForm(){
        document.getElementById('vehiculo-form').reset();
    } // fin metodo resetearForm

    eliminarVehiculo(elemento){
        if(elemento.name === 'btnEliminar'){
            elemento.parentElement.parentElement.parentElement.remove();
            this.mensaje('Vehiculo eliminado exitosamente', 'danger');
        }
    } // fin metodo eliminarProducto

    mensaje(mensaje, cssClass){
        const divMen = document.createElement('div');
        divMen.className = `alert alert-${cssClass} mt-2`;
        divMen.appendChild(document.createTextNode(mensaje));
        // mostrando en el Dom
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(divMen , app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    } // fin metodo mensaje

} // fin clase UI


// DOM Eventos

document.getElementById('vehiculo-form').addEventListener('submit', function (e){

    const marcaVehiculo = document.getElementById('marcaVehiculo').value;
    const placaVehiculo = document.getElementById('placaVehiculo').value;
    const anoVehiculo = document.getElementById('anoVehiculo').value;

    const vehiculo = new Vehiculo(marcaVehiculo , placaVehiculo, anoVehiculo);  

    const uiVehiculo = new UI();
    
    if (marcaVehiculo === '' || placaVehiculo === '' || anoVehiculo === ''){
        return uiVehiculo.mensaje('Por favor digitar todos los campos', 'danger');
    }

    uiVehiculo.aggVehiculo(vehiculo);
    uiVehiculo.resetearForm();
    uiVehiculo.mensaje('Vehiculo Agregado exitosamente', 'success');

    e.preventDefault();
});

document.getElementById('vehiculo-list').addEventListener('click', function(e){
    
    const uiVehiculo = new UI();

    uiVehiculo.eliminarVehiculo(e.target);
});

