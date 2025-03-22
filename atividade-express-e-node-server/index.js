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
    const { nome, peso, idade, altura } = request.body;
    if (nome && peso && idade && altura) {
        const alturaEmMetros = altura / 100;
        const imc = peso / (alturaEmMetros * alturaEmMetros);
        let classificacao = obterClassificacaoIMC(imc);
        listaImc.push({ nome: nome, imc: imc, classificacao: classificacao });

        return response.status(201).json({ nome: nome, imc: imc, classificacao: classificacao });
    } else {
        return response.status(400).json("Parâmetros de entrada não aceitos.");
    }
}


const getImcs = (request, response) => {
    if(listaImc.length > 0){
        return response.status(200).json(listaImc);

    }else{
        return response.status(200).json([]);

    }
}

const deleteImc = (request, response) => {
    const index = parseInt(request.params.index); 
    console.log(`Tentando excluir IMC com índice: ${index}`);

    const imc = listaImc[index];
    if (imc) {
        listaImc.splice(index, 1);  
        return response.status(200).json("Cálculo IMC removido");
    } else {
        return response.status(400).json("IMC não encontrado.");
    }
};

app.route("/").get(healthCheck)
app.route("/imc").post(calculaImc).get(getImcs)

app.route("/imc/:index").delete(deleteImc)

const porta = 3002;
app.listen(porta, () => {
    console.log('Servidor rodando na porta: ' + porta);
})


function obterClassificacaoIMC(imc) {
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    return classificacao;
}
