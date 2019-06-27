var contenido = document.querySelector('#contenido')

function traer() {
    fetch('../json/vehiculo.json')
        .then(res => res.json())
        .then(datos => {
            // console.log(datos)
            tabla(datos)
        })
}

function tabla(datos) {
    // console.log(datos)
    contenido.innerHTML = ''

    for(let valor of datos){
        // console.log(valor.nombre)
        contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.id }</th>
            <td>${ valor.Marca }</td>
            <td>${ valor.Placa }</td>
            <td>${ valor.Año}</td>
        </tr>
        
        `
    }
}