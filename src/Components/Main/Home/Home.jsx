import FishCarousel from "../Carusels/FishCaruselle/CaruselleFish";
import Allchats from "../Chats/Allchats";
import DogAndCatExp from "../Experiment One/DogAndCatExp";
import FeaturesSection from "../Features/FeaturesSection";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";


function Home() {
    return (
        <>
            <Hero/>
            <DogAndCatExp/>
            <FishCarousel/>
            <Allchats/>
            <FeaturesSection/>
            <Footer />
        </>
    );
}

export default Home;