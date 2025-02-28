import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Titulo from './Titulo';
import Corpo from './Corpo';



function App() {

  const [contador, setContador] = useState(0);



  const mensagemAlerta = (mensagem) => {
    alert(mensagem);
  
  }

  return (
      <><h1>Seja bem vindo ao React </h1><Titulo texto="Usando o componente titulo"/>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>

      <Titulo texto="Usando o componente titulo"/>
        <Corpo mensagemAlerta = {mensagemAlerta} dados={['React', 'Node', 'NPM', 'JSX']} contador={contador}/>
       
      </>
  );
}

export default App;
