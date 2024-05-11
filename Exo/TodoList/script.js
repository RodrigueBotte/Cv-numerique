"use strict"

const form = document.getElementById("form")
const todo = document.getElementById("todo")

form.addEventListener('submit', function(e){
    e.preventDefault()
    const todoValue = todo.value
    console.log(todoValue);
    let item = `
        <div class="item">
            <p>${todoValue}</p>
            <button class="btn-delete">
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="btn-archive">
                <i class="fas fa-check-circle"></i>
            </button>
        </div>
    `
    const listItems = document.querySelector('.list-item')
    listItems.innerHTML+= item
    const btnDelete = document.querySelectorAll('.btn-delete')
    console.log(btnDelete);
    btnDelete.forEach(i=>{
        i.addEventListener('click', function(){
            i.parentElement.remove()
        })
    })
    const btnArchive = document.querySelectorAll('.btn-archive')
    btnArchive.forEach(i =>{
        i.addEventListener('click', function(){
            const parent = i.parentElement
            parent.classList.toggle('done')
        })
    })
    form.reset()
})