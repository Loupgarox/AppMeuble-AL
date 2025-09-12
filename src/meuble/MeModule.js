

export class MeModule
{
    constructor( largeur=30, hauteur=10, profondeur=30 )
    {
        // On cree et initialise des attributs
        this._largeur = MeModule.largeurMin;
        this._hauteur = MeModule.hauteurMin;
        this._profondeur = MeModule.profondeurMin;

        // On met à jour les attributs
        try {
            this.largeur = largeur;
            this.hauteur = hauteur;
            this.profondeur = profondeur;
        }
        catch (erreur){
            console.error( erreur );
        }
    }

    // Getter sur la propriété _largeur
    get largeur()
    {
        return this._largeur; //retourne la valeur de l'attribut _largeur
    }

    set largeur( valeur )
    {
        if (valeur < MeModule.largeurMin)
            throw "La largeur doit etre superieur ou egale a " + MeModule.largeurMin ;
        else if (valeur > MeModule.largeurMax)
            throw "La largeur doit etre inferieur ou egale a " + MeModule.largeurMax ;
        else
            this._largeur = valeur;
    }

    get hauteur()
    {
        return this._hauteur; //retourne la valeur de l'attribut _hauteur
    }

    set hauteur( valeur )
    {
        if (valeur < MeModule.hauteurMin)
            throw "La hauteur doit etre superieur ou egale a " + MeModule.hauteurMin ;
        else if (valeur > MeModule.hauteurMax)
            throw "La hauteur doit etre inferieur ou egale a " + MeModule.hauteurMax ;
        else
            this._hauteur = valeur;
    }

    get profondeur()
    {
        return this._profondeur; //retourne la valeur de l'attribut _profondeur
    }

    set profondeur( valeur )
    {
        if (valeur < MeModule.profondeurMin)
            throw "La profondeur doit etre superieur ou egale a " + MeModule.profondeurMin ;
        else if (valeur > MeModule.profondeurMax)
            throw "La profondeur doit etre inferieur ou egale a " + MeModule.profondeurMax ;
        else
            this._profondeur = valeur;
    }

    // Creation d'attributs de classe pour stocker les limites
    static largeurMin = 30 ;
    static largeurMax = 120;
    static hauteurMin = 10 ;
    static hauteurMax = 300;
    static profondeurMin = 30 ;
    static profondeurMax = 120;

}