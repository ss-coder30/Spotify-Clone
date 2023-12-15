import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import TextWithHover from '../components/shared/TextWithHover';
import { children, useLayoutEffect, useState, useRef } from 'react';
import { Howl, Howler } from 'howler';
import { useContext } from 'react';
import songContext from '../context/songContext';

const LoggedInContainer = ({children, currentActiveScreen}) => {

    const {currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused} = useContext(songContext);

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        // the following line is to stop the useEffect from re-rendering
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }

        if(!currentSong){
            return;
        }
        changeSong(currentSong.track);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong && currentSong.track]);

    const playSound = () => {
        if(!soundPlayed){
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songSrc) => {
        if(soundPlayed){
            soundPlayed.stop();
        }

        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
    
        sound.play();
        setIsPaused(false);
    }

    const pauseSound = () => {
        soundPlayed.pause();
    }

    const togglePlayPause = () => {
        if(isPaused){
            playSound();
            setIsPaused(false);
        }
        else{
            pauseSound();
            setIsPaused(true);
        }
    }

    return (
        <div className="h-full w-full bg-app-bg">
            <div className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
                {/*this is for left region */}
                <div className="h-full w-1/5 bg-black flex flex-col justify-between">
                <div>
                    <div className="logoDiv my-5 ml-3 p-6">
                        <Icon icon="logos:spotify" width={125} /> 

                        <IconText iconName={"material-symbols:home"} displayText={"Home"} active={currentActiveScreen === "home"} targetLink={"/home"}/>  
                        <IconText iconName={"ion:search"} displayText={"Search"} active={currentActiveScreen === "search"}/>  
                        <IconText iconName={"fluent:library-32-regular"} displayText={"Library"} active={currentActiveScreen === "library"}/> 
                        <IconText iconName={"entypo:music"} displayText={"My Music"} targetLink={"/myMusic"} active={currentActiveScreen === "myMusic"}/>  

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
                    {children}
                </div>
                </div>
            </div>
        {currentSong && 
                <div className='h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center p-4'>
                {/* this div is for current playing song */}
                <div className='w-1/4 items-center flex'>
                    <img src={currentSong.thumbnail} alt='currentSongThumbnail' className='h-14 w-14 rounded'/>
                    <div className='pl-4'>
                        <div className='text-sm hover:underline cursor-pointer'>{currentSong.name}</div>
                        <div className='text-xs text-gray-500 hover:underline cursor-pointer'>{currentSong.artist.firstName + " " + currentSong.artist.lastName}</div>
                        
                    </div>
                </div>
                <div className='w-1/2 flex justify-center h-full flex-col items-center'>
                    <div className='flex w-1/3 justify-between items-center'>
                        {/**this div is for song controls */}
                        <Icon icon="ph:shuffle-light" fontSize={27} className='cursor-pointer text-gray-500 hover:text-white'/>
                        <Icon icon="fluent:previous-24-filled" fontSize={27} className='cursor-pointer text-gray-500 hover:text-white'/>
                        <Icon icon={isPaused?"carbon:play-filled":"carbon:pause-filled"} fontSize={40} className='cursor-pointer text-gray-500 hover:text-white'
                            onClick={togglePlayPause}
                        />
                        <Icon icon="fluent:next-24-filled" fontSize={27} className='cursor-pointer text-gray-500 hover:text-white'/>
                        <Icon icon="ph:repeat-fill" fontSize={27}  className='cursor-pointer text-gray-500 hover:text-white'/>
                    </div>
                    <div>
                        {/**this div is for song progress */}

                    </div>
                </div>

                <div className='w-1/4 flex justify-end'>
                    Hello
                </div>
                
            </div>
        }
        </div>
    )
}

export default LoggedInContainer;