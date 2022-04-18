const liste = [
	{ name: 'coucou', price: 12 },
	{ name: 'kiki', price: 200 },
	{ name: 'bouh', price: 50 }
]

function affichePrenomsDeLaListe(list) {
  for (let elem of list) {
    console.log('Le nounours ' + elem.name + ' est à ' + elem.price + '€')
    console.log(`Le nounours ${elem.name} est à ${elem.price}€`)
  }
}

affichePrenomsDeLaListe(liste);