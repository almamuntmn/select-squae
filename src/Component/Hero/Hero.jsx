import bannerLogo from '../../assets/banner-main.png'
import bg from '../../assets/hero-bg.png'
const Hero = ({ onCoinChange }) => {
    return (
        <div>
            <div className="rounded-xl justify-center flex flex-col items-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", height: "400px", backgroundColor: "black" }}>

                <img className="w-[200px] mb-6" src={bannerLogo} alt="" />

                <h1 className="text-3xl font-bold text-white">Ultimate Dream 11 Cricket Team</h1>
                <p className="mt-4 text-lg text-gray-300 font-light">Beyond Boundaries Beyond Limits</p>
                <button onClick={() => onCoinChange(1500000)} className="mt-6 bg-[#E7FE29] text-black py-2 px-4 rounded-lg">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;