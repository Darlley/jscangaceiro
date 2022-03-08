let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];
// console.log(campos);
campos[0].focus();

let $formulario = document.querySelector('.form');
$formulario.addEventListener('submit', event => {
    event.preventDefault();

    let tr = document.createElement('tr');
    campos.forEach((campo, index) => {
        let td = document.createElement('td');
        
        index == 2 ? td.textContent = `R$ ${campo.value}` : td.textContent = campo.value;

        tr.appendChild(td);
    })

    let volume = document.createElement('td')
    volume.textContent = `R$ ${campos[2].value * campos[1].value}`;
    
    // Saída
    tr.appendChild(volume);
    document.querySelector('[data-js="tbody"]').appendChild(tr);

    $formulario.reset();
})