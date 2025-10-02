
import {View} from "../mvc/View.js" ;

export class DrawMeModule extends View
{
    constructor( idDraw )
    {
        super() ;
        this.idDraw = idDraw ;
    }

    updateView( modele )
    {
        super.updateView( modele ) ;

        let draw = document.getElementById(  this.idDraw ) ;
        if( draw && this.modele )
        {
            draw.style.width = this.modele.largeur + "px" ;
            draw.style.height = this.modele.hauteur + "px" ;
            draw.style.backgroundColor = this.modele.couleur ;
            draw.style.position = "relative";

            let idDiv = draw.querySelector(".id-label");
            if (!idDiv) {
                idDiv = document.createElement("div");
                idDiv.className = "id-label";
                draw.appendChild(idDiv);
            }

            idDiv.innerText = this.modele.id;
            idDiv.style.color = this.getTextContrastColor(this.modele.couleur);
        }
        return true ;
    }

    getTextContrastColor(hexColor) 
{
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    const luminance = (r * 299 + g * 587 + b * 114) / 1000;

    return luminance > 125 ? "black" : "white";
}
}
