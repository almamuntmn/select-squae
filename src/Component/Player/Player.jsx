
const Player = ({ player }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 text-left">
            <img className="w-full h-32 object-cover mb-2 rounded-sm" src={player.player_cover} alt={player.name} />
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <img className="w-8 h-8 object-cover rounded-full" src={player.player_img} alt={player.name} />
                    <h3 className="text-lg font-semibold">{player.name}</h3>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-500">{player.country}</p>
                    <p className="text-[12px] text-gray-700 bg-gray-300 px-2 py-1 rounded-sm">{player.category}</p>
                </div>
            </div>
            <hr className="my-2 border-t-1 border-gray-200 w-full mb-3" />
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-[12px] text-gray-500 mb-3">Rating {player.rating}</p>
                    <p className="text-[14px] font-medium text-green-600">Price: ${player.price}</p>
                </div>
                <button className="text-[12px] mt-2 px-4 py-2 rounded border border-gray-300">Choose Player</button>
            </div>
        </div>
    );
};

export default Player;