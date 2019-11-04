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
		document.getElementById("error").innerHTML = "<p>Verifier les information entrées</p>";
		
	}
	
}