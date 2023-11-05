import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';

const LoginComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-6 border-b border-solid border-gray-200 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />   
            </div>
            <div className="inputRegion w-1/3 flex flex-col justify-center">
                <div className="font-bold mb-12 mt-10 items-center flex flex-col">To continue, login to Spotify</div>

                <TextInput label="Email address or Username" placeholder="Email address or Username" className="w-2/3"/>
                <PasswordInput label="Password" placeholder="Password"/>
            </div>
        </div>
    )
};

export default LoginComponent;  
