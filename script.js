// html elementen, const= omdat het niet veranderd
const aaiKat = document.querySelector('#aaiKat');
const schrikKat = document.querySelector('#schrikKat');
const voedKat = document.querySelector('#voedKat');
const koptekst = document.querySelector("h1");
const Hoofdimage = document.querySelector("#Hoofdimage")

function veranderKat(afbeelding, tekst, geluid) {

    if (Hoofdimage.src.includes(afbeelding)) { //De if.includes(afbeelding)) controleert of de huidige afbeelding al dezelfde is als de afbeelding die je wilt instellen.
        Hoofdimage.src = "./img/neutraalhenk1.png";
        koptekst.textContent = "Dit is Henk de Snorrenkat";

    } else {//als het niet dezelfde afbeelding is, word het hierdoor veranderd naar de nieuwe afbeelding en tekst
        Hoofdimage.src = "./img/" + afbeelding;
    koptekst.textContent = tekst;
    }

    let sound = new Audio("./img/" + geluid);
    sound.play();

}
//ik gebruik () => om een anonieme functie te maken die de veranderKat-functie aanroept zonder direct te worden uitgevoerd 
aaiKat.addEventListener('click',() => veranderKat("blijehenk3.png","De kat is blij!", "miauw.mp3.mp3")); 
schrikKat.addEventListener('click', () => veranderKat("bozekat.png", "De kat is boos!", "Bozekatgeluid.mp3")); 
voedKat.addEventListener('click', () => veranderKat("katisverliefd.png", "De kat is tevreden!", "cat-meow-6226.mp3"));  

