import React from "react";
import LandingScreen from "./landingScreen.js";
import ProjectsScreen from "./projectsScreen.js";

export default function Home() {
    return (
        <div className="home-page">
            <LandingScreen />
            <ProjectsScreen />
        </div>
    );
}
