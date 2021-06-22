


let pBold=0;
let pBold1=0;
let pBold2=0;
let pBold3=0;
let pBold4=0;
let pBold5=0;

// const sectionFun = document.querySelector('.fun');

let play = true;

window.addEventListener('scroll', function(){
    /* valeur du scroll = la hauteur du viewport + le scroll / par la hauteur total du site */

    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

    if(scrollValue > 0.85 && play){

        let timer = setInterval(function(){
            document.querySelector(".pBold").textContent = pBold++;
            
                if(pBold>5){
                    clearInterval(timer);
                    play = false;
                }

        }, 100);

        let timer1 = setInterval(function(){
            document.querySelector(".pBold1").textContent = pBold1++;
            
                if(pBold1>243){
                    clearInterval(timer1);
                    play = false;
                }

        }, 10);

        let timer2 = setInterval(function(){
            document.querySelector(".pBold2").textContent = pBold2++;
            
                if(pBold2>23){
                    clearInterval(timer2);
                    play = false;
                }

        }, 100);

        let timer3 = setInterval(function(){
            document.querySelector(".pBold3").textContent = pBold3++;
            
                if(pBold3>600){
                    clearInterval(timer3);
                    play = false;
                }

        }, 1);

        let timer4 = setInterval(function(){
            document.querySelector(".pBold4").textContent = pBold4++;
            
                if(pBold4>40){
                    clearInterval(timer4);
                    play = false;
                }

        }, 10);

        let timer5 = setInterval(function(){
            document.querySelector(".pBold5").textContent = pBold5++;
            
                if(pBold5>17){
                    clearInterval(timer5);
                    play = false;
                }

        }, 100);
    }

})




