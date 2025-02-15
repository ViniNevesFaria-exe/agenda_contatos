const form = document.getElementById('formulario');

let cont = 0;

let linhas = '';
let nomes = [];
let telefones = [];

function adicionarContatos() {
    const nomeContato = document.getElementById('nome');
    const telContato = document.getElementById('telefone');

    if (nomes.includes(nomeContato.value) || telefones.includes(telContato.value)) {
        alert('Já possui um Contato salvo com os dados informados!');
    } else {

        nomes.push(nomeContato.value);
        telefones.push(telefones.value);

        let linha = '<tr>';

        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telContato.value}</td>`;
        linha += '</tr>';   

        linhas += linha;

        nomeContato.value = '';
        telContato.value = '';
        
        cont++; 
    }

    
}

function atualizarContatos() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    const span = document.querySelector('span');
    span.innerHTML = cont;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionarContatos();
    atualizarContatos();

});