import React, { useCallback } from "react";
import "./Publications.scss";

import { publications } from "./.publications.js";

const Publications = () => {
    const [search, setSearch] = React.useState("");
    const [searchLabels, setSearchLabels] = React.useState(new Set());

    const addSearchLabel = useCallback(
        (label) => {
            setSearchLabels((prev) => new Set([...prev, label]));
        },
        [setSearchLabels]
    );
    const removeSearchLabel = useCallback(
        (label) => {
            setSearchLabels((prev) => {
                const newSet = new Set(prev);
                newSet.delete(label);
                return newSet;
            });
        },
        [setSearchLabels]
    );
    const allLabels = new Set([
        "HEDM",
        "EDD",
        "Powder",
        "Laue",
        "Library Contribution",
    ]);

    return (
        <section id="publications" className="publications-section">
            <h2>Publications on HEXRD</h2>
            <p className="publications-description">
                Explore research articles that delve into the applications and
                advancements of HEXRD in diffraction analysis and material
                science.
            </p>
            <div className="publications-search">
                <input
                    type="text"
                    placeholder="Search publications"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="label-container">
                    {Array.from(allLabels).map((label) => (
                        <label
                            className={`workflow-label ${label} ${
                                searchLabels.has(label) ? "active" : ""
                            }`}
                        >
                            <input
                                type="checkbox"
                                key={label}
                                onChange={(e) => {
                                    if (e.target.checked) addSearchLabel(label);
                                    else removeSearchLabel(label);
                                }}
                            ></input>
                            {label}
                        </label>
                    ))}
                </div>
                <a href="https://github.com/HEXRD/hexrd.github.io/issues/new?assignees=&labels=type%3A+citation&projects=&template=citation_correction.yaml"
                    target="_blank" rel="noopener noreferrer">
                    See something wrong? Let us know!
                </a>
            </div>
            <div className="publications-grid">
                {publications
                    .filter((pub) =>
                        pub.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .filter(
                        (pub) =>
                            searchLabels.size == 0 ||
                            new Set(pub.labels).intersection(searchLabels)
                                .size > 0
                    )
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
                                    {pub.labels.map((workflow) => (
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
