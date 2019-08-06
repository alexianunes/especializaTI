const configs = {
    method: 'GET'
}

const results = document.getElementById('results');

const searchCEP = (event) => {

    startPreloader();
    results.style.display = 'none';

    const cep = document.getElementById('cep').value || '00000-000';
    
    fetch(`http://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`, configs)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        if(data.status === 0) throw data.message;

        showResults(data);
    })
    .catch(error => {
        console.log(error)
        Swal.fire('Erro', error.toString(), "error");
    })
    .finally(() => endPreloader())


    //Stop event default
    event = event || window.event;
    if(event.preventDefault) event.preventDefault();
    if(event.preventValue) event.preventValue();
    return false;
}

const showResults = (address) => {
    results.style.display = 'block';

    const html = `
        <ul class="list-group">
            <li class="list-group-item"><strong>CEP: </strong> ${address.code}</li>
            <li class="list-group-item"><strong>Cidade: </strong>${address.city}</li>
            <li class="list-group-item"><strong>Estado: </strong>${address.state}</li>
            <li class="list-group-item"><strong>Rua: </strong>${address.address}</li>
            <li class="list-group-item"><strong>Bairro: </strong>${address.district}</li>
        </ul>
    `;

    results.innerHTML = html;
}