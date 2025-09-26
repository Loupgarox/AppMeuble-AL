import { Formview } from "../../mvc/FormView.js";

export class FormTiroir extends Formview
{
    constructor(idForm)
    {
        super(idForm, "src/ihm/FormTiroir_.html");
    }

    /*
    updateView( modele )
    {
        super.updateView(modele);

        this.updateInputElement("largeur");
        this.updateInputElement("hauteur");
        this.updateInputElement("profondeur");
        this.updateInputElement("couleur");
        this.updateInputElement("poignee");

        this.updateInputElement("volume", ()=>
        {
            return this.modele.largeur * this.modele.hauteur * this.modele.profondeur;
        })
    }

    updateModele()
    {
        // if(me) this.modele = me;

        this.updateModeleFromInputElement("largeur", "integer");
        this.updateModeleFromInputElement("hauteur", "integer");
        this.updateModeleFromInputElement("profondeur", "integer");
        this.updateModeleFromInputElement("couleur");
        this.updateModeleFromInputElement("poignee");
    }

    onError(message)
    {
        alert("FormMeModule erreur: " + message);
    }
    */
}