import { createContext, useContext, useState } from "react";

const PaginaContext = createContext();

export const PaginaProvider = ({ children }) => {
    const [step, setStep] = useState(1);

    return (
        <PaginaContext.Provider value={{ setStep, step }}>
            {children}
        </PaginaContext.Provider>
    );
};

export const usePagina = () => useContext(PaginaContext);
