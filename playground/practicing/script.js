// const images = document.getElementsByTagName('img');
// for(let image of images){
//     image.src ='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }
//-->selection and printing
// const links = document.querySelectorAll('a');
// for(let link of links){
//     console.log(link.href)
// }
//-->selection and manipulating
// const allLinks = document.querySelectorAll('a')
// for(let link of allLinks){
//     link.innerText="Yohoo"
// }
const container = document.querySelector('.container');
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(let i = 1;i<151;i++){
    const divv = document.createElement('div');
    divv.classList.add('divv')
    const newImg = document.createElement('img');
    const number = document.createElement('span')
    number.innerText=`#${i}`;
    newImg.src= `${url}${i}.png`
    divv.appendChild(newImg);
    divv.appendChild(number);
    

    container.appendChild(divv);
}