import Player from "../Player/Player";

const Players = ({ players }) => {
    return (
        <div>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
                {/* Map through player data and display each player */}
                {players.map(player => <Player key={player.name} player={player} />)}
            </ul>
        </div>
    );
};

export default Players;