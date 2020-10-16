const games = require('../models/games.json')


const atualizar = (request, response) => {
    const gameAtualizado = request.body
    const name = parseInt(request.params.name)

    const gameName = games.map(games => games.name)
    
    const atualizaName = gameName.indexOf(name)

    const gameAtualizadoaName = {name, ...gameAtualizado}
    games.splice(atualizaName, 1, gameAtualizadoaName)

    response.status(200).send(games.find(games => games.name === name))
    console.log(games)
     

}

const update = (request, response) => {
    const gamesAtualizacao = request.body
    const name = parseInt(request.params.name)
    const gamesParaAtualizar = games.find(games => games.name == name)


   

    Object.keys(gamesAtualizacao).forEach((chave) => {
        gamesParaAtualizar[chave] = gamesAtualizacao[chave]
    })

    response.status(200).send(gamesParaAtualizar)
}

const atualizarCompanyporId = (request, response) => {
    const companyAtualizado = request.body
    const company = parseInt(request.params.company)

    const gameCompany = company.map(company=> id.company)
    
    const atualizaIdporCompany= gameCompany.indexOf(company)

    const gameAtualizadoId= {name, ...nameAtualizado}
    games.splice(atualizaIdporCompany, 1, gameAtualizadoId)

    response.status(200).send(games.find(games => games.name === name))
    console.log(games)
     
}

const updateCompany = (request, response) => {
    const companyAtualizacao = request.body
    const company = parseInt(request.params.company)
    const gamesParaAtualizar = games.find(games => games.company == company)


   

    Object.keys(companyAtualizacao).forEach((chave) => {
        gamesParaAtualizar[chave] = gamesAtualizacao[chave]
    })

    response.status(200).send(gamesParaAtualizar)
}



module.exports = {
    atualizar,
    update,
    atualizarCompanyporId,
    updateCompany
    
}

/*Profa linda, eu segui no mesmo modelo de codigo feito em aula, pois eu ainda tenho muita dificuldade em criar
meus propios codigos, estou trabalhando pra melhorar isso o quanto antes, nao vou desistir de conseguir ainda!! */