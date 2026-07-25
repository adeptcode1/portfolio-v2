import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About"
import Footer from "../components/layout/Footer";

function Home() {
    return (
    <>
        <Navbar />
        <main>
            <Hero />
            <About />
        </main>
        <Footer />
    </>
    );
}

export default Home;