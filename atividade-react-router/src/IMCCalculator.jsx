import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";

const IMCCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState(null);
  const [category, setCategory] = useState("");

  const IMC = () => {
    if (!weight || !height) {
        setImc(null);
      setCategory("");
      return;
    }

    const heightInMeters = height / 100;
    const valor = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setImc(valor);

    if (valor < 18.5) setCategory("Abaixo do peso");
    else if (valor < 24.9) setCategory("Peso normal");
    else if (valor < 29.9) setCategory("Sobrepeso");
    else setCategory("Obesidade");
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h2 className="text-center">Calculadora de IMC</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Peso (kg)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ex: 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Altura (cm)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ex: 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={IMC} className="w-100">
            Calcular IMC
          </Button>
        </Form>
        {imc && (
          <Alert className="mt-3" variant={category.includes("Obesidade") ? "danger" : "success"}>
            Seu IMC é <strong>{imc}</strong> ({category})
          </Alert>
        )}
      </Card>
    </Container>
  );
};

export default IMCCalculator;