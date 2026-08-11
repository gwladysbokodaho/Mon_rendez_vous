// Les interactions et la logique


// =============================
// RÉCUPÉRATION DES ÉLÉMENTS
// =============================

const boutonOuvrir = document.getElementById("bouton-ouvrir");

const ecranOuverture = document.getElementById("ecran-ouverture");

const ecranQuestion = document.getElementById("ecran-question");

const questionCachee = document.querySelector(".question-cachee");

const boutonNon = document.getElementById("bouton-non");

const messageNon = document.getElementById("message-non");

const boutonOui = document.getElementById("bouton-oui");

const ecranOui = document.getElementById("ecran-oui");

const boutonContinuer = document.getElementById("bouton-continuer");

const boutonRetourOui = document.getElementById("bouton-retour-oui");

const ecranLieu = document.getElementById("ecran-lieu");

const boutonContinuerLieu = document.getElementById("bouton-continuer-lieu");

const boutonRetourLieu = document.getElementById("bouton-retour-lieu");

const choixLieux = document.querySelectorAll(".choix-lieu");

const ecranDateHeure = document.getElementById("ecran-date-heure");

const boutonContinuerDate = document.getElementById("bouton-continuer-date");

const boutonRetourDate = document.getElementById("bouton-retour-date");

const dateRendezVous = document.getElementById("date-rendez-vous");

const heureRendezVous = document.getElementById("heure-rendez-vous");

const ecranConfirmation = document.getElementById("ecran-confirmation");

const messageRendezVous = document.getElementById("message-rendez-vous");

const boutonRetourConfirmation = document.getElementById("bouton-retour-confirmation");


let dateSelectionnee = null;

let heureSelectionnee = null;


// =============================
// MÉMOIRE DU CHOIX DU LIEU
// =============================

let lieuSelectionne = null;


// =============================
// BOUTON OUVRIR
// =============================

boutonOuvrir.addEventListener("click", function() {

    // On cache le premier écran
    ecranOuverture.style.display = "none";

    // On affiche le deuxième écran
    ecranQuestion.style.display = "flex";


    // On attend 800 millisecondes
    setTimeout(function() {

        // On lance l'animation
        questionCachee.classList.add("apparaitre");

    }, 800);

});


// =============================
// COMPTEUR DE CLICS SUR NON
// =============================

let nombreClicsNon = 0;


// =============================
// BOUTON NON
// =============================

boutonNon.addEventListener("click", function() {

    // On augmente le compteur
    nombreClicsNon++;


    // On supprime les anciennes animations
    messageNon.classList.remove(
        "animation-1",
        "animation-2",
        "animation-3"
    );


    // On force le navigateur à recommencer l'animation
    void messageNon.offsetWidth;


    // Premier clic
    if (nombreClicsNon === 1) {

        messageNon.textContent = "Tu es sûr(e) ? 🥺";

        messageNon.classList.add("visible");

        messageNon.classList.add("animation-1");

    }


    // Deuxième clic
    else if (nombreClicsNon === 2) {

        messageNon.textContent = "Réfléchis encore un peu... 😌";

        messageNon.classList.add("visible");

        messageNon.classList.add("animation-2");

    }


    // Troisième clic
    else if (nombreClicsNon === 3) {

        messageNon.textContent = "Dis simplement oui 😏❤️";

        messageNon.classList.add("visible");

        messageNon.classList.add("animation-3");

    }

});


// =============================
// BOUTON OUI
// =============================

boutonOui.addEventListener("click", function() {

    // On cache l'écran de la question
    ecranQuestion.style.display = "none";

    // On affiche l'écran après le OUI
    ecranOui.style.display = "flex";

});


// =============================
// RETOUR DEPUIS L'ÉCRAN DU OUI
// =============================

boutonRetourOui.addEventListener("click", function() {

    // On cache l'écran du OUI
    ecranOui.style.display = "none";

    // On revient à l'écran de la question
    ecranQuestion.style.display = "flex";

});


// =============================
// BOUTON CONTINUER APRÈS LE OUI
// =============================

