const { Cite, plugins } = require("@citation-js/core");
// Load plugins
require("@citation-js/plugin-doi");
require("@citation-js/plugin-csl");
require("@citation-js/plugin-bibtex");

const config = plugins.config.get("@bibtex");

const publications = [
    "https://doi.org/10.1016/j.jmps.2017.12.007",
    "https://doi.org/10.1016/j.cemconres.2020.105989",
    "https://doi.org/10.1016/j.surfcoat.2023.129811",
    "https://doi.org/10.3390/ma16093397",
    "https://doi.org/10.1088/1361-648X/aca860",
    "https://doi.org/10.1088/1757-899X/580/1/012018",
    "https://doi.org/10.1007/s40192-022-00281-4",
    "https://doi.org/10.56952/ARMA-2023-0958",
    "https://doi.org/10.1016/j.jmps.2020.104192",
];

const bibtex = [
    `@article{hurley2018characterization,
        title={Characterization of the crystal structure, kinematics, stresses and rotations in angular granular quartz during compaction},
        author={Hurley, Ryan C and Herbold, Eric B and Pagan, Darren C},
        journal={Journal of Applied Crystallography},
        volume={51},
        number={4},
        pages={1021--1034},
        year={2018},
        publisher={International Union of Crystallography}
    }`,
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function formatCite(cite) {
    return {
        title: cite.data[0].title,
        authors: cite.data[0].author
            .map((author) => `${author.family}, ${author.given}`)
            .join(", "),
        abstract: cite.data[0].abstract,
        date: cite.data[0].issued["date-parts"][0].join("-"),
        link: cite.data[0].URL,
    };
}

async function main() {
    for (const pub of publications) {
        // Avoid 429s
        await delay(1000);
        Cite.async(pub).then(formatCite).then(console.log);
    }

    for (const bib of bibtex) {
        const cite = new Cite(bib);
        console.log(formatCite(cite));
    }
}

main();
