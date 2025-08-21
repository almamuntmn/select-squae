import Players from "../Players/Players";

const Body = ({ players }) => {
    return (
        <div>
            <div className="flex items-center justify-between mt-10">
                <h1 className="text-2xl font-semibold">Available Players</h1>
                <div className="flex gap-4 border border-gray-300 rounded-lg py-2 px-4">
                    <button>Available</button>
                    <button>Selected</button>
                </div>
            </div>
            <div className="mt-6">
                {/* Render the Players component and pass the players prop */}
                <Players players={players} />
            </div>
        </div>
    );
};

export default Body;