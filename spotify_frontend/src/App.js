import logo from './logo.svg';
import './output.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './routes/Login';

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
          {/* things inside this tag is rendered*/}
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
