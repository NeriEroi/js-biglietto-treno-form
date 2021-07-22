// stampa biglietto

var btnGenera = document.getElementById("calcola");

console.log(btnGenera);


btnGenera.addEventListener('click',
    function() {
        var nome = document.getElementById('name').value;
        document.getElementById('nomePasseggero').innerHTML = nome;
        var km = document.getElementById('km').value;
        var age = document.getElementById('age').value;
        var ticket = document.getElementById('ticket');
        ticket.style.display = 'block'
    }
)


// scomparsa ticket

var btnAnnulla = document.getElementById("annulla");

console.log(btnAnnulla);

btnAnnulla.addEventListener('click',
    function() {
        ticket.style.display = 'none'
    }
)





