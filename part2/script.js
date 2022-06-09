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