import { useState } from "react";

function FormComponent() {
  const [name, setName] = useState("");
  const medicos = ["medico1", "medico2"];

  const [medicoSeleccionado, setMedico] = useState('')

  const handleNameChange = (event) => {
    // event.preventDefault();
    setName(event.target.value);
  };

  const submitForm = () => {
    event.preventDefault();
    console.log(`se cambio el nombre a ${name}`);
  };

  return (
    <form>
      <input value={name} onChange={handleNameChange}></input>
      <button type="submit" onClick={submitForm}></button>
      // select con opciones y que manejes las
    </form>
  );
}

export default FormComponent;
