// FUNÇÃO PARA MUDAR A COR DO HEADER ATRAVÉS DO SCROLL
 
const header = document.querySelector('#header-section-id');
let scroll = 0;
function escondeHeader(){
    scroll = window.pageYOffset;
  
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




// MODAL QUADRINHO



for (i = 1; i <= 4; i++){

  const modal = document.querySelector(`.modal-${i}`);
  const abreModal = document.querySelector(`.abre-modal-${i}`);
  const fechaModal = document.querySelector(`.fecha-${i}`);
  
  abreModal.addEventListener('click', () => {
  
    modal.style.display = 'flex'
  })
  
  fechaModal.addEventListener('click', () => {
    modal.style.display = 'none';

  })
  
} 



const modalFinal = document.querySelector('.modal-final');
const abreModalFinal = document.querySelector('#shield');
const fechaModalFinal = document.querySelector('.fecha-modal-final');

abreModalFinal.addEventListener('click', () => {

  modalFinal.style.display = 'flex';
})

fechaModalFinal.addEventListener('click', () => {
  modalFinal.style.display = 'none';

})



