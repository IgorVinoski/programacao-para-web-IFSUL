
import 'bootstrap/dist/css/bootstrap.min.css';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Sobre from './Sobre';
import NotFound from './NotFound';

import Rotas from './Rotas'

import './App.css';

const router = createBrowserRouter([{
  path: "/",
  element: <Menu/>,
  children: [{
    index: true,
    element: <Home/>
  },
  {
    path: "rotas/:id",
    element: <Rotas/>
  },
  {
    path: "rotas",
    element: <Rotas/>
  },
  {
    path: "sobre",
    element: <Sobre/>
  },
  {
    path: "*",
    element: <NotFound/>
  }

]
}])


function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
