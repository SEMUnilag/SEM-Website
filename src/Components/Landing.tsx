import * as React from "react";
import NavBar from "./LandingComponents/navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Team from "./Team/Team";
import Blog from "./Blog/Blog";
import Mailing from "./LandingComponents/mailing";
import Partners from "./LandingComponents/partners";
import Footer from "./LandingComponents/footer";

const Landing = ()=> {
    return (
        <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Team />
        <Blog />
        <Mailing />
        <Partners />
        <Footer />
        </>
    )
};

export default Landing;