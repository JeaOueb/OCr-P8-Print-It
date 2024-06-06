const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// DEBUT FLECHES GAUCHE ET DROITE sur la bannière = récupération du DOM et Tests

// Récupération du DOM pour la flèche gauche et la flèche droite (déclaration des variables)
const bannerArrowLeft = document.querySelector(".arrow_left");
const bannerArrowRight = document.querySelector(".arrow_right");

// Tests Flèches (pour vérifier le contenu des variables)
// Ajout d'1 écouteur d'événement (addEventListener) sur chaque flèche
// Ajout d'un console.log pour tester le fonctionnement des eventlisteners en différenciant le clic sur la flèche gauche et sur la flèche droite

// Test Flèche gauche
// bannerArrowLeft.addEventListener("click", () => {
//     console.log("Vous avez cliqué sur la flèche gauche")
// });
// ;

// Test Flèche droite
// bannerArrowRight.addEventListener("click", () => {
//     console.log("Vous avez cliqué sur la flèche droite")
// });

// FIN FLECHES GAUCHE ET DROITE (récupération DOM et Tests)




// DEBUT CARROUSEL = bullet points, images et textes sur la bannière

// Récupération du DOM pour les Bullet points, les images et les textes (déclaration des variables), qui apparaissent dans la bannière
const banner = document.querySelector("#banner");
const dotsBanner = banner.querySelector(".dots");
const bannerImg = banner.querySelector(".banner-img");
const bannerTagLine = banner.querySelector("p");

// Création des éléments DOM pour les bullet points
// Création d'1 bullet point pour chaque slide et création d'1 div pour chaque bullet point.
const dots = slides.map((_, index) => {
	const dot = document.createElement("div");
	// ci-dessus : on crée un nouvel élément div pour chaque point.
	dot.classList.add("dot");
	// ci-dessus : on ajoute une classe CSS nommée dot à l'élément div créé précédemment.
	dotsBanner.appendChild(dot);
	// ci-dessus : on ajoute l'élément div (le point) en tant qu'enfant de l'élément dotsBanner.
	return dot;
	// ci-dessus : création d'un nouveau tableau de bullet points.
  });
  
// Image et texte du slider : currentSlide est une variable qui contient l'index de la slide active
let currentSlide = 0;
  
// Fonction de mise à jour de l'affichage du slider 
// La fonction updateSlider permet, en fonction de la slide sélectionnée, de faire apparaître l'image et le texte correspondants et de faire en sorte que le bullet point correspondant soit entièrement blanc (plein), grâce à la classe dot-selected
function updateSlider() {
    dots.forEach((dot, index) =>
	// ci-dessus : chaque élément dot du tableau dots est parcouru avec la méthode forEach.
	dot.classList.toggle("dot_selected", index === currentSlide)
	// ci-dessus :  dot représente l'élément actuel du tableau dots et index est l'index de l'élément actuel dot du tableau dots
	// classList.toggle ajoute la classe spécifiée (dot_selected) si elle n'est pas déjà présente et la supprime si elle est présente
	// index === currentSlide est une condition qui vérifie si l'index de l'élément actuel correspond à l'index de la diapositive actuellement affichée (currentSlide) ; Si c'est vrai, la classe dot_selected est ajoutée ; sinon, elle est supprimée.
	);
  
	const slide = slides[currentSlide];
	// ci-dessus : on récupère l'objet slide du tableau slides, correspondant à la slide actuellement affichée. 
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	// ci-dessus : on met à jour l'attribut src de l'image, en fonction de la slide, du tableau slides, actuellement affichée 
	bannerTagLine.innerHTML = slide.tagLine;
	// ci-dessus : on met à jour le texte qui s'affiche, en fonction de la slide, du tableau slides, actuellement affichée 
  }
  
// Défilement infini sur le carrousel
// ci-dessous la fonction nextSlide est appelée pour passer à la diapositive suivante, ou à la 1ère, avec un défilement infini
function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	// Ci-dessus, currentSlide est une variable qui contient l'index de la diapositive actuellement affichée
	// (currentSlide + 1) incrémente cet index pour passer à la diapositive suivante
	//  % slides.length est l'opérateur modulo qui assure le défilement infini. 
	updateSlider();
	// ci-dessus : on appelle la fonction updateSlider pour mettre à jour l'affichage du slider avec la nouvelle diapositive active.
  }
;
// ci-dessous la fonction prevSlide est appelée pour passer à la diapositive précédente, ou à la dernière, avec un défilement infini
function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	// Ci-dessus, (currentSlide - 1) décrémente l'index pour passer à la diapositive précédente
	//  (currentSlide - 1 + slides.length) ajoute le nombre total de diapositives pour gérer le cas où currentSlide serait négatif après la décrémentation. 
	// % slides.length assure le défilement infini.
	updateSlider();
	// ci-dessus : on appelle la fonction updateSlider pour mettre à jour l'affichage du slider avec la nouvelle diapositive active.
  }

// Initialisation du slider ( quand la page s'ouvre ou est réactualisée, alors le 1er bullet point est entièrement blanc et apparaît la 1ère slide)
updateSlider();

// FIN CARROUSEL : bullet points, images et texte sur la bannière
  



// DEBUT FLECHES GAUCHE ET DROITE, au clic sur chaque flèche, changement de slide
// Ajout d'1 écouteur d'événement (addEventListener) sur chaque flèche

// Au clic sur la flèche gauche, apparition de la slide précédente ou de la dernière slide, à l'infini
bannerArrowLeft.addEventListener("click", prevSlide);
 
// Au clic sur la flèche droite, apparition de la slide suivante, ou de la première slide, à l'infini
bannerArrowRight.addEventListener("click", nextSlide);

// FIN FLECHES GAUCHE ET DROITE, au clic sur chaque flèche








