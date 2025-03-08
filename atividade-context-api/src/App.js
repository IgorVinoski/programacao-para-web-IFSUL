import './App.css';
import { CalculoSalarial } from './components/calculoSalarial';
import { Home } from './components/home';
import InformacoesPessoais from './components/informacoesPessoais';
import { InformacoesSalariais } from './components/informacoesSalariais';
import { NomeTelefoneProvider } from './provider/nomeTelefone';
import { PaginaProvider, usePagina } from './provider/paginas';
import { SalarioProvider } from './provider/salarial';


function App() {
  const { step } = usePagina();
  return (
    <div className="App">
        {step === 1 && <Home />}
        <NomeTelefoneProvider> 
        <SalarioProvider>
        {step === 2 &&<InformacoesPessoais />  }
        {step === 3 &&  <InformacoesSalariais/>}
        {step === 4 &&  <CalculoSalarial/>   }
        </SalarioProvider>
        </NomeTelefoneProvider>
        
    </div>
  );
}

export default function Root() {
  return (
    <PaginaProvider>
      <App>
        
      </App>
    </PaginaProvider>
  );
}
