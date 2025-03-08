import { usePagina } from "../provider/paginas";
import { useSalario } from "../provider/salarial";

export const InformacoesSalariais = () => {
    const { hora, setHora, valorHora, setValorHora } = useSalario();
    const { setStep } = usePagina();

    console.log("Hora Atual:", hora, "Valor Hora Atual:", valorHora); // Debug

    return (
        <>
            <h2> Dados salariais: </h2>
            <label>Hora: {hora}</label>
            <input
                type="text"
                value={hora}
                onChange={(e) => setHora(Number(e.target.value))}
            />
            <label>Valor da hora: {valorHora}</label>
            <input
                type="number"
                value={valorHora}
                onChange={(e) => setValorHora(Number(e.target.value))}
            />
            <button onClick={() => setStep(4)}>Avançar</button>
        </>
    );
};
