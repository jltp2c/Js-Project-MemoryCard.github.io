const cartes = document.querySelectorAll(".carte");

let locked = false;
let arrayCard = [];


cartes.forEach(cards =>{
    cards.addEventListener("click", flippedCard)
});

function flippedCard(e){

  if(locked) return;
 saveCard(e.target.children[0],e.target.getAttribute("data-attr"));
if (arrayCard.length === 2) connaissance();
};

function saveCard(el,value){

if (el=== arrayCard[0]?.el){return};
el.classList.add("active");
arrayCard.push({el,value})
};

function connaissance(){

counting()

const firstCard = arrayCard[0].el.parentElement;
const secondCard = arrayCard[1].el.parentElement;
console.log(firstCard,secondCard);

if(firstCard.getAttribute("data-attr") === secondCard.getAttribute("data-attr"))
    {
        firstCard.removeEventListener("click", flippedCard);
        secondCard.removeEventListener("click", flippedCard);
        arrayCard = [] 
    }else{
        locked=true;
        setTimeout(() => {
            arrayCard[0].el.classList.remove("active");
            arrayCard[1].el.classList.remove("active");
            arrayCard = [] 
        locked=false;   
        }, 1000); 
  }

}
 
function randomIMG(){
cartes.forEach(cards =>{    
        const random = Math.trunc(Math.random()*12);
        return cards.style.order = random;
});   
};
randomIMG();


const arrayReturned = [...document.querySelectorAll(".double")];
const score = document.querySelector('.score');
score.innerHTML = "Essaye de faire le moins de tentative possible !"

let scoring = 0
function counting(){
    scoring ++;
    const CheckForEnd = arrayReturned.filter(card => !card.classList.contains("active"))
    score.innerHTML = `<h2> Tentatives : ${scoring}</h2> (pour rejouer "espace") `
   if (!CheckForEnd.length){

       score.innerHTML = `<h2> BRAVO !
       Tentatives : ${scoring} (pour rejouer "espace")
    </h2>
    `
      
   }
}

document.addEventListener("keydown", (e)=>{
    e.preventDefault();
   
    arrayReturned.forEach(cards=>cards.classList.remove("active"))
    
    scoring = 0;

    score.innerHTML = `<h2>
    Tentatives : ${scoring}</h2> (pour rejouer "espace")`;
    cartes.forEach(cards =>{
        cards.addEventListener("click", flippedCard)
    });
    locked=true;
setTimeout(() => {
    randomIMG()
}, 1500);
      locked=false; 

})
