import TextInput from "../components/shared/TextInput";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const CreatePlaylistModal = ({closeModal}) => {

    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest("/playlist/create", {
            name: playlistName,
            thumbnail: playlistThumbnail,
            songs:[]
        });
        if(response._id){
            closeModal();
            alert("Playlist created successfully!")
        }
    }

    return (
        <div 
            className="absolute bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center rounded-md p-4"
            onClick={closeModal}>
            <div className="bg-app-bg bg-opacity-80 w-1/3 rounded-md p-4" onClick={(e) => {e.stopPropagation()}}>
                <div className="font-semibold text-lg text-white">
                    Create Playlist
                    <div className='w-full text-black'>
                        <TextInput label="Name" 
                                    labelClassName={"font-sm rounded-md text-white"} 
                                    placeholder={"Playlist Name"} 
                                    value={playlistName} 
                                    setvalue={setPlaylistName}                                        
                        />
                    </div>
                    <div className='w-full text-black'>
                        <TextInput label="Thumbnail" 
                                    labelClassName={"font-sm text-white"} 
                                    placeholder={"Enter your Playlist Thumbnail"} 
                                    value={playlistThumbnail} 
                                    setvalue={setPlaylistThumbnail}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-spotify-green w-1/3 rounded-full flex items-center justify-center text-black p-2 font-semibold cursor-pointer"
                        onClick={createPlaylist}>
                            Create
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePlaylistModal;