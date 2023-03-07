import { useState } from "react";
import Card from "./Card";
import "./FormComponent.css";

function FormComponent() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [card, setCard] = useState();

  const handleChangeInput1 = (event) => {
    setInput1(event.target.value);
  };
  const handleChangeInput2 = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input1.length < 3 || input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setCard(undefined);
    } else {
      setCard(<Card nombre={input1} banda={input2} />);
      setError("");
    }
    setInput1("");
    setInput2("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>nombre</div>
        <input value={input1} onChange={handleChangeInput1} />
        <div>Banda favorita</div>
        <input value={input2} onChange={handleChangeInput2} />
        <button id="boton" type="submit">Submit</button>
      </form>
      <div className="Errormessasge">{error}</div>
      {card}
    </div>
  );
}

export default FormComponent;
