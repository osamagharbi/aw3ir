$( document ).ready(function() {
   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );
    
    // Y mettre le code jQuery pour valider tous les champs du formulaire
});
function validation(){
    var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	var date = document.getElementById("datepicker").value;
	var adresse = document.getElementById("adresse").value;
	var email = document.getElementById("email").value;
	var length_nom = nom.length;
	var length_prenom = prenom.length;
	var length_date = date.length;
	var length_adresse = adresse.length;
	var length_email = email.length;
    
    
    
    if(length_nom >= 5 && length_prenom >= 5 && length_date >= 0 && length_adresse >= 5 && length_email >= 5 ){

        document.getElementById("theMap").setAttribute("src","https://maps.googleapis.com/maps/api/staticmap?markers="+adresse+"&zoom=10  &size=200x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
        $('#myModal').modal("show");
    }else{
        $('#myModal2').modal("show");
    }
}