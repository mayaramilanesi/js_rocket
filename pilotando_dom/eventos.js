// // Eventos

// const h1 = document.querySelector('h1');

// h1.addEventListener('click', print)

// function print() {
//       console.log('print')
// }






// // Eventos

// const h1 = document.querySelector('h1');

// h1.onclick= print;

// function print() {
//       console.log('print')
// }






// argumento event
const input = document.querySelector('input');
input.onkeydown = function(event) {
      console.log(event)
}