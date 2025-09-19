import { FormMeModule } from "./src/meuble/FormMeModule.js";
import { MeModule } from "./src/meuble/MeModule.js";
import { Controler } from "./mvc/Controler.js";

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

// alert(m2._largeur);

console.log( m2 );

let ctrl1 = new Controler();

ctrl1.addView(new FormMeModule("FormMeModule"));
ctrl1.addView(new FormMeModule("FormMeModule2"));

ctrl1.updateAllViews(m2);

/*
let form1 = new FormMeModule( "FormMeModule" );

form1.updateForm( m2 );

*/

m2.couleur = "#FF0000";
m2.largeur = 40;

console.log( m2 );

Controler.startUpdating();