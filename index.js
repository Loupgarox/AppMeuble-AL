import { MeModule } from "./src/meuble/MeModule";

let m1 = new MeModule( 200, 100, 80 );

console.log( m1 );

let m2 = new MeModule();

console.log( m2 );

m2.largeur = 500;

alert(m2._largeur);

console.log( m2 );
