// FUNÇÃO PARA MUDAR A COR DO HEADER ATRAVÉS DO SCROLL
 
const header = document.querySelector('#header-section-id');
let scroll = 0;
function escondeHeader(){
    scroll = window.pageYOffset;

    console.log(scroll);
  
    if(scroll > 1){
      header.style.backgroundColor= "#000"


    } else if(scroll < 200){
      header.style.backgroundColor= "transparent"
    }
}


// FUNÇÃO HAMBURGUER

const menu = document.querySelector(".menu");
var menuAberto = false; 

menu.addEventListener('click', () => {
  
  const nav = document.querySelector("nav");
  if(menuAberto) {
    nav.style.display ='none';
    menuAberto = false;
  } else {
    nav.style.display = 'flex';
    menuAberto = true;

    
  }

})



