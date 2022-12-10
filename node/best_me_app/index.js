const questions = [
      "O que aprendi hoje?",
      "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
      "O que me deixou feliz hoje?",
      "Quantas pessoas eu ajudei hoje?"
]

const ask = ( index = 0 ) => {
      process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => { // stdin(entrada de dados) on(está ouvindo eventos), data(dados que serão ouvidos), vai rodar a função toda vez que ouvir os dados
      answers.push(data.toString().trim())
      // to strind(para transformar o dado em string), trim(para tirar todos os espaços)
      if (answers.length < questions.length) {
            ask(answers.length)
      } else {
            console.log(answers)
            process.exit()
      }
})

process.on('exit', () => {
      console.log(`
      Bacana Mayara!

      O que você aprendeu hoje foi:
      ${answers[0]}

      O que te aborreceu e você poderia fazer melhor foi:
      ${answers[1]}

      O que te deixou feliz hoje:
      ${answers[2]}

      Você ajudou ${answers[3]} pessoas hoje!

      Volte amanhã para novas reflexões.`)
})