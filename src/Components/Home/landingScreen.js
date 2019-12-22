import React from "react";
import DownIcon from "../../Icons/downIconGold.svg";

const { detect } = require("detect-browser");
const getFileType = () => {
    if (detect().name === "safari" || detect().name === "ios") {
        return "CodeBackground.jpg";
    } else {
        return "CodeBackground.webp";
    }
};
const CodeBackground = require("../../Images/" + getFileType());

export default function LandingScreen() {
    const styles = {
        backgroundImage: {
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            height: "100vh",
            width: "100%",
            textAlign: "center"
        },
        headline: {
            color: "rgba(255, 252, 252, 0.85)",
            fontSize: "calc(3vmax + 18px)",
            textAlign: "center",
            padding: "calc(8rem + 25px) 0px calc(5rem + 50px)",
            userSelect: "none",
            margin: 0
        },
        downButton: {
            cursor: "pointer",
            border: "0px",
            padding: ".5rem",
            borderRadius: "100%",
            outline: "none",
            minHeight: "76px",
            minWidth: "76px",
            maxHeight: "128px",
            maxWidth: "128px",
            height: "15%",
            width: "15%",
            background: "transparent",
            userSelect: "none",
            transform: "translate(0px, 0px)"
        },
        floatUp: {
            transform: "translate(0px, 25px)",
            transition: "transform 800ms linear"
        },
        floatDown: {
            transform: "translate(0px, -25px)",
            transition: "transform 800ms linear"
        }
    };

    return (
        <div className="home-page" id="title" href="title">
            <div
                className="background-image"
                style={{
                    ...styles.backgroundImage,
                    backgroundImage: `url(${CodeBackground})`
                }}
            >
                <h1 style={styles.headline}>
                    Tackling
                    <br />
                    Problems
                    <br />
                    One Line
                    <br />
                    At A Time
                </h1>
                <button style={styles.downButton} title="Go To Projects">
                    <a href="#projects">
                        <img
                            src={DownIcon}
                            alt="go down to projects"
                            height="100%"
                            width="100%"
                        />
                    </a>
                </button>
            </div>
        </div>
    );
}
