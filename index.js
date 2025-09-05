

function compte( debut, fin, fctAffiche)
{
    for( let i=debut; i<= fin; i++)
    {
        fctAffiche( i );
    }
}

function affiche( i )
{
    console.log( "la valeur de i est " + i);
}

let fct = affiche ; // Copie la réference de la fonction affiche dans la variable fct

fct( 100 );

compte(1, 10, affiche); // Appel de compte avec la référence de la fonction affiche


// Appel de compte avec une fonction lambda d'affichage
compte( 1, 10, function (valeur)
{
    console.log( "i possède la valeur " + valeur );
});

// Appel de compte avec une fonction lambda d'affichage autre version
compte( 1, 10, (valeur) =>
{
    console.log( "i possède la valeur " + valeur );
});


