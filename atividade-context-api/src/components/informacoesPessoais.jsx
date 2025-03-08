import React from "react";
import { useNomeTelefone } from "../provider/nomeTelefone";
import { usePagina } from "../provider/paginas";

const InformacoesPessoais = () => {
    const { nome, setNome, telefone, setTelefone } = useNomeTelefone();
    const {setStep} = usePagina();
    return (
        <>
            <h2> Dados pessoais: </h2>
            <label>Nome: {nome}</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            <label>Telefone: {telefone}</label>
            <input type="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

            <button onClick={() => setStep(3)}>Avançar</button>
        </>
    );
};

export default InformacoesPessoais;
