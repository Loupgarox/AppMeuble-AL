

export class MeModule
{
    constructor( largeur=30, hauteur=10, profondeur=30 )
    {
        if (largeur < 30)
            this.largeur = 30;
        else if (largeur > 120)
            this.largeur = 120;
        else
            this.largeur = largeur;

        if (hauteur < 30)
            this.hauteur = 30;
        else if (hauteur > 120)
            this.hauteur = 120;
        else
            this.hauteur = hauteur;

         if (profondeur < 30)
            this.profondeur = 30;
        else if (profondeur > 120)
            this.profondeur = 120;
        else
            this.profondeur = profondeur;
    }
}