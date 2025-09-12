export class FormMeModule
{
    constructor(idForm)
    {
        this.idForm = idForm;

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

    updateForm( me )
    {
        let div = document.getElementById( this.idForm );
        if( div )
        {
            let inputLargeur = div.getElementsByClassName( "largeur" )[0];
            if( inputLargeur ) inputLargeur.value = me.largeur ;

            let inputHauteur = div.getElementsByClassName( "hauteur" )[0];
            if( inputHauteur ) inputHauteur.value = me.hauteur ;

            let inputProfondeur = div.getElementsByClassName( "profondeur" )[0];
            if( inputProfondeur ) inputProfondeur.value = me.profondeur ;
        }
    }

    onOk()
    {
        alert("ok");
    }

    onCancel()
    {
        alert("Cancel")
    }
}