// setInterval irá rodar uma função N vezes
// depois de x milissegundos

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)
clearInterval(interval)