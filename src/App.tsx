import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/404/NotFound";
import { Home } from "./pages/home/Home";
import { Components } from "./pages/Components/Components";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/components" element={<Components />}></Route>
        <Route path='/portafolio'></Route>
      </Routes>
    </Router>
  );
}

export default App;
