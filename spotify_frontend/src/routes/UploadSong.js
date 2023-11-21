import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import TextWithHover from '../components/shared/TextWithHover';
import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';
import { useNavigate } from 'react-router-dom';


const UploadSong = () => {

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();

    {/* submitting song function */}
    const submitSong = async () => {
        const data = {name, thumbnail, track: playlistUrl};
        const response = await makeAuthenticatedPOSTRequest("/song/create", data);
        if(response.error){
            alert("Error in uploading song");
            console.log(response.error);
        }
        else{
            alert("Song uploaded successfully");
            navigate("/home");
        }
    }

    // console.log(window);
    // console.log(window.cloudinary);
    return (
        <div className="h-full w-full flex">
            {/*this is for left region */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between">
                <div>
                    <div className="logoDiv my-5 ml-3 p-6">
                        <Icon icon="logos:spotify" width={125} /> 

                        <IconText iconName={"material-symbols:home"} displayText={"Home"} active={"yes"}/>  
                        <IconText iconName={"ion:search"} displayText={"Search"}/>  
                        <IconText iconName={"fluent:library-32-regular"} displayText={"Library"}/> 
                        <IconText iconName={"entypo:music"} displayText={"My Music"}/>  

                    </div>
                    <div className='ml-5'>
                        <IconText iconName={"ph:plus-fill"} displayText={"Create Playlist"}/>  
                        <IconText iconName={"majesticons:heart"} displayText={"Liked Songs"}/>  
                    </div>
                </div>
                <div className='ml-8 mb-5'>
                    <div className='border border-gray-100 text-white w-2/5 flex rounded-full py-2 px-2 items-center justify-center font-semibold hover:border-white cursor-pointer'>
                        <Icon icon="ph:globe" fontSize={25}/>
                        English
                    </div>
                </div>
            </div>

            {/*this is for right region */}

            <div className="h-full w-4/5">

            {/*this is for navbar region */}

                <div className="navbar w-full h-1/10 bg-app-bg bg-opacity-95 flex items-center justify-end overflow-auto">
                    <div className="h-full w-1/2 flex">
                        <div className="w-2/3 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"}/>
                            <TextWithHover displayText={"Support"}/>
                            <TextWithHover displayText={"Download"}/>
                            <div className="h-1/2 border-r border-white"></div>
                        </div>
                        <div className="w-1/3 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Upload Song"}/>
                            <div className="bg-white flex items-center justify-center h-10 w-10 px-2 rounded-full font-semibold cursor-pointer">
                                SS
                            </div>
                        </div>
                    </div>
                </div>

            {/*this is for content region */}

                <div className="content w-full h-9/10 bg-app-bg p-8 overflow-auto">
                   <div className='text-white text-2xl font-semibold cursor-pointer mb-10'>
                        Upload Your Music
                        <div className='w-full flex space-x-4 my-8'>
                            <div className='w-1/3 text-black'>
                                <TextInput label="Name" labelClassName={"text-white font-sm"} placeholder={"Enter your Song Name"} value={name} setvalue={setName}/>
                            </div>
                            <div className='w-1/3 text-black'>
                                <TextInput label="Thumbnail" labelClassName={"text-white"} placeholder={"Enter your Song Thumbnail"} value={thumbnail} setvalue={setThumbnail}/>
                            </div>
                        </div>
                        <div>
                            {  uploadedSongFileName ? 
                                (<div className='bg-white rounded-full p-3 text-black w-1/3 text-sm'>{uploadedSongFileName.substring(0, 35)}...</div>):
                                (<CloudinaryUpload 
                                    setUrl={setPlaylistUrl} 
                                    setName={setUploadedSongFileName}/>)}
                        </div>
                        <div>
                            <button className='bg-spotify-green rounded-full p-3 my-5 text-black font-semibold text-sm flex items-center justify-center'
                                onClick={submitSong}>
                                Upload Song
                            </button>
                        </div>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default UploadSong;