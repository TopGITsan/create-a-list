const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = ()=>{
    const userInput =  input.value;
    console.log(userInput);
    input.value = '';

    const listElem = document.createElement('li');
    const spanElem = document.createElement('span');
    const btnElem = document.createElement('button');

    listElem.appendChild(spanElem);
    spanElem.textContent = userInput;
    listElem.appendChild(btnElem);
    btnElem.textContent = 'Delete';

    ul.appendChild(listElem);

    btnElem.onclick =(e)=>{
        ul.removeChild(listElem);
    }

    input.focus();
}