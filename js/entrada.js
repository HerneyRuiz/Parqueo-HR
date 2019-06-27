'use strict'

class Entrada {

    constructor(fecha, placa) {
        this.fecha = fecha;
        this.placa = placa;
    } // fin metodo constructor

}; // fin clase Producto


class UI {

    aggEntrada(entrada) {
        const entradaList = document.getElementById('entrada-list');

        const elementoEntrada = document.createElement('div');

        elementoEntrada.innerHTML =
            `
            <div class="card text-center mb-4">

                <div class="card-body">
                    
                    <strong> Fecha: ${entrada.fecha} </strong>
                    <strong> Placa: ${entrada.placa} </strong>
                    <a href="#" class="btn btn-danger" name="btnEliminar">Eliminar</a>
                </div>

            </div>
        `;

        entradaList.appendChild(elementoEntrada);
    } // fin metodo addEntrada

    resetearForm() {
        document.getElementById('entrada-form').reset();
    } // fin metodo resetearForm

    eliminarEntrada(elemento) {
        if (elemento.name === 'btnEliminar') {
            elemento.parentElement.parentElement.parentElement.remove();
            this.mensaje('Entrada eliminada exitosamente', 'danger');
        }
    } // fin metodo eliminarEntrada

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

document.getElementById('entrada-form').addEventListener('submit', function (e) {

    const fechaEntrada = document.getElementById('fechaEntrada').value;
    const placaEntrada = document.getElementById('placaEntrada').value;

    const entrada = new Entrada(fechaEntrada, placaEntrada);

    const uiEntrada = new UI();

    if (fechaEntrada === '' || placaEntrada === '') {
        return uiVehiculo.mensaje('Por favor digitar todos los campos', 'danger');
    }

    uiEntrada.aggEntrada(entrada);
    uiEntrada.resetearForm();
    uiEntrada.mensaje('Entrada Agregado exitosamente', 'success');

    e.preventDefault();
});

document.getElementById('entrada-list').addEventListener('click', function (e) {

    const uiEntrada = new UI();

    uiEntrada.eliminarEntrada(e.target);
});