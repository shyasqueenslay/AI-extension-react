import React from "react";
import "./App.css";
import zoomBy from "./actions/zoomIn";
import zoomOut from "./actions/zoomOut";

function App() {
  return (
    <div className="global-extension-container">
      <p>AI assistant</p>
      <button onClick={zoomBy}>Zoom in</button>
      <button onClick={zoomOut}>Zoom out</button>
    </div>
  );
}

export default App;
