const SingleSongCard = () => {
    return (
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-md">
            <div className="w-12 h-12 bg-white bg-cover bg-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww")`}}></div>
            <div className="flex w-full">
                <div className="text-white flex flex-col justify-center pl-4 w-5/6">
                    <div className=" cursor-pointer hover:underline">
                        Curtains
                    </div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                        Ed Sheeran
                    </div>
                </div>
                <div className="w-1/6 flex justify-center items-center text-gray-400">
                    3:44
                </div>
            </div>
        </div>
    )
}

export default SingleSongCard;