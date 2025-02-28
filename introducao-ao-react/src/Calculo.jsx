import { useState } from "react";
function Calculo(){

    const [valor1, setValor1 ] = useState(0);
    const [valor2, setValor2 ] = useState(0);
    const [resultado, setResultado] = useState(0);



    return (
        <>
            <div>
                <label htmlFor="">Valor 1</label>
                <input type="number" value={valor1} onChange={e => setValor1(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Valor 2</label>
                <input type="number" value={valor2} onChange={e => setValor1(e.target.value)}/>
            </div>
        </>
   )
}