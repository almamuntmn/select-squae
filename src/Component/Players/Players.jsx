import { useState } from "react";
import Player from "../Player/Player";

const Players = ({ players }) => {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [activeTab, setActiveTab] = useState("available");

    const handlePlayerSelect = (player) => {
        if (!selectedPlayers.includes(player)) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    // Filter available players
    const availablePlayers = players.filter(
        player => !selectedPlayers.includes(player)
    );

    return (
        <div>
            <div className="flex items-center justify-between mt-10">
                <h1 className="text-2xl font-semibold">
                    {activeTab === "available" ? "Available Players" : "Selected Players"}
                </h1>
                <div className="flex gap-4 border border-gray-300 rounded-lg py-2 px-4">
                    <button
                        className={activeTab === "available" ? "font-bold bg-amber-300 py-2 px-4 rounded-xl" : ""}
                        onClick={() => setActiveTab("available")}
                    >
                        Available
                    </button>
                    <button
                        className={activeTab === "selected" ? "font-bold bg-amber-300 py-2 px-4 rounded-xl" : ""}
                        onClick={() => setActiveTab("selected")}
                    >
                        Selected {selectedPlayers.length}
                    </button>
                </div>
            </div>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
                {activeTab === "available" &&
                    availablePlayers.map(player => (
                        <Player
                            key={player.name}
                            player={player}
                            onPlayerSelect={handlePlayerSelect}
                        />
                    ))
                }
                {activeTab === "selected" &&
                    selectedPlayers.map(player => (
                        <Player
                            key={player.name}
                            player={player}
                            onPlayerSelect={() => {}}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Players;