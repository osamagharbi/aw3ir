$( document ).ready(function(){ 

    $("#gps").on("click", function(){
        
        getLocation();
        contactStore.add($("#name").val(), $("#firstname").val(),$("#birth").val(), $("#adresse").val(), $("#mail").val())
    });
    $("#ajouter").on("click", function(){
        var adresse = $("#adresse").val();
        contactStore.add($("#name").val(), $("#firstname").val(),$("#birth").val(), $("#adresse").val(), $("#mail").val())
        document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
        '<tr><td>'+$("#name").val()+'</td><td>'+$("#firstname").val()+'</td><td>'+$("#birth").val()+'</td><td><a href=\"https://maps.google.com/?q='+adresse+'">'+adresse+'</a></td><td>'+"<a href=\""+$("#mail").val()+"\">"+$("#mail").val()+'</a></td><td></tr>';
        // CODE à compléter pour insérer les autres données
    });


    $( "#name" ).keyup(function() {
            var name  = $("#name").val();
            var Length_Name = name.length;
            $("#cNom").text(Length_Name+" car.");
      });


      $( "#firstname" ).keyup(function() {  
            var lastname = $("#firstname").val();
            
            var Length_Prenom = lastname.length;
            
            $("#cPrenom").text(Length_Prenom+" car.");
        });

 });
    
    