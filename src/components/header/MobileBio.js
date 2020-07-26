import React from "react"

import "./header.css"
import robertoProfileImg from "../../images/robertoProfileImg.png"

const MobileBio = (props) => {

    return (
        <div className="mobile-bio-main">
            <article>
                <section>
                    <img src={robertoProfileImg} style={{ maxWidth: `175px`, maxHeight: `175px`, borderRadius: `50%`, boxShadow: `1px 1px 3px` }} alt="author-pic" />
                </section>
                <section>
                    <h4 className="mt-4">{props.author}</h4>
                </section>
            </article>
        </div>
    )
}

export default MobileBio