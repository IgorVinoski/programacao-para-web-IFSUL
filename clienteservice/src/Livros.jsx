import { useState, useEffect } from "react";

function Livros() {

    const [livros, setLivros] = useState([]);

    const pegaLivros = async () => {
        await fetch('http://localhost:3002/livros')
            .then(response => response.json())
            .then(json => setLivros(json))
    }

    const remover = async index => {
        if (window.confirm('Deseja remover este registro?')) {
            await fetch(`http://localhost:3002/livros/${index}`,
                { method: 'DELETE' }
            ).then(response => response.json())
                .then(json => alert(json))
            pegaLivros();
        }
    }

    useEffect(() => {
        pegaLivros();
    }, [])

    return (
        <>
            <h1>Livros</h1>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Editora</th>
                    <th>Ano</th>
                    <th>Remover</th>
                </tr>
                {
                    livros.map((livro, index) => (
                        <tr key={index}>
                            <td>{livro.nome}</td>
                            <td>{livro.editora}</td>
                            <td>{livro.ano}</td>
                            <td><button onClick={()=> remover(index)}>Remover</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Livros;