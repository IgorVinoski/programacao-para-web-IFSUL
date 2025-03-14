
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MenuPublico from './MenuPublico';
import MenuPrivado from "./MenuPrivado"
import Home from "./Home"
import Usuario from './Usuario';
import Login from './Login';
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
        path: "usuario",
        element: <Usuario />
      },
      {
        path: "/login",
        element: <Login/>
      }
    ]
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "usuario",
        element: <Usuario />
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
