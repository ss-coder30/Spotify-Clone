import logo from './logo.svg';
import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import { useCookies } from 'react-cookie';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSong from './routes/UploadSong';
import MyMusic from './routes/MyMusic';

function App() {

  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className="w-screen h-screen font-poppins ">
      <BrowserRouter>
          {/* things inside this tag is rendered*/}
        {cookie.token ? (  
          // logged in routes
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/home" element={<LoggedInHomeComponent />} />
          <Route path="/uploadSong" element={<UploadSong />}/>
          <Route path="/myMusic" element={<MyMusic />}/>
          <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
        ) : (
          // logged out routes
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
          <Route path="*" element={<Navigate to="/login"/>} />

          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
