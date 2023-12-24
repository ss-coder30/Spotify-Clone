import { useEffect, useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { Navigate, useNavigate } from "react-router-dom";

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
                            playlistId={item._id}
                        />
                    )
                })}
            </div>
        </LoggedInContainer>
    );
}

const Card = ({title, description, imgUrl, playlistId}) => {
    const navigate = useNavigate();
    return (
        <div className="bg-black opacity-75 w-full p-4 mt-6 rounded-md cursor-pointer" onClick={() => {navigate("/playlist/"+playlistId)}}>
            <div className='py-4'>
                <img className="w-full rounded-md" src={imgUrl}/>
            </div>
            <div className="text-white font-semibold pb-2">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )
}

export default Library;