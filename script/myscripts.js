//Menu uitgeklapt
var menu = document.querySelector('.menu');
var menuuitgeklapt = document.querySelector('.menuuitgeklapt');

function animatedMenu() {

    menu.classList.toggle('active');
    menuuitgeklapt.classList.toggle('active');


}

menu.addEventListener('click', animatedMenu);



//Filter uitgeklapt SORTEREN
var buttonsorteren = document.querySelector('.btnsorteer');
var sorteren = document.querySelector('.hoofdFormulier section:nth-of-type(1)');

function sorterenAnimated() {

    buttonsorteren.classList.toggle('active');
    sorteren.classList.toggle('active');

}

buttonsorteren.addEventListener('click', sorterenAnimated);


//Filter uitgeklapt GENRE
var filter = document.querySelector('.btngenre');
var genre = document.querySelector('.hoofdFormulier section:nth-of-type(2)');

function genreAnimated() {

    filter.classList.toggle('active');
    genre.classList.toggle('active');

}

filter.addEventListener('click', genreAnimated);


//Filter uitgeklapt TAALGEBRUIK
var filter = document.querySelector('.btntaalgebruik');
var taalgebruik = document.querySelector('.hoofdFormulier section:nth-of-type(3)');

function taalgebruikAnimated() {

    filter.classList.toggle('active');
    taalgebruik.classList.toggle('active');

}

filter.addEventListener('click', taalgebruikAnimated);
