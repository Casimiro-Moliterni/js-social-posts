
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const likedPost = [];

// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// stampa nel dom 
const myContainer = document.querySelector('#container');
console.log(myContainer);
posts.forEach((singlePost) => {
    // const numberLike = addLike(singlePost.likes);
    // console.log(numberLike)
    const templatePost = generatePost(singlePost);
    myContainer.innerHTML += templatePost;
    
    });

    // bottone like in ascolto
const allLikeButton = document.querySelectorAll('.js-like-button');
const allNumberLike = document.querySelectorAll('.likes__counter b')
allLikeButton.forEach((likeButtonDom,index) => {
    likeButtonDom.addEventListener('click',function(){
    //    console.log(this.dataset.postid)
      const relatedButton = allLikeButton[index];
      let relatedNumberLike = allNumberLike[index];
      relatedButton.classList.add('like-button--liked');
      const thisLike = posts[index].likes;
      let userMessage = relatedNumberLike.innerHTML = sumNumbers(thisLike,1);
      let salved = arrayPush( index);
      console.log('post n°: '+ salved);

       likeButtonDom.addEventListener('click',function(){
        relatedButton.classList.remove('like-button--liked');
        relatedButton.classList.add('like-button--liked-red');
       })
    });
});  
    
    // funzione che genera postCard univoci 
    function generatePost(thisPost){
        const {id,content,media,author,likes,created} = thisPost ;
       
       const teamPost = `
       <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            ${generateImg(author.image)}                   
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${author.name}</div>
                            <div class="post-meta__time">${created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                <div class="post__image">
                    <img src="${media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
       `;
       return teamPost;
    };

    // funzione img assente 
     function generateImg (image){
        let imgString;
        if(image){
            imgString = `<img class="profile-pic" src="${image}" alt="Phil Mangione"> `;
        }else{
            imgString = `<span class = "profile-pic-default">LF</span>`;
        }
        return imgString;
     }
// somma numeri 
function sumNumbers(...numbers) {
    let sum = 0;
    numbers.forEach((singleNumber) => {
        sum += singleNumber;
    });

    return sum;
};




// funzione che pusha nell'array 
function arrayPush (index){
  let arrayLikePost= likedPost.push(posts[index].id);
  return arrayLikePost;
};