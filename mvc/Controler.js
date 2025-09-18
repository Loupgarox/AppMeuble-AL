

export class Controler
{
    constructor()
    {
        this.modele = null;
        this.modeleHash = "";
        this.views = [];

        Controler.controlers.push(this);
    }

    addView(view)
    {
        this.views.push(view);
    }

    updateAllViews(modele)
    {
        if(modele != undefined)
            this.modele = modele ;

            let hash = this.modele.getHash();

            if(hash != this.modeleHash)
            {
                this.views.forEach( (view)=>
                {
                    view.updateView(modele);
                });
                this.modeleHash = hash;
            }
    }

    static startUpdating()
    {
        setInterval( ()=>
        {
            Controler.controlers.forEach((controler)=>
            {
                controler.updateAllViews();
            });
        }, 200);
    }

    static controlers = [];
}