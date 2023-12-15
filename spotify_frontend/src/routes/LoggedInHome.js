import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import TextWithHover from '../components/shared/TextWithHover';
import { useState } from 'react';
import { Howl, Howler } from 'howler';
import LoggedInContainer from '../containers/LoggedInContainer';

const focusCardsData = [{title: "Peaceful Piano", description: "Relax and indulge with beautiful piano pieces", imgUrl: "https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"}, 
                        {title: "Deep Focus", description:"Keep calm and focus with this music", imgUrl: "https://th.bing.com/th/id/OIP.g9Jwe_5ocfeJFUpfSiRm9QHaD4?w=1200&h=630&rs=1&pid=ImgDetMain"}, 
                        {title: "Instrumental Study", description:"Focus with soft study music in the background", imgUrl: "https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"}, 
                        {title: "Focus Flow", description:"Uptempo instrumental hip hop beats", imgUrl: "https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"}, 
                        {title: "Beats to think to", description:"Focus with deep techno and tech music", imgUrl: "https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"}
                    ];

const home = () => {
    return (
        <LoggedInContainer currentActiveScreen="home">
            <div className="content w-full h-9/10 bg-app-bg p-8">
                <PlaylistView titleText="Focus" cardData={focusCardsData}/>
                <PlaylistView titleText="Spotify Playlists" cardData={focusCardsData}/>
                <PlaylistView titleText="Sound of India" cardData={focusCardsData}/>
            </div>
        </LoggedInContainer>
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

export default home;