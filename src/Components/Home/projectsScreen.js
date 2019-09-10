import React, { useState } from "react";
import CardIcon from "../../Icons/grid-icon-blue.svg";
import ListIcon from "../../Icons/list-icon-blue.svg";
import ProjectCard from "./projectCard.js";
import Projects from "../../Constants/projects.json";
import ProjectList from "./projectList.js";
import { detect } from "detect-browser";

export default function LandingScreen() {
    const [hoveringCard, setHoveringCard] = useState(false);
    const [hoveringList, setHoveringList] = useState(false);
    const [view, setView] = useState("card");

    const styles = {
        background: {
            background: "rgba(244,244,244,1)",
            backgroundSize: "100% 100%",
            overflow: "hidden",
            height: "100vh",
            width: "100%",
            textAlign: "center",
            justifyContent: "center"
        },
        projectsContainter: {
            display: "flex",
            background: "rgba(252,252,252,1)",
            flexWrap: "wrap",
            margin: "0 12% 5% 12%",
            padding: "5px",
            overflow: "auto",
            maxHeight: "82%",
            width: "80%",
            justifyContent: "center",
            borderRadius: 15,
            border: "2px solid rgba(0,0,0, .05)"
        },
        headline: {
            color: "rgba(0,138,250, 1)",
            fontSize: "4vmax",
            userSelect: "none",
            width: "auto",
            margin: 0,
            textAlign: "left",
            flexGrow: "4",
            fontFamily: "Open Sans"
        },
        header: {
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "baseline",
            padding: "1% 12% 1.5% 12%",
            margin: "5px 0px 5px 0px",
            height: "8%"
        },
        viewSelector: { flexGrow: "1", textAlign: "right", height: "auto" },
        viewButtons: {
            border: "none",
            outline: "none",
            cursor: "pointer",
            minHeight: "42px",
            minWidth: "42px",
            height: "3vmax",
            width: "3vmax",
            padding: "10px 10px 10px 10px",
            borderRadius: "100%",
            userSelect: "none"
        },
        hovering: {
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            transition: "background-color 200ms ease-out"
        },
        notHovering: {
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            transition: "background-color 200ms ease-out"
        }
    };

    const viewSelector = (
        <div style={styles.viewSelector} className="view-selector">
            <button
                style={
                    hoveringCard
                        ? { ...styles.viewButtons, ...styles.hovering }
                        : { ...styles.viewButtons, ...styles.notHovering }
                }
                onMouseEnter={() => setHoveringCard(true)}
                onMouseLeave={() => setHoveringCard(false)}
                onClick={() => setView("card")}
            >
                <img
                    src={CardIcon}
                    alt="Card View"
                    height="100%"
                    width="100%"
                />
            </button>
            <button
                style={
                    hoveringList
                        ? { ...styles.viewButtons, ...styles.hovering }
                        : { ...styles.viewButtons, ...styles.notHovering }
                }
                onMouseEnter={() => setHoveringList(true)}
                onMouseLeave={() => setHoveringList(false)}
                onClick={() => setView("list")}
            >
                <img
                    src={ListIcon}
                    alt="List View"
                    height="100%"
                    width="100%"
                />
            </button>
        </div>
    );

    const projects = Projects.map((props, index) =>
        view === "card" ? (
            <ProjectCard
                key={index}
                image={
                    detect().name === "safari"
                        ? props.image + "jpg"
                        : props.image + ".webp"
                }
                alt={props.alt}
                description={props.description}
                demo={props.demo}
                repo={props.repo}
            />
        ) : (
            <ProjectList
                key={index}
                image={
                    detect().name === "safari"
                        ? props.image + "jpg"
                        : props.image + ".webp"
                }
                alt={props.alt}
                description={props.description}
                demo={props.demo}
                repo={props.repo}
            />
        )
    );

    return (
        <div className="home-page" id="projects" href="projects">
            <div className="background-image" style={styles.background}>
                <div className="header" style={styles.header}>
                    <h1 className="projects-header" style={styles.headline}>
                        Projects
                    </h1>
                    {viewSelector}
                </div>
                <div
                    className="invisible-scrollbar"
                    style={styles.projectsContainter}
                >
                    {projects}
                </div>
            </div>
        </div>
    );
}
