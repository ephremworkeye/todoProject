const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleted = document.querySelector('.delete');
const search = document.querySelector('.search input');


const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center bg-info">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
})

// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    console.log(list.children);
};

search.addEventListener('keyup', () => {
    const term = search.value.trim();
    console.log(term);
    filterTodos(term);
});