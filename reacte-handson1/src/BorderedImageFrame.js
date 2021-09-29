import React from "react"

export default function BorderedImageFrame(prop) {
    const styles = {
        border: "5px dotted",
        borderColor: "red"
    }
    return (
        <div style={styles}>
            <img src ={prop.img} alt="test"></img>
        </div>
    )
}