import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const SignupComponent = () => {

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const signUp = async () => {

        if(email !== confirmEmail) {
            alert("Email and Confirm Email fields do not match. Please check again");
            return;
        }

        const data = {email, password, username, firstName, lastName};
        // console.log(data);
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);

        if(response && !response.err){
            const token = response.token;

            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});

            alert("Successfully signed up!");
            navigate("/home");
        }
        else{
            alert("Error signing up. Please try again");
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-6 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />   
            </div>
            
            <div className="inputRegion w-1/3 flex flex-col justify-center">
                <div className="font-bold mb-6 mt-10 items-center flex flex-col text-2xl">Signup for free to start listening</div>

                <TextInput label="Email address" placeholder="Email address" className="w-2/3 my-6" value={email} setvalue={setEmail}/>

                <TextInput label="Confirm Email address" placeholder="Enter your Email address again " className="w-2/3 my-5" value={confirmEmail} setvalue={setConfirmEmail}/>

                <TextInput label="Username" placeholder="Enter your Username" className="w-2/3 my-5" value={username} setvalue={setUsername}/>

                <PasswordInput label="Create Password" placeholder="Create Password" className="mb-6" value={password} setvalue={setPassword}/>

                <div className="w-full justify-between items-center flex space-x-8">
                    <TextInput label="Enter your first name" placeholder="Enter your first name " className="w-2/3 my-5" value={firstName} setvalue={setFirstName}/>
                    <TextInput label="Enter your last name" placeholder="Enter your last name " className="w-2/3 my-5" value={lastName} setvalue={setLastName}/>                   
                </div>
            </div>

            <div className="w-1/3 flex justify-center items-center my-8">
                <button className="bg-spotify-green font-semibold py-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();    
                }}>SIGN UP</button>
            </div>

            <div className="w-1/3 border border-solid border-gray-300">
            </div>

            <div className='my-8 font-semibold text-'>Already have an account?</div>

            <div className="flex flex-col justify-center">
                <Link to="/Login">
                    <button className="font-semibold py-3 px-10 rounded-full border border-solid border-gray-500 text-gray-500 font-bold mb-5">LOG IN INSTEAD</button>
                </Link>
            </div>
        </div>
    )
};

export default SignupComponent;  
