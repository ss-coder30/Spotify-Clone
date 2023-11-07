import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-6 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />   
            </div>

            <div className="inputRegion w-1/3 flex flex-col justify-center">
                <div className="font-bold mb-6 mt-10 items-center flex flex-col">To continue, login to Spotify</div>

                <TextInput label="Email address or Username" placeholder="Email address or Username" className="w-2/3"/>
                <PasswordInput label="Password" placeholder="Password"/>
            </div>

            <div className="w-1/3 flex justify-end items-center my-8 ">
                <button className="bg-spotify-green font-semibold py-3 px-10 rounded-full">LOG IN</button>
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