boutonContinuer.addEventListener("click", function() {

    // On cache l'écran précédent
    ecranOui.style.display = "none";

    // On affiche l'écran du lieu
    ecranLieu.style.display = "flex";

});


// =============================
// CHOIX DU LIEU
// =============================

choixLieux.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        // On retire la sélection précédente
        choixLieux.forEach(function(autreBouton) {

            autreBouton.classList.remove("selectionne");

        });


        // On sélectionne le bouton actuel
        bouton.classList.add("selectionne");


        // On récupère le lieu choisi
        lieuSelectionne = bouton.dataset.lieu;


        // On active le bouton Continuer
        boutonContinuerLieu.disabled = false;

    });

});


// =============================
// RETOUR DEPUIS L'ÉCRAN DU LIEU
// =============================

boutonRetourLieu.addEventListener("click", function() {

    // On cache l'écran du lieu
    ecranLieu.style.display = "none";

    // On revient à l'écran précédent
    ecranOui.style.display = "flex";

});

// =============================
// CONTINUER APRÈS LE CHOIX DU LIEU
// =============================

boutonContinuerLieu.addEventListener("click", function() {

    // On vérifie qu'un lieu a bien été choisi
    if (lieuSelectionne === null) {
        return;
    }

    // On cache l'écran du lieu
    ecranLieu.style.display = "none";

    // On affiche l'écran date et heure
    ecranDateHeure.style.display = "flex";

});

// =============================
// CHOIX DE LA DATE
// =============================

dateRendezVous.addEventListener("change", function() {

    dateSelectionnee = dateRendezVous.value;

    verifierDateEtHeure();

});

// =============================
// CHOIX DE L'HEURE
// =============================

heureRendezVous.addEventListener("change", function() {

    heureSelectionnee = heureRendezVous.value;

    verifierDateEtHeure();

});

// =============================
// VÉRIFICATION DATE + HEURE
// =============================

function verifierDateEtHeure() {

    if (dateSelectionnee !== null && heureSelectionnee !== null) {

        boutonContinuerDate.disabled = false;

    } else {

        boutonContinuerDate.disabled = true;

    }

}// =============================
// RETOUR VERS LE CHOIX DU LIEU
// =============================

boutonRetourDate.addEventListener("click", function() {

    // On cache l'écran date et heure
    ecranDateHeure.style.display = "none";

    // On revient à l'écran du lieu
    ecranLieu.style.display = "flex";

});

// =============================
// CONTINUER APRÈS DATE + HEURE
// =============================

boutonContinuerDate.addEventListener("click", function() {

    // Vérification
    if (dateSelectionnee === null || heureSelectionnee === null) {
        return;
    }

    // Création de la date
    const date = new Date(dateSelectionnee + "T00:00:00");

    // Récupération du jour
    const jours = [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
    ];

    // Récupération du mois
    const mois = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
    ];

    const jour = jours[date.getDay()];

    const numeroJour = date.getDate();

    const nomMois = mois[date.getMonth()];

    // Construction de la phrase
    // =============================
// FORMATAGE DU LIEU ET DE L'HEURE
// =============================

const formulationsLieu = {
    "Restaurant": "au restaurant",
    "Plage": "à la plage",
    "Cinéma": "au cinéma",
    "Promenade": "en promenade"
};

const formulationLieu = formulationsLieu[lieuSelectionne];


// Transformation de 22:00 en 22h
// et de 19:30 en 19h30

const heureFormatee = heureSelectionnee
    .replace(":00", "h")
    .replace(":", "h");


// =============================
// MESSAGE FINAL
// =============================

messageRendezVous.textContent =
    `Alors, on se retrouve ${formulationLieu} le ${jour} ${numeroJour} ${nomMois} à ${heureFormatee} ! ❤️`;
    
    // On cache l'écran date/heure
    ecranDateHeure.style.display = "none";

    // On affiche l'écran final
    ecranConfirmation.style.display = "flex";

});

// =============================
// RETOUR DEPUIS LA CONFIRMATION
// =============================

boutonRetourConfirmation.addEventListener("click", function() {

    // On cache l'écran final
    ecranConfirmation.style.display = "none";

    // On revient à l'écran date et heure
    ecranDateHeure.style.display = "flex";

});