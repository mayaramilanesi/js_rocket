//getelementById()
// const element = document.getElementById('blog-title');
// console.log(element)




//getelementByClassName()
// const element = document.getElementsByClassName('blog');
// console.log(element)






//getelementByTagName()
// const element = document.getElementsByTagName('h1');
// console.log(element)





//querySelector() (pega o elemento pelo seletor)(encontra o primeiro que achar)
// const element = document.querySelector('.blog');
// console.log(element)






//querySelector() (pega o elemento pelo seletor)(busca todos os elementos que contenham aquele seletor)
// const element = document.querySelectorAll('.blog');
// console.log(element)





// Manipulando conteúdo
// textContent (altera o conteúdo daquele elemento)
// const element = document.querySelector('h1')

// element.textContent += " Olá Devs!"
// console.log(element.textContent)





// Manipulando conteúdo
// innerText (troca o conteúdo do elemento)
// const element = document.querySelector('h1')

// element.innerText = " Olá Devs!"
// console.log(element.innerText)





// Manipulando conteúdo
// innerHTML (troca o conteúdo do elemento)
// const element = document.querySelector('h1')

// element.innerHTML = " Olá Devs! <small> !!! </small> "
// console.log(element.innerHTML)






// Manipulando conteúdo
// value (adiciona valor ao input)
// const element = document.querySelector('input')

// element.value = "Valor que eu quiser"






// Manipulando conteúdo
// Atributos (adiciona, pega e remove atributos)
// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerId = document.querySelector('#header')
// console.log(headerId.getAttribute('id'))
// header.removeAttribute('id')






// Alterando estilos in line
// const element = document.querySelector('body')
// element.style.backgroundColor = "violet"
// console.log(element.style.backgroundColor)






// Alterando estilos
//classList
// const element = document.querySelector('body')

// element.classList.add('active', 'green')

// console.log(element.classList)

// element.classList.remove('active')

// element.classList.toggle('active') // se existir ele tira, c não ele adiciona






// Navegando pelos elementos
// parentNode parentElement
// const element = document.querySelector('h1')
// console.log(element.parentNode)






// Navegando pelos elementos
// childNodes children
// const el = document.querySelector('body')
// //console.log(el.childNodes) // traz até os espaços vazios
// //console.log(el.children) // elimina os espaços vazios
// //console.log(el.firstChild) // pega o primeiro elemento filho(podme ser spaço vazio)
// //console.log(el.firstElementChild)// pega o primeiro elemento filho
// //console.log(el.lastChild)// pega o último elemento
// console.log(el.lastElementChild) // pega o último elemento desconsiderando espaços







// Navegando pelos elementos

// const el = document.querySelector('body')
// console.log(el.nextSibling)// pega o próximo elemento considerando os espaços

// console.log(el.nextElementSibling)// pega o próximo elemento sem considerar os espaços






// Criando e adicionando elementos

// createElement
// const div = document.createElement('div')
// div.innerText = "Olá devs!"

// const body = document.querySelector('body')
// body.append(div) // adiciona depois
// body.prepend(div) // adiciona antes






// Adicionando elementos
const div = document.createElement('div')
div.innerText = "Olá devs!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)
