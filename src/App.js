import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Adminaddform from "./Components/Adminaddform";
import Editadminform from "./Components/Editadminform";
import Edituserform from "./Components/Edituserform";
import Navbar from "./Components/Navbar";
import Useraddform from "./Components/Useraddform";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
