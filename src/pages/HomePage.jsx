import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About"
import Skills from "../components/skills/Skills"
import Footer from "../components/layout/Footer";

function HomePage() {
    return (
    <>
        <Navbar />
        <main>
            <Hero />
            <About />
            <Skills />
        </main>
        <Footer />
    </>
    );
}

export default HomePage;