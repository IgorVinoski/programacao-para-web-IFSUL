import { useState } from "react";
import { useNavigate } from "react-router-dom";
const   Login = () => {
    const [usuario, setUsuario ] = useState('')
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem('usuario')
    return (
        <>
            {
                !isAuth ? 
                (<> 
                    <div>
                        <label htmlFor="">Usuario</label>
                        <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} name="" id="" />
                    </div>
                    <button onClick={() => {

                        localStorage.setItem('usuario', usuario)
                        navigate("/calcular")
                    }}>Login</button>
                </>)
                 :
                (

                    <button  onClick={ () => {
                        localStorage.removeItem('usuario')
                        navigate("/")
                    }}>  Logout</button>
                )
            }
        </>
    )
}


export default Login;