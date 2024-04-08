//----> keyboard events 
// document.querySelector('button').addEventListener('click', function (e) {
//     console.log(e);
// })
// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log("keydown");
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener('keyup', function (e) {
//     console.log("keyup");
// })
// // window.addEventListener('keydown',function(e){
// //     console.log("keydown");
// //     console.log(e.key);
// //     console.log(e.code);
// // })
// window.addEventListener('keydown', function (e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("up");
//             break;
//         case 'ArrowDown':
//             console.log("down");
//             break;
//         case 'ArrowLeft':
//             console.log("left");
//             break;
//         case 'ArrowRight':
//             console.log("right");
//             break;
//         default :
//          console.log("ignored");
//     }
// })
//--> prevent default action on forms
// const bakeryForm = document.querySelector('form');
// const items = document.querySelector('li')
// const input = document.querySelector('input');
// bakeryForm.addEventListener('submit',function(e){
//     e.preventDefault();
  
//     // const item = input.value;
//     const newLi = document.createElement('li');
//     newLi.innerText=`${input.value}`;
//     console.log(newLi)
//     items.append(newLi);
    
// })
//--> another keyboard inputs events
// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');
// // input.addEventListener('change',function(e){
// //     console.log("triggered");
// // })fires when change in an input occurs or when an input blurs
// input.addEventListener('input',function(e){
//     console.log('input done')

//     //    console.log(e); uncomment this line too
//     // h1.innerText = e.data;
//     h1.innerText = input.value;
// })

//--> event bubbling
