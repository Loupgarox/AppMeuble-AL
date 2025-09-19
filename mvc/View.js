
export class View
{
    constructor()
    {
        this.modele = null;
    }

    updateView(modele)
    {
        if(modele != undefined)
            this.modele = modele;
    }

    updateModele()
    {

    }

    onError(message)
    {
        
    }
}