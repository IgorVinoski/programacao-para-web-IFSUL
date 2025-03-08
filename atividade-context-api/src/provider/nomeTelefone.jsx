import React, { createContext, useContext, useState } from "react";

const NomeTelefoneContext = createContext();

export const NomeTelefoneProvider = ({ children }) => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <NomeTelefoneContext.Provider value={{ setNome, nome, setTelefone, telefone }}>
            {children}
        </NomeTelefoneContext.Provider>
    );
};

export const useNomeTelefone = () => React.useContext(NomeTelefoneContext)
