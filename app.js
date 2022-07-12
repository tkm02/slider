let slider = document.getElementsByClassName("slider");
let suivant = document.querySelector(".suivant");
let precedent = document.querySelector(".precedent");

let etap = 0 ;

let nbre__slider= slider.length;

function enleverClass(){
    for(let i = 0; i < nbre__slider; i++){
        slider[i].classList.remove('active');
    }
};

suivant.addEventListener('click',function(){
    etap++;
    if(etap >= nbre__slider){
        etap=0;
    }
    enleverClass();
    slider[etap].classList.add("active");
});
precedent.addEventListener('click',function(){
    etap--;
    if(etap < 0){
        etap =nbre__slider-1;
    }
    enleverClass();
    slider[etap].classList.add('active')
});
setInterval(() =>{
    etap++;
    if(etap >= nbre__slider){
        etap=0;
    }
    enleverClass();
    slider[etap].classList.add("active");
},3000)


