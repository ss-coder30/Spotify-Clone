import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';
import { useNavigate } from 'react-router-dom';
import LoggedInContainer from '../containers/LoggedInContainer';


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

    return (
        <LoggedInContainer>
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
        </LoggedInContainer>
    )
}

export default UploadSong;