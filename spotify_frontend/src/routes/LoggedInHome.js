import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import TextWithHover from '../components/shared/TextWithHover';
import { useState } from 'react';
import { Howl, Howler } from 'howler';

const focusCardsData = [{title: "Peaceful Piano", description: "Relax and indulge with beautiful piano pieces", imgUrl: "https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"}, 
                        {title: "Deep Focus", description:"Keep calm and focus with this music", imgUrl: "https://th.bing.com/th/id/OIP.g9Jwe_5ocfeJFUpfSiRm9QHaD4?w=1200&h=630&rs=1&pid=ImgDetMain"}, 
                        {title: "Instrumental Study", description:"Focus with soft study music in the background", imgUrl: "https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"}, 
                        {title: "Focus Flow", description:"Uptempo instrumental hip hop beats", imgUrl: "https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"}, 
                        {title: "Beats to think to", description:"Focus with deep techno and tech music", imgUrl: "https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"}
                    ];

const LoggedInHomeComponent = () => {

    const [soundPlayed, setSoundPlayed] = useState(null);
    const [isPaused, setIsPaused] = useState(true);

    const playSound = (songSrc) => {
        if(soundPlayed){
            soundPlayed.stop();
        }

        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
    
        sound.play();
    }

    const pauseSound = () => {
        soundPlayed.pause();
    }

    const togglePlayPause = () => {
        if(isPaused){
            playSound("https://res.cloudinary.com/du1t9xkxe/video/upload/v1700571700/zslaqhm6wmogqmbhuzgv.mp3");
            setIsPaused(false);
        }
        else{
            pauseSound();
            setIsPaused(true);
        }
    }

    return (
        <div className="h-full w-full bg-app-bg">
            <div className='h-9/10 w-full flex'>
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
                    <PlaylistView titleText="Focus" cardData={focusCardsData}/>
                    <PlaylistView titleText="Spotify Playlists" cardData={focusCardsData}/>
                    <PlaylistView titleText="Sound of India" cardData={focusCardsData}/>

                </div>
                </div>
            </div>
            <div className='h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center p-4'>
                {/* this div is for current playing song */}
                <div className='w-1/4 items-center flex'>
                    <img src='https://th.bing.com/th/id/OIP.OgbcWLJjSasxFdtlt-VoTAHaEZ?w=316&h=187&c=7&r=0&o=5&pid=1.7' alt='currentSongThumbnail' className='h-14 w-14 rounded'/>
                    <div className='pl-4'>
                        <div className='text-sm hover:underline cursor-pointer'>Song name</div>
                        <div className='text-xs text-gray-500 hover:underline cursor-pointer'>Singer name</div>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center h-full flex-col items-center'>
                    <div className='flex w-1/3 justify-between items-center'>
                        {/**this div is for song controls */}
                        <Icon icon="ph:shuffle-light" fontSize={27} className='cursor-pointer text-gray-500 hover:text-white'/>
                        <Icon icon="fluent:previous-24-filled" fontSize={27} className='cursor-pointer text-gray-500 hover:text-white'/>
                        <Icon icon={isPaused?"carbon:play-outline":"carbon:pause-outline"} fontSize={40} className='cursor-pointer text-gray-500 hover:text-white'
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
        </div>
    )
}

const PlaylistView = ({titleText, cardData}) => {
    return (
        <div className="text-white my-5">
            <div className="text-white text-2xl font-semibold cursor-pointer">{titleText}</div>
            <div className="w-full flex space-x-4">

            {
                cardData.map((card) => {
                    return <Card title={card.title} description={card.description} imgUrl={card.imgUrl}/>
                })
            }
            </div>
        </div>
    )
}

const Card = ({title, description, imgUrl}) => {
    return (
        <div className="bg-black opacity-75 w-1/5 p-4 mt-6 rounded-md">
            <div className='py-4'>
                <img className="w-full rounded-md" src={imgUrl}/>
            </div>
            <div className="text-white font-semibold pb-2">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )
}

export default LoggedInHomeComponent;