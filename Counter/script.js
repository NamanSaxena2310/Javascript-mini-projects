
let  currentValueElem = document.querySelector("#value");


const increment = () =>{
    let value = parseInt(currentValueElem.innerText);
    value = value+1;
    currentValueElem.innerText = value;
}

const decrement = () =>{
    let value = parseInt(currentValueElem.innerText);
    value = value-1;
    currentValueElem.innerText = value;
}