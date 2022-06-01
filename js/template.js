class Vin {
    constructor(cheminImage,nom, couleur, cepage, alcool, millesime){
        this.cheminImage = cheminImage;
        this.nom = nom;
        this.couleur = couleur;
        this.cepage = cepage;
        this.alcool = alcool;
        this.millesime = millesime;
    }
}

let canteGaouB = new Vin("images/Vins/blanc-remove.png",
    "Cantegaou", 
    "Blanc", 
    "60% Carignan Blanc, 25% Uni Blanc, 15% Sémillon",
    "13%",
    "2020");

let pastel = new Vin("images/Vins/pastel-remove.png",
    "Pastel",
    "Rosé",
    "Cinsault, Grenache, Cabernet-Sauvignon",
    "13%",
    "2021");

let terroyas = new Vin("images/Vins/terroyas-remove.png",
    "Terroyas",
    "Rouge",
    "Carignan",
    "13,5",
    "2019");

let vins = [canteGaouB,pastel,terroyas];

let presentationBouteille = document.getElementById("presentationBouteille");

let html = "";

for(let vin of vins){
    html +=
    "<div class='photoBouteille'>"+
        "<img src='"+vin.cheminImage+"'>"+
    "</div>"+
    "<div class ='descriptionBouteille'>"+
        "<p> Couleur : "+vin.couleur+"</br>"+
            "Cépage : "+vin.cepage+"</br>"+
            "Alcool : "+vin.alcool+"</br>"+
            "Millésime : "+vin.millesime+"</br>"+
        "</p>"+
    "</div>"+
    "</br>"
};

presentationBouteille.innerHTML = html;