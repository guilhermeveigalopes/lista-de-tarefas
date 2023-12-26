function btnFechar(li)
{
let span = document.createElement("span")
let text = document.createTextNode("\u00D7")
// text.textContent = "\u00D7";

span.className = "close";
span.appendChild(text);
li.appendChild(span);
span.onclick = () => span.parentElement.style.display = "none"
}


document.querySelectorAll('li').forEach(btnFechar);

document.querySelector('ul').addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI')
    e.target.classList.toggle('checked')
});

function addTarefa(){
    let li = document.createElement('LI')
    let tarefa = document.form_main.task.value
    let caixaTarefa = document.createTextNode(tarefa)

    li.appendChild(caixaTarefa)
    document.querySelector('ul').appendChild(li)
    document.form_main.task.value = ""

    btnFechar(li);
}