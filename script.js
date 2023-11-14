const list = document.querySelector('#list');

const todos = [
    {
        id: 1,
        text :'Take out trash',
        completed : true
    } ,
    {
        id: 2,
        text :'boss ',
        completed : false
    }
]

list.innerHTML = `
${todos.map(todo => {
    return `<li>
    <input type="checkbox" checked={todo.completed}/>
    <span>${todo.text}</span>
</li>`
}) }`