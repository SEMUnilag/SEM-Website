import * as React from "react";
import NavBar from "../LandingComponents/navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Team from "./Team";
import Blog from "./Blog";
import Mailing from "../LandingComponents/mailing";
import Partners from "../LandingComponents/partners";
import Footer from "../LandingComponents/footer";

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