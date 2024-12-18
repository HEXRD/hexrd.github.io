import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Introduction from "./components/Introduction";
import GuiSection from "./components/GuiSection";
import Contributors from "./components/Contributors";
import Funders from "./components/Funders";
import Publications from "./components/Publications";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";

const App = () => (
    <Router>
        <Header />
        <HeroSection />
        <div className="content-container">
            <Introduction />
            <div className="section-divider"></div>
            <GuiSection />
            <div className="section-divider"></div>
            <Publications />
            <div className="section-divider"></div>
            <Documentation />
            <div className="section-divider"></div>
            <Contributors />
            <div className="section-divider"></div>
            <Funders />
        </div>
        <Footer />
    </Router>
);

export default App;
