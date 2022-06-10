// JAUGE NB MAIL
let countMessages = $('p'); 
// Je stock les corps de mail(=p) dans la variable countMessages
$("#count").text(countMessages.length);
// chercher le chiffre 0 dans HTML.son contenu = la variable contenant les mails.le nombre de mails

// SUPP MAILS + MAJ JAUGE MAIL
let trash = $(".trash"); 
// Je stock les img trash dans une variable trash
trash.each(
    function(){
        $(this).click(
            function(){
                $(this).parent().remove();
                let countMessages = $('p');
                $("#count").text(countMessages.length);
            }
        )     
    }
)

// ADD NEW MAIL
$("#btn-add").click(
    function() {
        /////// STEP 1 = Aller chercher le message saisi dans input
        //Reset message text input
        var message = $("#add-message").val();
        $("#add-message").val("");

        /////// STEP 2 = Recréer le squelette HTML du mail
        $("body").append(
        // Création balise principale div (row)
        `<div class="row">
            <img class="avatar" src="avatar-3.jpg">
            <div>
                <h6>Eric dupont</h6>
                <p>` + message + `</p> 
            </div>
            <img class="trash" src="trash.png">
        </div>`
        )

        /////// STEP 3 = MAJ du compteur du nombre de mails
        //Count messages
        let countMessages = $('p'); 
        $("#count").text(countMessages.length);

        /////// STEP 4 = Activer l'action poubelle de ce nouveau mail
        //Remove
        $(".trash").click(
                    function(){
                        $(this).parent().remove();
                        let countMessages = $('p');
                        $("#count").text(countMessages.length);
                    }
                )     
    }
)

// SEARCH MESSAGE
        /////// STEP 1 = addEventListener click on button search
        $("#btn-search").click(
            function(){
                $("h6").each(
                    function(){
                        if ($("#search-message").val() != $(this).text()){
                            $(this).parent().parent().fadeOut();
                        }
                    }
                )

                var search = $("#search-message").val();
                $("#search-message").val("");
                console.log(search);
            }

        )    
