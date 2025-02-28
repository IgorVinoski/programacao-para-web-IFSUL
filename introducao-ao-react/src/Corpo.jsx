const Corpo = ({mensagemAlerta , dados, contador}) => {
    return (
        <>
            <h1>Componente Corpo</h1>
            <h1>Contador do Corpó: {contador}</h1>
            <button onClick={ () => mensagemAlerta("Usei a função recebida por props")}>Usando a função mensagem alerta </button>
            {
                dados.map((linha, index) => (
                    <li key={index}>{linha}</li>
                ))
//teste
            }
        </>
    );
}

export default Corpo;
