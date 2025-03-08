import React from "react";
import { usePagina } from "../provider/paginas";


export const Home = () => {

    const {setStep} = usePagina();
    return (
        <>
            <h1>Calculadora Salarial</h1>
            <button onClick={() => setStep(2)}>Iniciar</button>
        </>

    )
}