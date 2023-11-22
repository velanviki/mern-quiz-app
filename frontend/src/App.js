import './App.css';
import CreateQuestion from './components/CreateQuestion';
import EditQuestion from './components/EditQuestion';
import Cards from './components/Cards';

import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/createQuestion" element={<CreateQuestion />} />
        <Route path="/editQuestion" element={<EditQuestion />} />
      </Routes>
    </div>

  );
}

export default App;
