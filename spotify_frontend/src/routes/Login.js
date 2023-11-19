import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';
import {useCookies} from 'react-cookie';

const LoginComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {

        const data = {email, password};
        // console.log(data);
        const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
        
        if(response && !response.err){
            const token = response.token;

            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});

            alert("Successfully logged in!");
            navigate("/home");
        }
        else{
            alert("Error logging in. Please try again");
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-6 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />   
            </div>

            <div className="inputRegion w-1/3 flex flex-col justify-center">
                <div className="font-bold mb-6 mt-10 items-center flex flex-col">To continue, login to Spotify</div>

                <TextInput label="Email address or Username" placeholder="Email address or Username" className="w-2/3" value={email} setvalue={setEmail}/>
                <PasswordInput label="Password" placeholder="Password" value={password} setvalue={setPassword}/>
            </div>

            <div className="w-1/3 flex justify-center items-center my-8 ">
                <button className="bg-spotify-green font-semibold py-3 px-10 rounded-full" onClick={
                    (e) => {
                        e.preventDefault();
                        login();
                    }
                }>LOG IN</button>
            </div>

            <div className="w-1/3 border border-solid border-gray-300">
            </div>

            <div className='my-8 font-semibold text-'>Don't have an account?</div>

            <div className=" flex flex-col justify-center">
                <Link to="/Signup">
                    <button className="font-semibold py-3 px-10 rounded-full border border-solid border-gray-500 text-gray-500 font-bold">SIGN UP FOR SPOTIFY</button>
                </Link>
            </div>
        </div>
    )
};

export default LoginComponent;  
