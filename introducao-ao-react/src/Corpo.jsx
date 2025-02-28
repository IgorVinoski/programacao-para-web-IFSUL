const Corpo = ({mensagemAlerta , dados}) => {
    return (
        <>
            <h1>Componente Corpo</h1>
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
