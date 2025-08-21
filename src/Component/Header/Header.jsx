import logo from '../../assets/logo.png';
import { TbCoinFilled } from "react-icons/tb";

const Header = ({ coin }) => {
    return (
        <div className="flex justify-between items-center sticky top-0 bg-white/30 backdrop-blur-md border-b border-white/20 z-50 mb-6">
            <img src={logo} alt="" />
            <div className="flex gap-12 items-center">
                <nav>
                    <ul className="flex gap-12 text-gray-500 text-md">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Fixture</a></li>
                        <li><a href="#teams">Teams</a></li>
                        <li><a href="#schedules">Schedules</a></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg py-2 px-4">
                    <h2 className="font-semibold">{coin} Coin</h2>
                    <TbCoinFilled className="text-yellow-500 text-xl" />
                </div>
            </div>
        </div>
    );
};

export default Header;