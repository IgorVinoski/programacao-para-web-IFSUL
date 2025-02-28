import { useState } from "react";

export default function Exibir(){
    const [exibir, setExibir] = useState(false);


    return (
        <>
        <h1>Exibir condicional</h1>
            {
            !exibir &&
            <>
                <h1>Exibir quando é false</h1>
                <button onClick={() => setExibir(true)}>Passar a exibir para true

                </button>
            </>
            }

            {
            exibir &&
            <>
                <h1>Exibir quando é true</h1>
                <button onClick={() => setExibir(false)}>Passar a exibir para false

                </button>
            </>
            }
        </>
    )
}