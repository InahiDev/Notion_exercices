const nounourses = [{
  colors: ["Tan", "Chocolate", "Black", "White"],
  _id: "5be9c8541c9d440000665243",
  name: "Norbert",
  price: 2900,
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_1.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},{
  colors: ["Pale brown", "Dark brown", "White"],
  _id: "5beaa8bf1c9d440000a57d94",
  name: "Arnold",
  price: 3900,
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_2.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},{
  colors: ["Brown"],
  _id: "5beaaa8f1c9d440000a57d95",
  name: "Lenny and Carl",
  price: 5900,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_3.jpg"
},{
  colors: ["Brown", "Blue", "Pink"],
  _id: "5beaabe91c9d440000a57d96",
  name: "Gustav",
  price: 4500,
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_4.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},{
  colors: ["Beige", "Tan", "Chocolate"],
  _id: "5beaacd41c9d440000a57d97",
  name: "Garfunkel",
  price: 5500,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_5.jpg"
}]

function afficherNomDesNounours(array) {}
// utiliser une BOUCLE (for) !
for (let nounours of nounourses) {
  console.log(nounours.name)
};
//J'utilise la fonction que je viens de créer avec le tableau nounourses en argument
afficherNomDesNounours(nounourses);

function afficherPrixTotal(array) {
  // J'initialise le prixTotal à 0
  let prixTotal = 0;
  //Pour chaque nounours du tableau, j'ajoute son prix à prixTotal
  for (let nounours of nounourses) {
    prixTotal += nounours.price;
  };
  //J'affiche prixTotal
  console.log(prixTotal);
}

afficherPrixTotal(nounourses);

function afficherMoitiePrix(array) {
  //Je crée une boucle pour diviser price.nounourses par 2
  for (let nounours of nounourses) {
    nounours.price /= 2;
    nounours.price /= 100;
    console.log(nounours.name + ' à -50% est à ' + nounours.price + ' €');
    //reset des prix des nounours dans le array aprés la réduction de 50%;
    nounours.price *= 200;
  }
}
afficherMoitiePrix(nounourses);


// si tu peux, essaye aussi d'afficher celui à -20%
function afficherReductionVingt(array) {
  for (let nounours of nounourses) {
    //Application de la réduction de 20%
    nounours.price *= .8;
    //affichage en € et plus en cents
    nounours.price /= 100;
    console.log(nounours.name + ' à -20% est à ' + nounours.price + ' €');
    //reset des prix des nounours après la réduction de 20% dans le array nounourses
    nounours.price *= 125;
  }
}
afficherReductionVingt(nounourses);

function afficherColorisDisponibles(array) {
  //Pour chaque nounours du tableau nounourses, je récupère la longueur du array colors de chaque instance
  for (let nounours of nounourses) {
    console.log(nounours.name + ' est disponible en ' + nounours.colors.length + ' couleurs')
  }
}
afficherColorisDisponibles(nounourses);


function afficherSuperieurTrente(array) {
  for (let nounours of nounourses) {
    //mise du prix du nounours en €
    nounours.price /= 100;
    if (nounours.price > 30) {
      console.log(nounours.name + ' coûte + de 30€ (il coûte ' + nounours.price + '€)')
    } else {
      console.log(nounours.name + ' coûte - de 30€, il est abordable (il coûte ' + nounours.price + '€)')
    }
    //remise du prix des nounours en cents
    nounours.price *= 100;
  }
}
afficherSuperieurTrente(nounourses);  

// Attention, c'est bien la SOMME des descriptions qu'il faut afficher, pas les unes après les autres
function afficherSommeDescriptions(array) {
  let sommeDescriptions = '';
  for (let nounours of nounourses) {
    sommeDescriptions += nounours.description;
    console.log(sommeDescriptions);
  }
}
afficherSommeDescriptions(nounourses);

function afficherTroisiemeCouleurDispo(array) {
  
  for (let nounours of nounourses) {
    if (nounours.colors.length >= 3) {
      let troisiemeCouleur = nounours.colors[2];
      console.log('Le 3ème coloris de ' + nounours.name + ' est ' + troisiemeCouleur)
    } else {
      // Attention: gérer les cas où aucune troisième couleur n'existe
      console.log("Il n'y a que 2 coloris disponibles pour " + nounours.name)
    }
  }
}
afficherTroisiemeCouleurDispo(nounourses);


function addTenToAge(age) {
  age += 10;
  return age;
}
// should increase age passed as argument by 10.
// Ex:
let ageJulie = 12;
let agePaul = 24;
addTenToAge(ageJulie);
addTenToAge(agePaul);
console.log(addTenToAge(ageJulie)) // should display 22
console.log(addTenToAge(agePaul)) // should display 34
// Help: use the note "What's an argument ?" to really get how arguments work