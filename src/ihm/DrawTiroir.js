import { DrawMeModule } from "./DrawMeModule.js";

export class DrawTiroir extends DrawMeModule {
    constructor(idDraw) {
        super(idDraw);
    }

    updateView(modele) {
        super.updateView(modele);

        const draw = document.getElementById(this.idDraw);

        if (draw && this.modele) {
            draw.style.position = "relative";

            // Créer ou récupérer la poignée
            let poigneeDiv = draw.querySelector(".poignee-visuelle");
            if (!poigneeDiv) {
                poigneeDiv = document.createElement("div");
                poigneeDiv.classList.add("poignee-visuelle");
                draw.appendChild(poigneeDiv);
            }

            // Centrer
            poigneeDiv.style.top = "50%";
            poigneeDiv.style.left = "50%";

            // Couleur
            poigneeDiv.style.backgroundColor = this.modele.couleurpoignee;

            // Nettoyer les anciennes classes de forme
            poigneeDiv.classList.remove("ronde", "rectangulaire");

            // Ajouter la bonne forme
            if (this.modele.poignee === "ronde") {
                poigneeDiv.classList.add("ronde");
            } else {
                poigneeDiv.classList.add("rectangulaire");
            }
        }

        return true;
    }
}
