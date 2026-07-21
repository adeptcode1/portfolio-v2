import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";

function Home() {
    return (
    <>
        <Navbar />
        <main>
            <Hero />
        </main>
        <Footer />
    </>
    );
}

export default Home;