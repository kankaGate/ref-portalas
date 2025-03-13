import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef(null);
  const [enteredName, setEnteredName] = useState("unknown entity");

  function handleClick() {
    if (playerName.current && playerName.current.value.trim() !== "") {
      setEnteredName(playerName.current.value);
      playerName.current.value = "";
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleClick();
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName}</h2>
      <p>
        <input type="text" ref={playerName} onKeyDown={handleKeyDown} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
