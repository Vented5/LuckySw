import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/404/NotFound";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
