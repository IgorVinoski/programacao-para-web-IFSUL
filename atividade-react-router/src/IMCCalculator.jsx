import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";

const IMCCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setBmi(null);
      setCategory("");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Abaixo do peso");
    else if (bmiValue < 24.9) setCategory("Peso normal");
    else if (bmiValue < 29.9) setCategory("Sobrepeso");
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
          <Button variant="primary" onClick={calculateBMI} className="w-100">
            Calcular IMC
          </Button>
        </Form>
        {bmi && (
          <Alert className="mt-3" variant={category.includes("Obesidade") ? "danger" : "success"}>
            Seu IMC é <strong>{bmi}</strong> ({category})
          </Alert>
        )}
      </Card>
    </Container>
  );
};

export default IMCCalculator;