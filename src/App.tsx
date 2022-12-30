import { useState } from "react";
import { Welcome } from "./components/Welcome";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Welcome quizType="Friendship Quiz" />
    </>
  );
}

export default App;
