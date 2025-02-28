import { useState } from "react";

export default function CalculaIMC(){
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [IMC, setIMC] = useState(0);
    return (
        <>
           <h1>Calcula IMC</h1>
           <div>
                <label htmlFor="">Informe o peso</label>
                <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Informe a altura</label>
                <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                />
            </div>


                  <button onClick={() => setIMC(Number(peso) /   (Number(altura) * Number(altura)))}>
        Calcula IMC
      </button>


      {IMC > 0 && (
        <h1
          style={{
            backgroundColor: IMC >= 25 ? 'red' : 'blue',
          }}
        >

            {IMC < 18.5 && (
                <h1>MAGREZA</h1>
            )
            }
            {IMC < 24.9 && IMC > 18.5 && (
                <h1>NORMAL</h1>
            )

            }
            {IMC < 29.9 && IMC > 24.9 && (
                <h1>SOBREPESO</h1>
            )

            }
            {IMC < 39.9 && IMC > 30.0 && (
                <h1>OBESIDADE</h1>
            )

            }
            {IMC > 39.9 && (
                <h1> OBESIDADE GRAVE</h1>
            )
            }
          Resultado: {IMC}
        </h1>
      )}
        </>
    )
}