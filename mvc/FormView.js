import { View } from "./View.js";

export class Formview extends View
{
    constructor(idForm, template=null)
    {
        super();
        this.idForm = idForm;
        this.template =template;
        this.rootELement = document.getElementById( this.idForm );
        this.render();
    }

    async loadHtml()
    {
        let reponse = await window.fetch(this.template, {method: "GET"});
        let html = await reponse.text();
        return html;
    }

    async render()
    {
        if(this.rootELement)
        {
            if(this.template && !this.rootELement.children.length)
            {
                let html = await this.loadHtml(this.template);
                this.rootELement.innerHTML = html;
            }
        }

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

    updateModeleFromInputElement(idInput, valueType="string", fctGetInputValue=null)
    {
        if(this.rootELement)
        {
            let input = this.rootELement.getElementsByClassName( idInput )[0];
            if( input ) 
            {
                if(fctGetInputValue)
                {
                    let value = fctGetInputValue(input.value);
                    try
                    {
                        this.modele[idInput] = value ;
                    }
                    catch(message)
                    {
                        this.onError(message);
                    }
                    
                }
                else
                {
                    try
                    {
                        switch(valueType)
                        {
                            case "integer":
                                this.modele[idInput] = parseInt(input.value);
                                break;
                            case "float":
                                this.modele[idInput] = parseFloat(input.value);
                                break;
                            default:
                                this.modele[idInput] = input.value;
                        }
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