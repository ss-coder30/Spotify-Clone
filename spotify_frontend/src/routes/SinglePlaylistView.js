import { useParams } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { useEffect, useState } from 'react';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import SingleSongCard from '../components/shared/SingleSongCard';

const SingePlaylistView = () => {
    const { playlistId } = useParams();

    const [playlistDetails, setPlaylistDetails] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await makeAuthenticatedGETRequest("/playlist/get/playlist/" + playlistId);
                setPlaylistDetails(response);
                console.log(response);
            } catch (error) {
                console.error('Failed to fetch playlist:', error);
            }
        };
        getData();
    }, []) 

    return (
        
        <LoggedInContainer currentActiveScreen={"library"}>
            {playlistDetails._id && (
                <div>
                    <div className="text-white p-4 text-xl font-semibold">
                        {playlistDetails.name}
                    </div>
                    <div>
                        {playlistDetails.songs.map((item) => {
                            return <SingleSongCard 
                                info={item} 
                                key={JSON.stringify(item)} 
                                playSound={() => {}}                           
                            />
                        })}
                    </div>
                </div>
            )}
        </LoggedInContainer>
    );
}

export default SingePlaylistView;