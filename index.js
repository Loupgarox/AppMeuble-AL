import { FormMeModule } from "./src/meuble/FormMeModule";
import { MeModule } from "./src/meuble/MeModule";

let m1 = new MeModule( 100, 5, 200 );

console.log( m1 );

let m2 = new MeModule( 400 );

console.log( m2 );

try
{   
    // On fait la mise a jour
    m2.largeur = 500;
} 
catch( messageErreur )
{
    // On traite l'erreur
    console.log( messageErreur );
}

alert(m2._largeur);

console.log( m2 );

let form1 = new FormMeModule( "FormMeModule" );

form1.updateForm( m2 );

m2.largeur = 40;
m2.couleur = "#FF0000";

console.log( m2 );