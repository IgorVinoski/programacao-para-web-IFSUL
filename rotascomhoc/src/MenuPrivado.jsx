import {NavLink, Outlet} from "react-router-dom"
const MenuPrivado = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink exact='true' to='/privado'>Home</NavLink>
                </li>
                <li>
                    <NavLink exact='true' to='usuario'>Usuario</NavLink>
                </li>
                <li>
                    <NavLink exact='true' to='login'>Logout</NavLink>
                </li>
            </ul>
            <Outlet/>
        </>
    )
}

export default MenuPrivado;