import logo from './logo.svg';
import './output.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';

function App() {
  return (
    <div className="w-screen h-screen font-poppins ">
      <BrowserRouter>
          {/* things inside this tag is rendered*/}
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
