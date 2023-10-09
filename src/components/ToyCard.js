import React from "react";

function ToyCard({toy, onHandleDelete, onLike}) {
  //delete function
  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .catch(err => alert(err))
    onHandleDelete(toy.id)
  }
  //like function
  const handleLike = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({likes: toy.likes + 1})
    })
    .then(r => r.json())
    .then(data => onLike(data))
    .catch(err => alert(err))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
