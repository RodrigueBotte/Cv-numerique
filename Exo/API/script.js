const item = document.querySelector('.banniere-titre')
console.log(item);

// Intro de l'utilisation de fetch , async/await et try/catch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data))
async function enAttente(){
try{


    const reponseJSON = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const reponseJS = await reponseJSON.json()
    console.log(reponseJS, 'objet javascript');
    item.innerHTML =  ` <h1> ${reponseJS.id} - ${reponseJS.title}</h1>
            <p> terminé: ${reponseJS.completed}</p>
        `;
    console.log(item);
}
catch(error){
    console.log(error, "error");
}
}
// enAttente()

const refresh = document.getElementById('refresh')
const resultat = document.getElementById("resultat")

fetch('https://api.unsplash.com/photos/random/?client_id=nmWdD4DvLRQPP_KnvVnN0LbGcLybUycspH_yW5ui86g')
    .then(response => response.json())
    .then(data => console.log(data))

async function getImg() {
try{
    const responseJSON = await fetch("https://api.unsplash.com/photos/random/?client_id=nmWdD4DvLRQPP_KnvVnN0LbGcLybUycspH_yW5ui86g")
    console.log(responseJSON);
    const responseJS = await responseJSON.json()
    console.log(responseJS.description);
    resultat.innerHTML= 
    `
        <img class="img-artist" src="${responseJS.urls.regular}" alt="${responseJS.description}" />
        <h1>Artiste : ${responseJS.user.name}</h1>
        <p>Découvrez son univers: ${responseJS.user.bio?responseJS.user.bio: "Information manquante"}</p>
        <div class="btn">
            <a class="btn-insta" href="https://instagram.com/${responseJS.user.instagram_username}">
            Je découvres sur Instagram</a>
        </div>
    `
}
catch(error){
    console.log(error, "error");
}
}
getImg()
refresh.addEventListener('click', getImg)
