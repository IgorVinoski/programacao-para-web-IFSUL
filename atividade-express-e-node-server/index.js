const express = require('express')

const cors = require("cors")

const app = express()



app.use(express.json())


app.use(express.urlencoded({extended: false}))

app.use(cors())

let listaImc = [];

const healthCheck = (request, response) => {
    response.status(200).json({status: "All right!"})
}


const calculaImc = (request, response) => {
    const {nome, peso, idade, altura} = request.body;
    if(nome && peso && idade && altura ){
        imc = peso/(altura*altura)
        listaImc.push({nome: nome, imc: imc});

        return response.status(201).json({nome: nome, imc: imc})
    }else{
        return response.status(400).json("Parâmetros de entrada não aceitos.")

    }

    
}

const porta = 3002;
app.listen(porta, () => {
    console.log('Servidor rodando na porta: ' + porta);
})