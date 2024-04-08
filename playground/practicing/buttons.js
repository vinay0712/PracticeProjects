const buttons = document.querySelectorAll('button');
const h1 = document.querySelectorAll('h1');
for(let buttonn of buttons){
    buttonn.addEventListener('click',colorize)
}
for(let h1s of h1){
    h1s.addEventListener('click',colorize)
}

function makeRandColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}

function colorize(){
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}