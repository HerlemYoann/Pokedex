let carapuce = document.getElementById('Carapuce');
let carabaffe = document.getElementById('Carabaffe');
let tortank = document.getElementById('Tortank');

let salameche = document.getElementById('Salameche');
let reptincel = document.getElementById('Reptincel');
let dracaufeu = document.getElementById('Dracaufeu');

let Bulbizarre = document.getElementById('Bulbizarre');
let Herbizarre = document.getElementById('Herbizarre');
let Florizarre = document.getElementById('Florizarre');





let supprimerCarapuce = document.getElementById('supprimerCarapuce');
let supprimerCarabaffe = document.getElementById('supprimerCarabaffe');
let supprimerTortank = document.getElementById('supprimerTortank');

let supprimerSalameche = document.getElementById('supprimerSalameche');
let supprimerReptincel = document.getElementById('supprimerReptincel');
let supprimerDracaufeu = document.getElementById('supprimerDracaufeu');

let supprimerBulbizarre = document.getElementById('supprimerBulbizarre');
let supprimerHerbizarre = document.getElementById('supprimerHerbizarre');
let supprimerFlorizarre = document.getElementById('supprimerFlorizarre');

let pokemonCapturé = document.getElementById('Nombre_de_pokemon_capture');
 let nombrePokemon = 0;

function ajouter (){
    
    supprimerCarapuce.addEventListener('click',function()
    {carapuce.classList.remove("disabled");
    supprimerCarapuce.innerHTML="Capturer";
    nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon})
    
    supprimerCarabaffe.addEventListener('click',function()
    {carabaffe.classList.remove("disabled");
    supprimerCarabaffe.innerHTML="Capturer"
    nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon})

    supprimerTortank.addEventListener('click',function(){
        tortank.classList.remove("disabled");
        supprimerTortank.innerHTML="Capturer"
        nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon
    })

    supprimerSalameche.addEventListener('click',function()
    {salameche.classList.remove("disabled");
    supprimerSalameche.innerHTML="Capturer"
    nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon})
    
    supprimerReptincel.addEventListener('click',function()
    {reptincel.classList.remove("disabled");
    supprimerReptincel.innerHTML="Capturer"
    nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon
})

    supprimerDracaufeu.addEventListener('click',function(){
        dracaufeu.classList.remove("disabled");
        supprimerDracaufeu.innerHTML="Capturer"
        nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon
    })

    supprimerBulbizarre.addEventListener('click',function()
    {Bulbizarre.classList.remove("disabled");
    supprimerBulbizarre.innerHTML="Capturer"
    nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon})
    
    supprimerHerbizarre.addEventListener('click',function()
    {Herbizarre.classList.remove("disabled");
    supprimerHerbizarre.innerHTML="Capturer"
    nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon})
   
    

    supprimerFlorizarre.addEventListener('click',function(){
        Florizarre.classList.remove("disabled");
        supprimerFlorizarre.innerHTML="Capturer"
        nombrePokemon++;
    pokemonCapturé.innerHTML = "Nombre de pokemon capturer: "+nombrePokemon;
    })
    

}


function afficherCardTortank() {
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardTortank').classList.toggle('active');
}

function afficherCardCarabaffe(){
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardCarabaffe').classList.toggle('active');
}

function afficherCardCarapuce(){
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardCarapuce').classList.toggle('active');
}

function afficherCardDracaufeu() {
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardDracaufeu').classList.toggle('active');
}

function afficherCardReptincel() {
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardReptincel').classList.toggle('active');
}

function afficherCardSalameche() {
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardSalameche').classList.toggle('active');
}

function afficherCardFlorizarre() {
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardFlorizarre').classList.toggle('active');
}

function afficherCardHerbizarre() {
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardHerbizarre').classList.toggle('active');
}

function afficherCardBulbizarre() {
    document.body.classList.toggle('modal-active');
    document.querySelector('#CardBulbizarre').classList.toggle('active');
}





ajouter();

