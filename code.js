const btnJuego = document.querySelector(".btn-play");
const btnMezclar = document.querySelector(".btn-mezclar");
const card = document.querySelectorAll(".container-card");
const main = document.querySelector(".main");
let childPosision = [];
let childPosisionRandom = [];
let childrenMain = main.children;

const messCard = ()=>{
    for (let i = 0; i < main.children.length; i++) {
        childPosision.push(i);
    }
    childPosisionRandom = childPosision.sort(function(){
        return  Math.random() - 0.5;
    });
    
    for (let i = 0; i < childPosision.length; i++) {
        main.insertBefore(main.children[childPosisionRandom[i]], main.children[i])
    }
}
btnJuego.addEventListener("click",()=>{
    setTimeout(() => {
        card.forEach(element => {
            element.classList.add("card-rotate");
         });
    }, 0);
        notificacion.classList.remove("visible")
});
btnMezclar.addEventListener("click",messCard)

let cardsAdivinadas = 0;
let e = 0;
let firstElement = null;
card.forEach(element => {
    
    element.addEventListener("click",()=>{
        if(e < 2){
            element.classList.replace("card-rotate","card-rotate-back");
            e++;
            if(firstElement === null){
                firstElement = element;
            }else{
                let indiceFirstElement = Array.prototype.indexOf.call(main.children,firstElement);
                let indiceSecondElement = Array.prototype.indexOf.call(main.children,element);
                if(firstElement.classList.toString() === element.classList.toString() && indiceFirstElement !== indiceSecondElement){
                    cardsAdivinadas++;
                    element.classList.add("card-white");
                    element.style.pointerEvents = "none";
                    firstElement.style.pointerEvents = "none";
                    firstElement.classList.add("card-white")
            }else if(firstElement.classList.toString() !== element.classList.toString() || indiceFirstElement == indiceSecondElement){
                 setTimeout(() => {
                     firstElement.classList.replace("card-rotate-back","card-rotate")
                     element.classList.replace("card-rotate-back","card-rotate");
                 }, 800);
            }
        }
        if(e == 2){
            setTimeout(() => {
                e = 0;
                firstElement = null;
            }, 800);
        }
        terminarJuego();
    }
    });
});
const notificacion = document.querySelector(".container-notificacion")
let ganastePerdiste = true;
const terminarJuego = ()=>{
    if(cardsAdivinadas == 16){
        setTimeout(() => {
            
        }, 1000);
        notificacion.classList.add("visible")
    }
}
terminarJuego();