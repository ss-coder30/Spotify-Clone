import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';

const SignupComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-6 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />   
            </div>
            
            <div className="inputRegion w-1/3 flex flex-col justify-center">
                <div className="font-bold mb-6 mt-10 items-center flex flex-col text-2xl">Signup for free to start listening</div>

                <TextInput label="Email address" placeholder="Email address" className="w-2/3 my-6"/>

                <TextInput label="Confirm Email address" placeholder="Enter your Email address again " className="w-2/3 my-5"/>

                <PasswordInput label="Create Password" placeholder="Create Password" className="mb-6"/>

                <TextInput label="What should we call you?" placeholder="Enter your Profile name " className="w-2/3 my-5"/>

            </div>

            <div className="w-1/3 flex justify-center items-center my-8 ">
                <button className="bg-spotify-green font-semibold py-3 px-10 rounded-full">SIGN UP</button>
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
