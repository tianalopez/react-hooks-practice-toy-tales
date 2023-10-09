import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [deletedToyId, setDeletedToyId] = useState("")

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //fetch toys
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(setToys)
    .catch(err => alert(err))
  }, [])

  //callback for formSubmit
  const onFormSubmit = (newObj) => {
    setToys([...toys, newObj])
  }
  //state deleted toy
  const onHandleDelete = (toyId) => {
    setDeletedToyId((id) => toyId)
  }
  //filter deleted toy
  const visibleToys = toys.filter((toy) => (
    toy.id !== deletedToyId
  ))
  //pass in new obj
  const onLike = (updatedObj) => {
    const updatedToys = visibleToys.map((toy) => {
      if (toy.id === updatedObj.id) {
        return updatedObj
      }
      else {
        return toy
      }
  })
    setToys((array) => updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={onFormSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={visibleToys} onHandleDelete={onHandleDelete} onLike={onLike}/>
    </>
  );
}

export default App;
