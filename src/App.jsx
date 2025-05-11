import { useState } from "react";
import "./App.css";
import MensagemDiaDasMaes from "./MensagemDiaDasMaes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MensagemDiaDasMaes />
    </>
  );
}

export default App;
