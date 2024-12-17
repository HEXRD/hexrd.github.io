import React, { useState } from "react";
import "./Publications.scss";

import { publications } from "./.publications.js";

const Publications = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="publications" className="publications-section">
            <h2>Publications on HEXRD</h2>
            <p className="publications-description">
                Explore research articles that delve into the applications and
                advancements of HEXRD in diffraction analysis and material
                science.
            </p>
            <div
                className={"publications-grid " + (expanded ? "expanded" : "")}
            >
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
            <div className="publications-button-container">
                <button
                    className="publications-button"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                d="m2.5 15.25l7.5-7.5l7.5 7.5l1.5-1.5l-9-9l-9 9z"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="flipped"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                d="m2.5 15.25l7.5-7.5l7.5 7.5l1.5-1.5l-9-9l-9 9z"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </section>
    );
};

export default Publications;
