import { useState } from "react";

import { NavBar } from "../../components/Navbar/Navbar";
import { AnimatedBg } from "../../components/Background/AnimatedBg";

import toothlessDancing from "../../assets/toothless-dancing.gif";

export function NotFound() {
  const [count, setCount] = useState(1);
  const [dragonsito, setDragonsito] = useState<JSX.Element[]>([]);

  const addDragonsito = () => {
    setCount((count) => count + 1);
    setDragonsito((prevDragonsito) => [...prevDragonsito, newDragonsito]);
  };

  let newDragonsito = (
    <img className="flex m-auto mt-10" src={toothlessDancing} alt="" />
  );

  return (
    <>
      <NavBar />
      <AnimatedBg />
      <section style={{ height: "100%", alignContent: "center" }}>
        <h1>404 Not found {count > 1 ? "x" + count : ""}</h1>
        {newDragonsito}
        {dragonsito.map((dragon, i) => (
          <span key={i}>{dragon}</span>
        ))}
        <div style={{ zIndex: "1" }}>
          <button
            onClick={() => {
              addDragonsito();
            }}
          >
            Click me
          </button>
        </div>
      </section>
    </>
  );
}
