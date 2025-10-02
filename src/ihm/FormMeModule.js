
import {MeModule} from "../meuble/MeModule.js"
import {FormView} from "../mvc/FormView.js"

export class FormMeModule extends FormView
{
    constructor( idForm, template="src/ihm/FormMeModule_.html" )
    {
        super( idForm, template ) ;
    }

    updateView( modele )
    {
        let result = super.updateView( modele ) ;

        this.updateInputElement( "largeur" )
        this.updateInputElement( "hauteur" ) ;
        this.updateInputElement( "profondeur" ) ;
        this.updateInputElement( "couleur" ) ;

        this.updateInputElement( "volume", ()=>
        {
            return this.modele.largeur * this.modele.hauteur * this.modele.profondeur;
        }) ;

        let idInput = document.getElementById(this.idForm).querySelector("#id");
        if (idInput && this.modele) {
            idInput.value = this.modele.id;
        }

        return result;
    }

    updateModele()
    {
        this.updateModeleFromInputElement( "largeur", "integer" ) ;
        this.updateModeleFromInputElement( "hauteur", "integer" ) ;
        this.updateModeleFromInputElement( "profondeur", "integer" ) ;
        this.updateModeleFromInputElement( "couleur" ) ;
    }

    onError( message )
    {
        alert( "FormMeModule: erreur: " + message ) ;
    }
}