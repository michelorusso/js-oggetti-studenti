$(document).ready(function() {

    // Creare un oggetto che descriva uno studente,
    var student = {
        // con le seguenti proprietà: nome, cognome e età.
        'nome': 'Gino',
        'cognome': 'Sorbillo',
        'eta': 25,
    }

    // Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
    for( var key in student) {
        // console.log(student);
        console.log(student[key]);
    }
    
    // Creare un array di oggetti di studenti.
    var arrayStudent = [
        {
            'nome': 'gilberto',
            'cognome': 'bianchi',
            'eta': 37,
        },
        {
            'nome': 'bugs',
            'cognome': 'bunny',
            'eta': 77,
        },
        {
            'nome': 'donald',
            'cognome': 'duck',
            'eta': 81,
        },
        {
            'nome': 'mickey',
            'cognome': 'mouse',
            'eta': 87,
        }
    ];

    // Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
    for(i = 0; i < arrayStudent.length; i++) {
        var thisStudent = arrayStudent[i];
        console.log('Studente : ', thisStudent.nome , thisStudent.cognome);

    }

    // Dare la possibilità all’utente, attraverso 3 prompt()
    var nomeUser = prompt('Dimmi il tuo nome');
    var cognomeUser = prompt('Dimmi il tuo cognome');
    var etaUser = parseInt(prompt('Quanti anni hai?'));
    // di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

    var infoUser = {
        'nome': nomeUser,
        'cognome': cognomeUser,
        'eta': etaUser,
    }
    console.log(infoUser);

    arrayStudent.push(infoUser);
    console.log(arrayStudent);
    
});