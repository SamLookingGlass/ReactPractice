import React from "react"

export default function DisplayMessage(prop) {
    return(
        <div>
        <h1>{prop.message}</h1>
        <h1>{prop.message1}</h1>
        </div>
    )
}

