let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];
console.log(campos)


// let tbody = document.querySelector('[data-js="tbody"]');
// let btn_apagar = document.querySelector('[data-js="btn-apagar"]');
// let btn_importar = document.querySelector('[data-js="btn-importar"]');


// let btn_incluir = document.querySelector('[data-js="btn-incluir"]');
let $formulario = document.querySelector('.form')
$formulario.addEventListener('submit', event => {
    event.preventDefault();
    
    let row = document.createElement('tr');
    campos.forEach((campo, index) => {
        let celula = document.createElement('td');

        index == 2 ? celula.textContent = `R$ ${campo.value}` : celula.textContent = campo.value;

        row.appendChild(celula);
    })
    let volume = document.createElement('td');
    volume.textContent = campos[2].value * campos[1].value;
    row.appendChild(volume);

    tbody.appendChild(row);
})
