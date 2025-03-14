import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("usuario") || "Visitante";
  const isAuth = !!localStorage.getItem('usuario'); 

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-5 shadow-lg text-center border-0" style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}>
        <h1 className="mb-3 fw-bold text-primary">Bem-vindo, {name}!</h1>

        {!isAuth ? (
          <Link to="/login">            <p className="fs-5 text-muted">Entre para calcular seu IMC e cuidar da sua saúde!</p>

           
          </Link>
        ) : (
          // Exibe uma mensagem personalizada e o botão para ir ao cálculo do IMC
          <>
            <p className="fs-4 text-primary mt-4">
             clique abaixo e calcule seu IMC!
            </p>
            <Button 
              variant="success" 
              size="lg" 
              className="mt-3 px-4 fw-bold shadow-sm"
              onClick={() => navigate("/calcular")}
            >
              Calcular IMC
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Home;
