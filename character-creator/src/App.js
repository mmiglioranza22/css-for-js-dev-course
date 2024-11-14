import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CharacterEditor />
      <Footer />
      <div
        style={{
          backgroundColor: "#dae2e2",
          minHeight: "60vh",
          maxHeight: "60vh",
          width: "100%",
          top: "40vh",
          position: "fixed",
          zIndex: -1,
        }}
      ></div>
    </>
  );
}

export default App;
