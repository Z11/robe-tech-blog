import React from "react"
import {
    FaLinkedin,
    FaGithubSquare,
    FaTwitterSquare
} from "react-icons/fa"
import "./sidebar.css"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-left mt-3 mb-3">
            <a className="text-primary ml-1"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={40} style={{ color: "primary" }} />
                </span>
            </a>
            <a className="text-secondary ml-1"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={40} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-info ml-1"
                href={contacts.twitter}>
                <span title="Twitter">
                    <FaTwitterSquare size={40} style={{ color: "info" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks