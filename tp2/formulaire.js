function validation(){
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	var date = document.getElementById("date").value;
	var adresse = document.getElementById("adresse").value;
	var email = document.getElementById("email").value;
	
	var length_nom = nom.length;
	var length_prenom = prenom.length;
	var length_date = date.length;
	var length_adresse = adresse.length;
	var length_email = email.length;
	
	var div = document.getElementById("message-div");
	if(length_nom >= 5 && length_prenom >= 5 && length_date > 0 && length_adresse >= 5 && length_email >= 5){
		div.id = 'validation';
		document.getElementById("validation").innerHTML = "<p>Votre demande est enrigistrer avec sucess<br>Merci!</p>";
		
	}
	else{
		div.id = 'error';
		/*if(length_nom < 5){document.getElementById("error").innerHTML = "<p>Le champ Nom est obligatoire<br>Minumum 5 characteres</p>";}
		if(length_prenom < 5){document.getElementById("error").innerHTML = "<p>Le champ Prénom est obligatoire<br>Minumum 5 characteres</p>";}
		if(length_date < 5){document.getElementById("error").innerHTML = "<p>Le champ Date est obligatoire</p>";}
		if(length_adresse < 5){document.getElementById("error").innerHTML = "<p>Le champ Adresse est obligatoire<br>Minumum 5 characteres</p>";}
		if(length_email < 5){document.getElementById("error").innerHTML = "<p>Le champ Email est obligatoire<br>Minumum 5 characteres</p>";}*/
		document.getElementById("error").innerHTML = "<p>Verifier les information entrées</p>";
		
	}
	
}