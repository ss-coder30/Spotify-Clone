import React, {useState, useEffect} from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const AddToPlaylistModal = ({closeModal, addSongToPlaylist}) => {

    const [myPlaylists, setMyPlaylists] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlaylists(response);
            console.log(response);
        }
        getData();
    }, []);

    return (
        <div 
            className="absolute bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center rounded-md p-4"
            onClick={closeModal}>
            <div className="bg-app-bg bg-opacity-80 w-1/3 rounded-md p-4" onClick={(e) => {e.stopPropagation()}}>
                <div className="font-semibold text-lg text-white">
                    Select Playlist
                </div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    {myPlaylists.map((item) => {
                        return (
                            <PlaylistListComponent 
                                key={JSON.stringify(item)}
                                info={item}
                                addSongToPlaylist = {addSongToPlaylist}
                            />
                        )
                    
                    })}
                </div>
            </div>
        </div>
    )
};

const PlaylistListComponent = ({info, addSongToPlaylist}) => {
    return (
        <div className="bg-app-bg flex w-full p-4 items-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 cursor-pointer mt-4"
        onClick={() => {addSongToPlaylist(info._id)}}>
            <div>
                <img src={info.thumbnail} alt="playlistThumbnail" 
                    className="h-10 w-10 rounded-md"/>
            </div>
            <div className="text-white font-semibold">
                {info.name}
            </div>
        </div>
    )
}

export default AddToPlaylistModal;