const express = require('express')

const cors = require('cors')

//instancia do express
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());


const ola = (request, response) => {
    response.status(200).json({ mensagem: "seja bem vindo ao express" })
}
const sobre = (request, response) => {
    response.status(201).json({ mensagem: "API de exemplo em PW", ano: 2025 })
}
const pegaDados = (request, response) => {
    const { nome, profissao } = request.body;
    response.status(200).json({
        "nomerecebido:": nome,
        "profissaorecebida": profissao,
        "mensagem": "Dados processados com sucesso"
    })
}
let listaLivros = [{ nome: "Serviços com Express", editora: "Moderna", ano: 2025 },
                   { nome: "React 19", editora: "META", ano: 2025 },
                   { nome: "Java Script", editora: "Moderna", ano: 2022 }
]

const getLivros = (request, response) => {
    response.status(200).json(listaLivros);
}

const addLivro  = (request, response) => {
    const {nome, editora, ano} = request.body
    if(nome.length > 0 && editora.length > 0 && ano != null){
        listaLivros.push({nome: nome, editora: editora, ano: ano});
        return response.status(200).json("Livro adicionado com sucesso.");
        
    }else{
        return response.status(403).json("Parâmetros de entrada não aceitos")
    }
}

const getLivroPorIndice = (request, response ) => {
    const index = (parseInt(request.params.index));
    let livro = listaLivros[index];
    if (livro){
        return response.status(200).json(listaLivros[index]);
    }else{
        return response.status(400).json("Livro nao encontrando");
    }
}

const apagaLivroPorIndice = (request, response) => {
    const  index = (parseInt(request.params.index));
    const livro = listaLivros[index];
    if (livro){
        listaLivros.splice(index, 1);
        return response.status(200).json("Livro removido. ")
    }else{
        return response.status(400).json("Livro não encontrado.")
    }
}

app.route("/livros").get(getLivros).post(addLivro);

app.route("/livros/:index").get(getLivroPorIndice).delete(apagaLivroPorIndice)

app.route("/")
    .get(ola)
    .post(pegaDados)

app.route("/sobre").get(sobre)

app.listen(3002, () => {
    console.log('Servidor rodando na porta: 3002')
})