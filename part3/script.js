// JAUGE NB MAIL
let countMessages = document.getElementsByTagName('p'); 
// Je stock les corps de mail(=p) dans la variable countMessages
document.getElementById("count").textContent = countMessages.length;
// chercher le chiffre 0 dans HTML.son contenu = la variable contenant les mails.le nombre de mails

// SUPP MAILS + MAJ JAUGE MAIL
let trash = document.getElementsByClassName("trash"); 
// Je stock les img trash dans une variable trash
for(var i=0; i<trash.length; i++) { 
// Je créé la boucle qui retourne le nombre de poubelle en tableau
    trash[i].addEventListener("click", 
    // J'appelle le signal "clic" sur une quelconque(=i) poubelle(=trash), si clic...
    function() {
        this.parentNode.remove(); 
        // ... (1) je supprime la balise parent(=div) qui contient la poubelle ciblé(=this) par le clic
        document.getElementById("count").textContent = countMessages.length;
        // ... (2) je rappelle le chiffre 0 HTML = nombre de mail qui s'affiche
    })
}

// ADD NEW MAIL
document.getElementById('btn-add').addEventListener("click",
    function(){
        /////// STEP 1 = Recréer le squelette HTML du mail
        // Création balise principale div (row)
        var mainDiv = document.createElement("div");
            mainDiv.className = "row";
            document.body.appendChild(mainDiv);
        // Création balise img avatar
        var image = document.createElement("img");
            image.className = "avatar";
            image.src = "avatar-1.jpg";
            mainDiv.appendChild(image);
        // Création balise div pour le message
        var nameMessageDiv = document.createElement("div");
            mainDiv.appendChild(nameMessageDiv);
            // Création balise h6
            var h6 = document.createElement('h6');
            h6.textContent = "Eric Dupont";
            nameMessageDiv.appendChild(h6);
            // Création balise p
            var content = document.createElement('p');
            //Message Value
            content.textContent = document.getElementById('add-message').value;
            nameMessageDiv.appendChild(content);
        // Création balise img trash
        var trash = document.createElement('img');
        trash.src = "trash.png";
        trash.className = "trash";
        mainDiv.appendChild(trash);
        
        /////// STEP 2 = Aller chercher le message saisi dans input
        //Reset message text input
        document.getElementById('add-message').value = "";
        
        /////// STEP 3 = MAJ du compteur du nombre de mails
        //Count messages
        var messagesCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messagesCount;

        /////// STEP 4 = Activer l'action poubelle de ce nouveau mail
        //Remove
        trash.addEventListener("click", 
            function(){
                this.parentNode.remove();
                //Count messages
                var messagesCount = document.getElementsByTagName('p').length;
                document.getElementById('count').textContent = messagesCount;

            }
        )
    }
)

