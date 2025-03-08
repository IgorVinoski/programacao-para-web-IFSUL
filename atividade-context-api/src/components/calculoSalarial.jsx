import React from "react";
import { useSalario } from "../provider/salarial";
import { useNomeTelefone } from "../provider/nomeTelefone";

export const CalculoSalarial = () => {
    const { hora, valorHora } = useSalario();
    const { nome, telefone } = useNomeTelefone();
    console.log('A HORA: ' + hora)
    const weeklySalary = hora * valorHora;
    const grossSalary = weeklySalary * 5;
    const inss = calculateINSS(grossSalary);
    const netSalary = grossSalary - inss;

    return (
        <div className="container">
            <h2 className="title">Resumo Salarial</h2>
            <table className="salary-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Salário Bruto</th>
                        <th>Desconto INSS</th>
                        <th>Salário Líquido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{nome}</td>
                        <td>{telefone}</td>
                        <td>R$ {grossSalary.toFixed(2)}</td>
                        <td>R$ {inss.toFixed(2)}</td>
                        <td>R$ {netSalary.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const calculateINSS = (salary) => {
    let inss = 0;
    if (salary <= 1518.00) {
        inss = salary * 0.075;
    } else if (salary <= 2793.88) {
        inss = (salary - 1518.00) * 0.09 + (1518.00 * 0.075);
    } else if (salary <= 4190.84) {
        inss = (salary - 2793.88) * 0.12 + (1275.88 * 0.09) + (1518.00 * 0.075);
    } else if (salary <= 8157.41) {
        inss = (salary - 4190.84) * 0.14 + (1396.96 * 0.12) + (1275.88 * 0.09) + (1518.00 * 0.075);
    } else {
        inss = (8157.41 - 4190.84) * 0.14 + (1396.96 * 0.12) + (1275.88 * 0.09) + (1518.00 * 0.075);
    }
    return inss;
};
