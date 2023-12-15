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
import { useState } from 'react';
import songContext from './context/songContext';

function App() {

  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);


  return (
    <div className="w-screen h-screen font-poppins ">
      <BrowserRouter>
          {/* things inside this tag is rendered*/}
        {cookie.token ? (  
          // logged in routes
        <songContext.Provider value={{currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused}}>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/home" element={<LoggedInHomeComponent />} />
            <Route path="/uploadSong" element={<UploadSong />}/>] = useState(true)
            <Route path="/myMusic" element={<MyMusic />}/>
            <Route path="*" element={<Navigate to="/home"/>} />
          </Routes>
        </songContext.Provider>
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
