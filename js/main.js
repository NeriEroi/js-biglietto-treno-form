// stampa biglietto

var btnGenera = document.getElementById("calcola");

console.log(btnGenera);


btnGenera.addEventListener('click',
    function() {
        var nome = document.getElementById('name').value;
        document.getElementById('nomePasseggero').innerHTML = nome;
        var km = document.getElementById('km').value;
        var age = document.getElementById('age').value;
        
        // calcolo prezzo biglietto

        var prezzoStandard = 0.21;
        var scontoMin = 0.8;
        var scontoOver = 0.4;
        var costoTicket = prezzoStandard * km;

        if (age == "Minorenne") {
            costoTicket = prezzoStandard * scontoMin;
        } else if (age == "Over 65") {
            costoTicket = prezzoStandard * scontoOver;
        }

        document.getElementById('costo').innerHTML = costoTicket;


        var ticket = document.getElementById('ticket');
        ticket.style.display = 'block'
    }
)


// scomparsa ticket

var btnAnnulla = document.getElementById("annulla");

console.log(btnAnnulla);

btnAnnulla.addEventListener('click',
    function() {
        ticket.style.display = 'none';
    }
    
)





