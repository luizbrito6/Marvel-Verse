// FUNÇÃO PARA MUDAR A COR DO HEADER ATRAVÉS DO SCROLL
 
const header = document.querySelector('#header-section-id');


let scroll = 0;
function escondeHeader(){
    scroll = window.pageYOffset;

    console.log(scroll);
  
    if(scroll > 100){
      header.style.backgroundColor= "#000"


    } else if(scroll < 200){
      header.style.backgroundColor= "transparent"
    }
}