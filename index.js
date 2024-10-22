const display = (value) =>{
   let display = document.getElementById('display-input')
   display.value += value;
}
const solve = () =>{
    let display = document.getElementById('display-input')
    display.value = eval(display.value);
}
const clr = () =>{
    let display = document.getElementById('display-input')
    display.value = ''
}
const del = () =>{
    let display = document.getElementById('display-input')
    display.value = display.value.slice(0,-1)
}