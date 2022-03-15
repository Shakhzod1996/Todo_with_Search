let form = document.querySelector('.form')
let input = document.querySelector('.input')
let ul = document.querySelector('.ul')
let trash = document.querySelector('.trash')

let all = document.querySelector('.all')
let check = document.querySelector('.check')
let uncheck = document.querySelector('.uncheck')
let filter = document.querySelector('.absolute-filter');
let search = document.querySelector('.search')

form.addEventListener('submit', formSubmit);

search.addEventListener('keyup', filterItems)




// AddFunction
function formSubmit(e) {
    e.preventDefault()
    let li = document.createElement('li')
    li.classList.add('li')
    li.innerHTML = `${input.value} `
    ul.appendChild(li)

    if (!input.value) {
        alert('Please enter your plan');
        li.remove()
    } else {
        console.log('Success');
    }

    // Creating Compete btn
    let completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fa-regular fa-circle-check mar-r"></i>'
    completeBtn.classList.add('completeBtn')
    li.appendChild(completeBtn);

    // CompleteTodo Active
    completeBtn.addEventListener('click', competeTodo);
    function competeTodo() {
        li.classList.toggle('li-checked')
        li.classList.toggle('li-back')
        completeBtn.classList.toggle('completeBtn-checked')
    }


    // Creating Trash Btn
    let trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    trashBtn.classList.add('trash')
    li.appendChild(trashBtn);

    // TrashBtn active 
    trashBtn.addEventListener('click', trashTodo);
    function trashTodo() {
        li.classList.add('li-hide');
        setTimeout(() => {
            li.classList.add('li-delete')
        }, 400)
    }
    filter.addEventListener('click', filterTodo)

    // Filter Todo
    function filterTodo(e) {
        const todos = ul.childNodes;
        todos.forEach(function (todo) {
            switch (e.target.value) {
                case 'all':
                    li.style.display = 'flex'
                    break;

                case 'completed':
                    if (li.classList.contains('li-checked')) {
                        li.style.display = 'flex'
                    } else {
                        li.style.display = 'none'

                    }
                    break;

                case 'uncompleted':
                    if (li.classList.contains('li-checked')) {
                        li.style.display = 'none'
                    } else {
                        li.style.display = 'flex'

                    }
                    break;
            }
        })
    }
    input.value = ''
}

let magnit = document.querySelector('.magnit');
let searchMain = document.querySelector('.search-main');


magnit.addEventListener('click', ()=> {
    searchMain.classList.toggle('search-main-active')
    search.focus()
})

// Search Filter 
function filterItems(e) {
    let text = e.target.value.toLowerCase();
    // console.log(text);
    let items = ul.getElementsByTagName('li')

    for(let i = 0; i < Array.from(items).length; i++) {
        let itemName = items[i].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            items[i].style.display = 'block'
        } else {
            items[i].style.display = 'none'
        }
    }
}








