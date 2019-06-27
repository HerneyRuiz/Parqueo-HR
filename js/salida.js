'use strict'

class Salida {

    constructor(fecha, placa) {
        this.fecha = fecha;
        this.placa = placa;
    } // fin metodo constructor

}; // fin clase Producto


class UI {

    aggSalida(salida) {
        const salidaList = document.getElementById('salida-list');

        const elementoSalida = document.createElement('div');

        elementoSalida.innerHTML =
            `
            <div class="card text-center mb-4">

                <div class="card-body">
                    
                    <strong> Fecha: ${salida.fecha} </strong>
                    <strong> Placa: ${salida.placa} </strong>
                    <a href="#" class="btn btn-danger" name="btnEliminar">Eliminar</a>
                </div>

            </div>
        `;

        salidaList.appendChild(elementoSalida);
    } // fin metodo aggSalida

    resetearForm() {
        document.getElementById('salida-form').reset();
    } // fin metodo resetearForm

    eliminarSalida(elemento) {
        if (elemento.name === 'btnEliminar') {
            elemento.parentElement.parentElement.parentElement.remove();
            this.mensaje('Salida eliminada exitosamente', 'danger');
        }
    } // fin metodo eliminarSalida

    mensaje(mensaje, cssClass) {
        const divMen = document.createElement('div');
        divMen.className = `alert alert-${cssClass} mt-2`;
        divMen.appendChild(document.createTextNode(mensaje));
        // mostrando en el Dom
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(divMen, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    } // fin metodo mensaje

} // fin clase UI


// DOM Eventos

document.getElementById('salida-form').addEventListener('submit', function (e) {

    const fechaSalida = document.getElementById('fechaSalida').value;
    const placaSalida = document.getElementById('placaSalida').value;

    const salida = new Salida(fechaSalida, placaSalida);

    const uiSalida = new UI();

    if (fechaSalida === '' || placaSalida === '') {
        return uiVehiculo.mensaje('Por favor digitar todos los campos', 'danger');
    }

    uiSalida.aggSalida(salida);
    uiSalida.resetearForm();
    uiSalida.mensaje('Salida Agregado exitosamente', 'success');

    e.preventDefault();
});

document.getElementById('salida-list').addEventListener('click', function (e) {

    const uiSalida = new UI();

    uiSalida.eliminarSalida(e.target);
});