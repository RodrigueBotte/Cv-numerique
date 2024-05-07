"use strict"

const postsContainer = document.querySelector('.posts')
const post = {
    titre: "SEO, les bonnes pratiques",
    hashtag: "#SEO",
    extrait: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores itaque laborum necessitatibus eum voluptatem, corrupti tempora nostrum facilis perspiciatis sequi assumenda inventore a perferendis, velit iure minus? Sint, voluptates?"
}
const posts = [{
    titre: "SEO, les bonnes pratiques",
    hashtag: "#SEO",
    extrait: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores itaque laborum necessitatibus eum voluptatem, corrupti tempora nostrum facilis perspiciatis sequi assumenda inventore a perferendis, velit iure minus? Sint, voluptates?"
},
{
    titre: "Bien débutr en référencement payant",
    hashtag: "#referencement",
    extrait: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores itaque laborum necessitatibus eum voluptatem, corrupti tempora nostrum facilis perspiciatis sequi assumenda inventore a perferendis, velit iure minus? Sint, voluptates?"
},
{
    titre: "Content Marketing, les bons arguments",
    hashtag: "#content-marketing",
    extrait: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, asperiores itaque laborum necessitatibus eum voluptatem, corrupti tempora nostrum facilis perspiciatis sequi assumenda inventore a perferendis, velit iure minus? Sint, voluptates?"
}]
console.log(posts);
posts.forEach(item => {
    const article = `
    <div class="post">
        <div class="post-titre">${item.titre}</div>
        <div class="post-extrait">${item.extrait}</div>
        <div class="post-hashtag">${item.hashtag}</div>
    </div>
    `
    console.log(article);
    postsContainer.innerHTML += article
})