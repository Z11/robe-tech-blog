import React from "react"
import "./sidebar.css"

import robertoProfileImg from "../../images/robertoProfileImg.png"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={robertoProfileImg} style={{ maxWidth: `200px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{tagline}</small>
        </div>
    )
}

export default Bio