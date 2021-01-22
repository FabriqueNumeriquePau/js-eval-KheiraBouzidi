//Création des variables contenant les éléments 'list' 
let principal = document.getElementById('list'); //liste des problèmes.


//Création de la variable contenant le lieu ou seront afficher les options selectionner.
let option_select = document.getElementById('option_select');

//Création des variables utiliser dans les scripts.
let Selection;
let vir_esc = ', ';

//configuration des options de la balise première <select> (options de la liste 1).
for(var i=0;i<jlist_problemes.length;i++){ //La boucle détermine de façons quasi-dinamique les options du fichier JSON a afficher.
	var newOption = new Option (jlist_problemes[i].Value, jlist_problemes[i].id);
	principal.options.add (newOption); //Ajout de l'option a la balise <select> (ajout du choix dans la liste) précedement enregistrer dans la variable.
}

//configuration des options de la balise deuxième <select> (options de la liste 2).
for(let i=0;i<principal_avancements.length;i++){
	var newOption = new Option (principal_avancements[i].Value, principal_avancements[i].id);
	
}