import { MeModule } from "./MeModule.js";

export class Tiroir extends MeModule
{
    constructor(poignee = "Rond")
    {
        super(largeur=30, hauteur=10, profondeur=30, couleur = "#FF0000");
        this.poignee = poignee;
        this.couleurpoignee = couleurpoignee;

        // On met à jour les attributs
        try {
            this.poignee = poignee;
            this.couleurpoignee = couleurpoignee;
        }
        catch (erreur){
            console.error( erreur );
        }
    }

    getHash()
    {
        return "" + this._largeur + this._hauteur + this._profondeur + this.couleur + this.poignee + this.couleurpoignee;
    } 
}