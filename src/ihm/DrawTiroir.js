import { DrawMeModule } from "./DrawMeModule.js";

export class DrawTiroir extends DrawMeModule
{
    constructor(idDraw)
    {
        super(idDraw) ;
    }

    updateView( modele )
    {
        super.updateView( modele ) ;
        let draw = document.getElementById(this.idDraw);

        if( draw && this.modele )
        {
            draw.style.backgroundColor = this.modele.couleur ;
            draw.style.borderRadius = "50%";
        }
        return true ;
    }
}