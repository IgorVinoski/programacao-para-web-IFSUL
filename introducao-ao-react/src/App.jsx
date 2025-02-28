import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';
import Corpo from './Corpo';



function App() {

  const mensagemAlerta = (mensagem) => {
    alert(mensagem);
  
  }

  return (
      <><h1>Seja bem vindo ao React </h1><Titulo texto="Usando o componente titulo"/>
      <Titulo texto="Usando o componente titulo"/>
        <Corpo mensagemAlerta = {mensagemAlerta} dados={['React', 'Node', 'NPM', 'JSX']}/>
       
      </>
  );
}

export default App;
