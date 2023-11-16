import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import TextWithHover from '../components/shared/TextWithHover';

const HomeComponent = () => {
    return (
        <div className="h-full w-full flex">
            {/*this is for left region */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between">
                <div>
                    <div className="logoDiv my-5 ml-3 p-6">
                        <Icon icon="logos:spotify" width={125} /> 

                        <IconText iconName={"material-symbols:home"} displayText={"Home"} active={"yes"}/>  
                        <IconText iconName={"ion:search"} displayText={"Search"}/>  
                        <IconText iconName={"fluent:library-32-regular"} displayText={"Library"}/>  

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
                        <div className="w-3/5 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"}/>
                            <TextWithHover displayText={"Support"}/>
                            <TextWithHover displayText={"Download"}/>
                            <div className="h-1/2 border-r border-white"></div>
                        </div>
                        <div className="w-2/5 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Sign up"}/>
                            <div className="bg-white flex items-center justify-center h-2/3 px-8 rounded-full font-semibold cursor-pointer">
                                Log in
                            </div>
                        </div>
                    </div>
                </div>

            {/*this is for content region */}

                <div className="content w-full h-9/10 bg-app-bg p-8 overflow-auto">
                    <PlaylistView titleText="Focus" cardData=""/>
                    <PlaylistView titleText="Spotify Playlists" cardData=""/>
                    <PlaylistView titleText="Sound of India" cardData=""/>

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

                <Card title="Peaceful Piano" 
                        description="Relax and indulge with beautiful piano pieces" 
                        imgUrl="https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"
                />
                <Card title="Deep Focus" 
                        description="Keep calm and focus with this music" 
                        imgUrl="https://th.bing.com/th/id/OIP.g9Jwe_5ocfeJFUpfSiRm9QHaD4?w=1200&h=630&rs=1&pid=ImgDetMain"
                />
                <Card title="Instrumental Study" 
                        description="Focus with soft study music in the background" 
                        imgUrl="https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"
                />
                <Card title="Focus Flow" 
                        description="Uptempo instrumental hip hop beats" 
                        imgUrl="https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"
                />
                <Card title="Beats to think to" 
                        description="Focus with deep techno and tech music" 
                        imgUrl="https://s3-eu-central-1.amazonaws.com/websites-production/unicaf/wp-content/uploads/2015/10/Her-Campus-Studying-Main-_0.jpg"
                />

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

export default HomeComponent;