import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import TextWithHover from '../components/shared/TextWithHover';
import SingleSongCard from '../components/shared/SingleSongCard';

const MyMusic = () => {

    return (
        <div className="h-full w-full flex">
            {/*this is for left region */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between">
                <div>
                    <div className="logoDiv my-5 ml-3 p-6">
                        <Icon icon="logos:spotify" width={125} /> 

                        <IconText iconName={"material-symbols:home"} displayText={"Home"}/>  
                        <IconText iconName={"ion:search"} displayText={"Search"}/>  
                        <IconText iconName={"fluent:library-32-regular"} displayText={"Library"}/> 
                        <IconText iconName={"entypo:music"} displayText={"My Music"} active={"yes"}/>  

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

                <div className="content w-full h-9/10 bg-app-bg p-10 overflow-auto">
                   <div className='text-white text-xl font-semibold pb-4 pl-2'>My Songs</div>
                   <div className='space-y-3 overflow-auto'>
                        <SingleSongCard />
                        <SingleSongCard />
                        <SingleSongCard />
                        <SingleSongCard />
                        <SingleSongCard />
                   </div>
                </div>
            </div>

        </div>
    )
}

export default MyMusic;