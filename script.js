//je sélectionne et stocke le bouton
const btn = document.querySelector(".btn");
console.log(btn);
//je sélectionne et stocke la div container-notifications
const ctn = document.querySelector(".container-notifications");
console.log(ctn);
btn.addEventListener("click", function(){
    console.log("bouton cliqué");
    //je crée un élément
const notification = document.createElement("div");
console.log(notification);
//je donne un sttyle à la div
notification.classList.add("toast");
//j'insère du contenu texte
notification.innerText = "Votre fichier est bien enregistré !"
console.log(notification);
//j'accroche notification à l'élément ctn
ctn.appendChild(notification);
    //A la fin du chrono, je retire la notification du dom
    setTimeout(function(){
    notification.remove();
}, 2000);
}); //fermeture de btn.addEventListener

