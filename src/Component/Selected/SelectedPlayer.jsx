import Player from "../Player/Player";

const SelectedPlayer = ({selectedPlayer}) => {
    return (
        <div>
            <h2><Player player={selectedPlayer} /></h2>
        </div>
    );
};

export default SelectedPlayer;