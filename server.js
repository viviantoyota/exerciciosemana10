const app = require('./src/app')

const PORT = 3000

app.listen(PORT, function (request, response) {
    console.log("O nosso app esta rodando na porta" + PORT)
})