import React from "react";

export default function Snackbars(props) {
    const styles = {
        snackbarContainer: {
            position: "fixed",
            bottom: -10,
            right: "10vw",
            width: "10vw",
            minWidth: "120px",
            backgroundColor: "rgba(30, 168, 250, 1)",
            padding: "5px 20px 0px 5px",
            borderRadius: "15px",
            textAlign: "left",
            fontFamily: "'Slabo 27px'",
            fontSize: "calc(20px + .6vmin)",
            overflow: "hidden",
            maxHeight: "60px",
            fontWeight: 500,
            color: "rgba(250, 250, 250, 1)"
        },
        snackbarContainerOpen: {
            height: "6vmax",
            transition: "height 450ms ease-out,min-height 200ms ease-out"
        },
        snackbarContainerClosed: {
            height: "0px",
            transition: "height 300ms ease-in"
        }
    };

    return (
        <div
            style={
                props.open
                    ? {
                          ...styles.snackbarContainer,
                          ...styles.snackbarContainerOpen
                      }
                    : {
                          ...styles.snackbarContainer,
                          ...styles.snackbarContainerClosed
                      }
            }
        >
            {props.message &&
                props.message.replace(
                    /\w\S*/g,
                    str =>
                        str.charAt(0).toUpperCase() +
                        str.substr(1).toLowerCase()
                )}
        </div>
    );
}
