import { DrawMeModule } from "./DrawMeModule.js";

export class DrawTiroir extends DrawMeModule
{
    constructor(idDraw)
    {
        super(idDraw);
    }

    updateView(modele)
    {
        super.updateView(modele);

        const draw = document.getElementById(this.idDraw);

        if (draw && this.modele)
        {
            draw.style.backgroundColor = this.modele.couleurpoignee;

            if (this.modele.poignee === "ronde") 
            {
                draw.style.borderRadius = "50%";
            } 
            else 
            {
                draw.style.borderRadius = "0";
            }
        }
        return true;
    }
}
