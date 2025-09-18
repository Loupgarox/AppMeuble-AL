export class FormMeModule
{
    constructor(idForm)
    {
        this.idForm = idForm;
        this.modele = null;

        let div = document.getElementById( this.idForm );
        if( div )
        {
            let btnOk = document.getElementById( "btnOk" );
            if( btnOk )
            {
                btnOk.addEventListener( "click", ()=>
                {
                    this.onOk();
                });
            }

            let btnCancel = document.getElementById( "btnCancel" );
            if( btnCancel )
            {
                btnCancel.addEventListener( "click", ()=>
                {
                    this.onCancel();
                });
            }
        }
    }

    updateForm( me=null )
    {
        if(me) this.modele = me;

        let div = document.getElementById( this.idForm );
        if( div )
        {
            let inputLargeur = div.getElementsByClassName( "largeur" )[0];
            if( inputLargeur ) inputLargeur.value = this.modele.largeur ;

            let inputHauteur = div.getElementsByClassName( "hauteur" )[0];
            if( inputHauteur ) inputHauteur.value = this.modele.hauteur ;

            let inputProfondeur = div.getElementsByClassName( "profondeur" )[0];
            if( inputProfondeur ) inputProfondeur.value = this.modele.profondeur ;

            let inputCouleur = div.getElementsByClassName( "couleur" )[0];
            if( inputCouleur ) this.modele.couleur = inputCouleur.value;
        }
    }

    updateModele(me=null)
    {
        if(me) this.modele = me;

        let div = document.getElementById( this.idForm );
        if( div )
        {
            let inputLargeur = div.getElementsByClassName( "largeur" )[0];
            if( inputLargeur ) this.modele.largeur = parseInt(inputLargeur.value);

            let inputHauteur = div.getElementsByClassName( "hauteur" )[0];
            if( inputHauteur ) this.modele.hauteur = parseInt(inputHauteur.value);

            let inputProfondeur = div.getElementsByClassName( "profondeur" )[0];
            if( inputProfondeur ) this.modele.profondeur = parseInt(inputProfondeur.value);

            let inputCouleur = div.getElementsByClassName( "couleur" )[0];
            if( inputCouleur ) this.modele.couleur = inputCouleur.value;
        }
    }

    onOk()
    {
        alert("ok");
        this.updateModele();
        console.log(this.modele);
    }

    onCancel()
    {
        alert("Cancel")
        this.updateModele();
    }
}