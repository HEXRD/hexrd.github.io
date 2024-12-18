import React from "react";
import "./Publications.scss";

import { publications } from "./.publications.js";

const Publications = () => {
    return (
        <section id="publications" className="publications-section">
            <h2>Publications on HEXRD</h2>
            <p className="publications-description">
                Explore research articles that delve into the applications and
                advancements of HEXRD in diffraction analysis and material
                science.
            </p>
            <div className="publications-grid">
                {publications
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((pub, index) => (
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="publication-card"
                        >
                            <h3 className="publication-title">{pub.title}</h3>
                            <p className="publication-authors">{pub.authors}</p>
                            {/* <p className="publication-abstract">{pub.abstract}</p> */}
                            <div className="spacer"></div>
                            <div className="publications-footer">
                                <div className="publication-badges">
                                    {pub.workflows.map((workflow) => (
                                        <p
                                            key={workflow}
                                            className={`publication-workflow ${workflow}`}
                                        >
                                            {workflow}
                                        </p>
                                    ))}
                                </div>
                                <p className="publication-date">{pub.date}</p>
                            </div>
                        </a>
                    ))}
            </div>
        </section>
    );
};

export default Publications;
