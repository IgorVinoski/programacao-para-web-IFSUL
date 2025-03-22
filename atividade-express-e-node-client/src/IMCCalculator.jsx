import { useState, useEffect } from "react";
import { Container, Form, Button, Alert, Card, Table } from "react-bootstrap";

const IMCCalculator = () => {
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState("");
    const [listaImc, setListaImc] = useState([]);
    useEffect(() => {
        getImcs();
    }, [])
    const getImcs = async () => {
        await fetch('http://localhost:3002/imc') 
            .then(response => response.json())
            .then(json => {
                if (Array.isArray(json)) {
                    setListaImc(json);
                } else {
                    console.log(json);
                }
            })
            .catch(err => console.error("Erro ao buscar IMCs:", err));
    };

    const enviaDados = async () => {
        await fetch('http://localhost:3002/imc', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                peso: parseFloat(peso),
                altura: parseFloat(altura),
                nome: "Usuário",  
                idade: 25         
            })
        })
        .then(response => response.json())  
        .then(json => {
            setImc(json.imc);
            setClassificacao(json.classificacao);
            getImcs();
        })
        .catch(error => {
            console.error("Erro ao calcular IMC:", error);
        });
    };

    const deleteImc = async (index) => {

        console.log(`Excluindo IMC de índice: ${index}`); 

        await fetch(`http://localhost:3002/imc/${index}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(() => {
            getImcs();
        })
        .catch(error => {
            console.error("Erro ao deletar IMC:", error);
        });
    };

    useEffect(() => {
        getImcs();
    }, []);

    return (
        <>
        <Container className="mt-5">
            <Card className="p-4 shadow-sm">
                <h2 className="text-center">Calculadora de IMC</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Peso (kg)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ex: 70"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Altura (cm)</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ex: 170"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        onClick={enviaDados}
                        className="w-100"
                        disabled={!peso || !altura}
                    >
                        Calcular IMC
                    </Button>
                </Form>
                {imc && (
                    <Alert className="mt-3" variant={classificacao.includes("Obesidade") ? "danger" : "success"}>
                        Seu IMC é <strong>{imc}</strong> ({classificacao})
                    </Alert>
                )}
            </Card>
            
            {}
            <Card className="mt-4 shadow-sm">
                <h4>Lista de IMCs</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>IMC</th>
                            <th>Classificação</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaImc.map((imc, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{imc.nome}</td>
                                <td>{imc.imc}</td>
                                <td>{imc.classificacao}</td>
                                <td><button onClick={()=> deleteImc(index)}>Remover</button></td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Container>
        </>
    );
};

export default IMCCalculator;
