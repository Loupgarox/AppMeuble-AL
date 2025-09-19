import { Formview } from "../../mvc/FormView.js";

export class FormMeModule extends Formview
{
    constructor(idForm)
    {
        super(idForm);
    }

    updateView( modele )
    {
        super.updateView(modele);

        this.updateInputElement("largeur");
        this.updateInputElement("hauteur");
        this.updateInputElement("profondeur");
        this.updateInputElement("couleur");

        this.updateInputElement("volume", ()=>
        {
            return this.modele.largeur * this.modele.hauteur * this.modele.profondeur;
        })
    }

    updateModele(me=null)
    {
        // if(me) this.modele = me;

        let div = document.getElementById( this.idForm );
        if( div )
        {
            let inputLargeur = div.getElementsByClassName( "largeur" )[0];
            if( inputLargeur )
            {
                try
                {
                    this.modele.largeur = parseInt(inputLargeur.value);
                }
                catch(message)
                {
                    this.onError(message);
                }
            }

            let inputHauteur = div.getElementsByClassName( "hauteur" )[0];
            if( inputHauteur )
            {
                try
                {
                    this.modele.hauteur = parseInt(inputHauteur.value);
                }
                catch(message)
                {
                    this.onError(message);
                }
            } 

            let inputProfondeur = div.getElementsByClassName( "profondeur" )[0];
            if( inputProfondeur )
            {
                try
                {
                    this.modele.profondeur = parseInt(inputProfondeur.value);
                }
                catch(message)
                {
                    this.onError(message);
                }
            }
            let inputCouleur = div.getElementsByClassName( "couleur" )[0];
            if( inputCouleur ) this.modele.couleur = inputCouleur.value;
        }
    }

    onError(message)
    {
        alert("FormMeModule erreur: " + message);
    }
}