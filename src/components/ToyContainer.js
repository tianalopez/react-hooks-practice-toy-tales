import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onHandleDelete, onLike}) {
  const renderToy = toys.map((toy) => (
    <ToyCard key={toy.id} toy={toy} onHandleDelete={onHandleDelete} onLike={onLike}/>
  ))

  return (
    <div id="toy-collection">{renderToy}</div>
  );
}

export default ToyContainer;
