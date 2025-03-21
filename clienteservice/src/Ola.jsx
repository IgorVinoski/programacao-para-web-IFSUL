import { useState } from "react";
function Ola() {
    const [mensagem, setMensagem] = useState("")
    
    const [nome, setNome] = useState("")
    const [profissao, setProfissao]= useState("")


    const getOla = async () => {
        await fetch('http://localhost:3002/')
            .then(response => response.json())
            .then(json => setMensagem(json.mensagem))
            .catch(err => setMensagem(err))
    }

    const enviaDados = async ( ) => {
        await fetch('http://localhost:3002/', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "nome": nome,
                "profissao": profissao
            })
        }).then(response => response.json()).then(json => setMensagem(JSON.stringify(json)));
    }

    return (
        <>
            <h1>
                Mensagem: {mensagem}
                <div>

                    <label htmlFor="">Nome</label>
                    <input type="text" name=""  value = {nome} onChange={e => setNome(e.target.value)} id="" />
                    
                    <label htmlFor="">Profissão</label>
                    <input type="text" name=""  value = {profissao} onChange={e => setProfissao(e.target.value)} id="" />
                </div>
                <button onClick={() => getOla()}>Get Ola</button>
                <button onClick={() => enviaDados()}>Envia Dados</button>

            </h1>
        </>
    )
}

export default Ola;