import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './projects.js';
import Home from './Home.js';
import DetailProject from './detailProject.js';

function App() {
  return (
    <div style={{ backgroundColor: "#374151", color: "white" }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/project/:id" element={<DetailProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
