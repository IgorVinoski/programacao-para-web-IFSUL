import withAuth from "./withAuth";

const Usuario = () => {
    return (
        
        <>
        
            <h1>Dados do usuário</h1>
            <h2>Usuario:  {localStorage.getItem("usuario")}</h2>
            <button onClick={() => {
                localStorage.setItem("usuario", "Igor")
            }}>Gravar</button>

        </>
    )
}




export default withAuth(Usuario);