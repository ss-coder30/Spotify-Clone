import SingleSongCard from '../components/shared/SingleSongCard';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import { useState, useEffect } from 'react';
import LoggedInContainer from '../containers/LoggedInContainer';

const MyMusic = () => {
    const [songData, setSongData] = useState([]);
    const [soundPlayed, setSoundPlayed] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/song/get/mysongs"
            );
            setSongData(response)
        };
        getData();
    }, []);

    return (
        <LoggedInContainer currentActiveScreen="myMusic">
            <div className="content w-full h-9/10 bg-app-bg p-10 ">
                <div className='text-white text-xl font-semibold pb-4 pl-2'>My Songs</div>
                    <div className='space-y-3 overflow-auto'>
                         {songData.map((item) => {
                             return <SingleSongCard info={item} playSound={() => {}}/>
                         })}
                    </div>
            </div>
        </LoggedInContainer>
    )
}

export default MyMusic;