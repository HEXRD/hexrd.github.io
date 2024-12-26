import React from "react";
import "./Documentation.scss";

const documentationData = [
    {
        title: "GUI Documentation",
        description:
            "Comprehensive guide for using the HEXRD GUI to interact with HEDM, Powder, Laue, and EDD workflows.",
        link: "https://hexrdgui.readthedocs.io/en/latest/",
    },
    {
        title: "Workflow Guides",
        description:
            "Detailed workflows for HEDM, Powder, Laue, and EDD analysis.",
        subtypes: [
            {
                name: "HEDM Documentation",
                link: "https://hexrd.readthedocs.io/en/latest/users/index.html",
            },
            {
                name: "Powder Documentation",
                link: "https://hexrd.readthedocs.io/en/latest/users/index.html",
            },
            {
                name: "Laue Documentation",
                link: "https://hexrd.readthedocs.io/en/latest/users/index.html",
            },
            {
                name: "EDD Documentation",
                link: "https://hexrd.readthedocs.io/en/latest/users/index.html",
            },
        ],
    },
    {
        title: "API Documentation",
        description:
            "Reference for the HEXRD library API, detailing all available methods and classes.",
        link: "https://hexrd.readthedocs.io/en/latest/hexrd.html",
    },
    {
        title: "Developer Resources",
        description:
            "Guidelines and reference material for developers contributing to the HEXRD project.",
        subtypes: [
            {
                name: "Contributing to the Library",
                link: "https://github.com/HEXRD/hexrd/blob/master/CONTRIBUTING.md",
            },
            {
                name: "Technical Discussion",
                link: "https://github.com/HEXRD/hexrd/discussions",
            },
        ],
    },
];

const Documentation = () => (
    <section className="documentation-section" id="documentation">
        <h2>Documentation</h2>
        <p className="documentation-description">
            Find all the resources you need to understand, use, and contribute
            to HEXRD.
        </p>
        <div className="documentation-grid">
            {documentationData.map((doc, index) => (
                <div key={index} className="documentation-card">
                    <h3 className="documentation-title">{doc.title}</h3>
                    <div className="card-title-divider"></div>
                    <p className="documentation-text">{doc.description}</p>
                    {doc.subtypes ? (
                        <ul className="subtype-list">
                            {doc.subtypes.map((subtype, subIndex) => (
                                <li key={subIndex} className="subtype-item">
                                    <a
                                        href={subtype.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {subtype.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="documentation-button">
                                Access Documentation
                            </button>
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
);

export default Documentation;
