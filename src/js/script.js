const publicKey = '2ca20e1feb98f89bdd482e93888d175e';
const privateKey = '9be219a5a78419c50c20ef81375c001710151b68';
const timestamp = new Date().getTime();
const hash = SparkMD5.hash(timestamp + privateKey + publicKey)


const buttonRandom = document.querySelector('#btnRandom').addEventListener('click', () => {

    document.querySelector('#img-personagem').style.display = 'none';
    const imagemPersonagem =  document.querySelector('.img-api-personagem');

    imagemPersonagem.style.display = 'block';


    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const characters = data.data.results;
            const randomIndex = Math.floor(Math.random() * characters.length);
            const character = characters[randomIndex];
            const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;

            imagemPersonagem.style.backgroundImage = `url(${imageUrl})`

        })
        .catch(error => {
            console.error('Erro:', error);
        });

})


const comicIds = [22, 3, 4, 90]; // IDs dos quadrinhos desejados

comicIds.forEach((comicId, index) => {

  const url = `https://gateway.marvel.com/v1/public/comics/${comicId}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        const comic = data.data.results[0];
        const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
        const imageContainer = document.querySelector(`#image-container-${index + 1}`);
        const hoverImg = document.querySelector(`.fundo-${index + 1}`);
        const modaImg = document.querySelector(`.modal-img-${index + 1}`);

        imageContainer.style.backgroundImage = `url(${imageUrl})`;
        hoverImg.style.backgroundImage = `url(${imageUrl})`;
        modaImg.src = imageUrl;

        const title = comic.title;
        const description = comic.description;


        document.querySelector(`.titulo-${index + 1}`).innerHTML = title;
        document.querySelector(`.desc-${index + 1}`).innerHTML = description;



        const modal = document.querySelector(`.modal-${index + 1}`);
        const desc = document.querySelector(`.titulo-modal-${index + 1}`).innerHTML = title;


    })
    .catch(error => {
      console.error('Erro:', error);
    });
});


const arrowLeft = document.querySelector('#arrow-left')
const arrowRight = document.querySelector('#arrow-right')

const url = `https://gateway.marvel.com/v1/public/creators?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;



let creatorsData = []; // Armazena os dados dos criadores retornados pela API
let currentIndex = -1; // Índice do criador atualmente exibido

// Função para carregar os dados dos criadores da API da Marvel
function loadCreatorsData() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      creatorsData = data.data.results;
      showRandomCreator(); // Exibe um criador aleatório inicialmente
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}

// Função para exibir um criador aleatório
function showRandomCreator() {
  currentIndex = Math.floor(Math.random() * creatorsData.length);
  displayCreatorInfo();
}

// Função para exibir as informações do criador atualmente selecionado
function displayCreatorInfo() {
    const creator = creatorsData[currentIndex];
    const creatorName = creator.fullName;


    document.querySelector('#nome-criador').textContent = creatorName;
}


// Função para avançar para o próximo criador
function nextCreator() {
  currentIndex = (currentIndex + 1) % creatorsData.length;
  displayCreatorInfo();
}

// Função para voltar para o criador anterior
function previousCreator() {
  currentIndex = (currentIndex - 1 + creatorsData.length) % creatorsData.length;
  displayCreatorInfo();
}

// Event listeners para os botões da esquerda e direita
arrowLeft.addEventListener('click', previousCreator);
arrowRight.addEventListener('click', nextCreator);


// Carrega os dados dos criadores ao carregar a página
loadCreatorsData();





const query = 'Marvel'; // Palavra-chave relacionada à Marvel
const accessKey = 'KgpxSozjlUiGQfDcHNTIrHpHRa357-OoetioqJxx_gY';

// Exemplo de busca de imagens
document.querySelector('.btn-modal-final').addEventListener('click', () => {
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${query}`)
        .then(response => response.json())
        .then(data => {



            const imageUrl = data.urls.regular;
            document.querySelector('.img-modal-final').style.backgroundImage = `url(${imageUrl})`;

            console.log(imageUrl);



        })
        .catch(error => {
            console.error('Erro:', error);
        });

})



const apiKey = 'JdJ7biuLrQZUbAcSvPdeHsXtM0JRlEc4Vx4CNwrOqXDAwMcy0W4r8ANz';
const searchQuery = 'spider-man'; // Palavra-chave para buscar fotos

fetch(`https://api.pexels.com/v1/search?query=${searchQuery}`, {
  headers: {
    Authorization: apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    
    urls = [];
    data.photos.forEach(photo => {
      const imageUrl = photo.src.original;

      urls.push(imageUrl);
      
      
      
    })
    
    document.querySelector('.modal-final').style.backgroundImage = `url(${urls[7]})`

  })
  .catch(error => {
    console.error('Erro:', error);
  });