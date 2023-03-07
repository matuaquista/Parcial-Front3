import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    </div>
  );
}

export default App;

// para la card haces un map de todas las cosas que tengas que mostrar en la card

//ejemplo
/*


renderedCards = appointments.map((appointment) =>{
  return <Card key={la key de cada card}>
      CONTENIDO DE LA CARD
  </Card>
})


*/
