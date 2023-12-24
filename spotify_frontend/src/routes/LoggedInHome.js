import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import TextWithHover from '../components/shared/TextWithHover';
import { useState } from 'react';
import { Howl, Howler } from 'howler';
import LoggedInContainer from '../containers/LoggedInContainer';

const focusCardsData = [{title: "Peaceful Piano", description: "Relax and indulge with beautiful piano pieces", imgUrl: "https://th.bing.com/th/id/OIP._Thl3BrmLng7BVngKPz0WwHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "Deep Focus", description:"Keep calm and focus with this music", imgUrl: "https://th.bing.com/th/id/OIP.3jWkyB0hKYrkdB2TlrVfVQAAAA?w=192&h=192&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "Instrumental Study", description:"Focus with soft study music in the background", imgUrl: "https://th.bing.com/th/id/OIP.AuOylu7gj22EWfGuTHq8wgAAAA?w=216&h=216&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "Focus Flow", description:"Uptempo instrumental hip hop beats", imgUrl: "https://th.bing.com/th/id/OIP.iPw7LtV0PEPW19M39cXGsAHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "Beats to think to", description:"Focus with deep techno and tech music", imgUrl: "https://th.bing.com/th/id/OIP.eLRIqNzAKEBBsWJa3Ax49QHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7"}

                    ];

const spotifyPlaylistData = [{title: "Bollywood Central", description: "Every track you should be listening", imgUrl: "https://th.bing.com/th/id/OIP.yY6kpMbuC-6pb-HHOeYBSQHaHa?w=217&h=216&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "Rock Classics", description:"Best of the rock music", imgUrl: "https://th.bing.com/th/id/OIP.ofipgzGRMeUDTPlCrZtA2AHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "Hot Hits Punjabi", description:"Catch the hottest punjabi tracks", imgUrl: "https://th.bing.com/th/id/OIP.e6j766wge-l0vHi5CjnZzAAAAA?w=184&h=184&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "Trending Valentine", description:"India's ultimate love playlist", imgUrl: "https://th.bing.com/th/id/OIP.Fx-Q5HMO0TbZR0XrE6KKJAHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "Chill Hits", description:"Relax and enjoy", imgUrl: "https://i.scdn.co/image/ab67706f00000002b60db5d1bcdd9c4fd1ebcffe"}
                    ];

const soundOfIndiaData = [{title: "The sound of Mumbai", description: "Songs that unite us", imgUrl: "https://th.bing.com/th/id/OIP.yoNiIReuBPFa76sOQEAU-AHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "The sound of Bengaluru", description:"Songs that unite us", imgUrl: "https://th.bing.com/th/id/OIP.ZWFJLUWwGEf2LV1dUddbCgAAAA?w=166&h=180&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "The sound of Kolkata", description:"Songs that unite us", imgUrl: "https://th.bing.com/th/id/OIP.eub-Tp1ZpGD1TpVx4uW9GQAAAA?w=184&h=184&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "The sound of Delhi", description:"Songs that unite us", imgUrl: "https://th.bing.com/th/id/OIP.GRRyoVB7j9IqacMUIIHnYwHaE5?w=245&h=180&c=7&r=0&o=5&pid=1.7"}, 
                        {title: "The sound of Bengal", description:"Songs that unite us", imgUrl: "https://th.bing.com/th/id/OIP.CSDLKisVCZ1HW1pWf9tKNgHaE8?w=219&h=180&c=7&r=0&o=5&pid=1.7"}
                    ];

const home = () => {
    return (
        <LoggedInContainer currentActiveScreen="home">
            <div className="content w-full h-9/10 bg-app-bg p-8">
                <PlaylistView titleText="Focus" cardData={focusCardsData}/>
                <PlaylistView titleText="Spotify Playlists" cardData={spotifyPlaylistData}/>
                <PlaylistView titleText="Sound of India" cardData={soundOfIndiaData}/>
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