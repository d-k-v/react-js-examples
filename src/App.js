import "./App.css";
import ToolTipExample from "./examples/tooltip-example";
import FlipExample from "./examples/flip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tooltip" element={<ToolTipExample />} />
          <Route path="/flip-example" element={<FlipExample />} />
        </Routes>
      </BrowserRouter>
      {/* <ToolTipExample /> */}
    </div>
  );
}

export default App;
