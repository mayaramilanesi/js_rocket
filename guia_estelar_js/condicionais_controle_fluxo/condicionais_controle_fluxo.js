// let temperature = 37.4

// if (temperature >= 37.5) {
//       console.log('febre alta')
// } else if(temperature < 37.5 && temperature >= 37) {
//       console.log('Febre moderada')
// } else {
//       console.log('Saudável')
// }



// switch
// let expression = 'a'

// switch (expression) {
//       case 'a':
//             console.log('a')
//             break
//       case 'b':
//             console.log('a')
//             break
//       default:
//             console.log('default')
//             break
// }


// throw
function sayMyName(name = '') {
      if (name === '') {
            throw 'Nome é obrigatório'
      }

      console.log('depois do erro')
}

// try...catch
try {
      sayMyName()
} catch(e) {
      console.log(e)
}