import { View } from "./View.js";

export class Formview extends View
{
    constructor(idForm)
    {
        super();
        this.idForm = idForm;

        this.rootELement = document.getElementById( this.idForm );
        if( this.rootELement )
        {
            let btnOk = this.rootELement.getElementsByClassName( "btnOk" );
            if( btnOk.length > 0 )
            {
                btnOk[0].addEventListener( "click", ()=>
                {
                    this.onOk();
                });
            }

            let btnCancel = this.rootELement.getElementsByClassName( "btnCancel" );
            if( btnCancel.length > 0 )
            {
                btnCancel[0].addEventListener( "click", ()=>
                {
                    this.onCancel();
                });
            }
        }
    }

    updateInputElement(idInput, fctGetModeleValue=null)
    {
        if(this.rootELement)
        {
            let input = this.rootELement.getElementsByClassName( idInput )[0];
            if( input ) 
            {
                if(fctGetModeleValue)
                {
                    let value = fctGetModeleValue();
                    input.value = value ;
                }
                else
                    input.value = this.modele[idInput];
            }
        }
    }

    updateModeleFromInputElement(idInput, fctGetInputValue=null)
    {
        if(this.rootELement)
        {
            let input = this.rootELement.getElementsByClassName( idInput )[0];
            if( input ) 
            {
                if(fctGetInputValue)
                {
                    let value = fctGetInputValue();
                    input.value = value ;
                }
                else
                {
                    try
                    {
                        this.modele[idInput] = parseInt(input.value);
                    }
                    catch(message)
                    {
                        this.onError(message);
                    }
                }
            }
        }
    }

    onOk()
    {
        // alert("ok");
        this.updateModele();
        console.log(this.modele);
    }

    onCancel()
    {
        // alert("Cancel")
        this.updateView();
    }


}