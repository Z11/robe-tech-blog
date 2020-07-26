import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MobileBio from "../components/header/MobileBio"
import { FaRocket, FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["react", "nodejs", "html", "css"]
    const tags = {}
    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <MobileBio author={'Roberto Chupin'} />
                        <h2 className="heading">About</h2>
                        <p>Welcome to my blog !!! this website shows the interesting projects that I am working on and my insight on tech topics. Feel free to look around :)</p>
                        <br />
                        <h4>Things you will learn in this blog website:</h4>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Cool features in specific programming languages</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="prism">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Guides in building apps and websites</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="icons">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Cloud Services that will benefit your design</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="mobile">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Learn about Developer Tools that optimize your productivity</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaRocket size={26} style={{ color: "gray" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Use these categories to search for topics that you are interested in:</p>
                            <div className="ml-5">
                                <TechTag tag="react" tech="React" name={tags["react"]} size={20} color="deepskyblue" />
                                <TechTag tag="nodejs" tech="Node.js" name={tags["nodejs"]} size={20} color="lightgreen" />
                                <TechTag tag="html" tech="HTML" name={tags["html"]} size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name={tags["css"]} size={20} color="teal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech 
                    name 
                    size 
                    color
                }
            }
        }
    }
`

export default AboutPage

