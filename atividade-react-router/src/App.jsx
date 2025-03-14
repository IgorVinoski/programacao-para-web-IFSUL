import 'bootstrap/dist/css/bootstrap.min.css';



import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MenuPublico from './MenuPublico';
import MenuPrivado from "./MenuPrivado"
import Home from "./Home"
import Login from './Login';
import IMCCalculator from './IMCCalculator';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login/>
      }
    ]
  },
  {
    path: "/calcular",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <IMCCalculator />
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
