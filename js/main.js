// stampa nome biglietto

var btnGenera = document.getElementById("calcola");

console.log(btnGenera);

btnGenera.addEventListener('click',
    function() {
        var nome = document.getElementById('name').value;
        document.getElementById('nomePasseggero').innerHTML = nome;
    }
)



