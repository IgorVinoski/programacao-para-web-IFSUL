
import React from "react";
import { AuthContext } from "./providers/auth";
import Profile from "./components/profile";
import Login from "./components/login";

function App() {

  const {user} = React.useContext(AuthContext)
  console.log(user)
  return (
    <div className="App">
      <h1>Ola Mundo</h1>
      <Profile>

      </Profile>
      <Login></Login>
    </div>
  );
}

export default App;
