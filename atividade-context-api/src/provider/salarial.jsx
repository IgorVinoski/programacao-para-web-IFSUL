import { createContext, useContext, useState } from "react";

const SalarioContext = createContext();

export const SalarioProvider = ({ children }) => {
    const [hora, setHora] = useState(0);
    const [valorHora, setValorHora] = useState(0);

    return (
        <SalarioContext.Provider value={{ hora, setHora, valorHora, setValorHora }}>
            {children}
        </SalarioContext.Provider>
    );
};

export const useSalario = () => {
    const context = useContext(SalarioContext);
    if (!context) {
        throw new Error("useSalario deve estar dentro de um SalarioProvider");
    }
    return context;
};
