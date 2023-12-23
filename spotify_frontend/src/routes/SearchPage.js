import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import SingleSongCard from '../components/shared/SingleSongCard';

const SearchPage = () => {

    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [songData, setSongData] = useState([]);

    const searchSongs = async () => {
        // search songs from backend
        const response = await makeAuthenticatedGETRequest("/song/get/songname/" + searchText);
        setSongData(response);
    };

    return (
        <LoggedInContainer currentActiveScreen="search">
            <div className="w-full py-6">
                <div className={`w-1/2 p-3 text-sm rounded-full bg-black px-5 flex text-white space-x-3 items-center mb-5 ${isInputFocused ? "border border-white" : ""}`}>
                    <div className="text-xl"><Icon icon="mingcute:search-line"/></div>
                    <input type="text" 
                            placeholder="What do you want to listen to?" 
                            className="w-full bg-black focus:outline-none" 
                            onFocus={() => {setIsInputFocused(true)}}
                            onBlur={() => {setIsInputFocused(false)}} 
                            value={searchText}
                            onChange={(e) => {setSearchText(e.target.value)}}  
                            onKeyDown={(e) => {if(e.key === "Enter"){searchSongs()}}} 
                    />
                </div>

                {/* to show the searched song*/}
                {
                    songData.length > 0 ? (
                        <div>
                            <div className="text-white">Search Results for "{searchText}": </div>
                                {songData.map((item) => {
                                    return <SingleSongCard 
                                            info={item} 
                                                key={JSON.stringify(item)} 
                                                playSound={() => {}}                           
                                            />
                                })}
                        </div>
                    ):(
                        <div className="text-white">Nothing to show here. Please try again</div>
                    )
                }
            </div>
        </LoggedInContainer>
    );
};

export default SearchPage;