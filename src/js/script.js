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








