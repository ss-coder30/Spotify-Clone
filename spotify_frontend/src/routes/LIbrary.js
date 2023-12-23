import { useEffect, useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const Library = () => {

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
        <LoggedInContainer currentActiveScreen={"library"}>
            <div className="text-white p-4 text-xl font-semibold">
                My Playlists
            </div>
            <div className="grid gap-4 grid-cols-5">
                {myPlaylists.map((item) => {
                    return (
                        <Card 
                            key={JSON.stringify(item)}
                            title={item.name}
                            description=""
                            imgUrl={item.thumbnail}
                        />
                    )
                })}
            </div>
        </LoggedInContainer>
    );
}

const Card = ({title, description, imgUrl}) => {
    return (
        <div className="bg-black opacity-75 w-full p-4 mt-6 rounded-md">
            <div className='py-4'>
                <img className="w-full rounded-md" src={imgUrl}/>
            </div>
            <div className="text-white font-semibold pb-2">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )
}

export default Library;