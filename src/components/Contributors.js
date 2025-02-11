import "./Contributors.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const ContributorInfo = ({ name, bio, imageUrl, socials, webpage }) => {
    const profileImageUrl = imageUrl || "/images/individuals/default.svg";

    const CardContent = (
        <div className="contributor-card">
            <img className="profile-image" src={profileImageUrl} alt={name} />
            <div className="contributor-info">
                <h3 className="contributor-name">{name}</h3>
                <p className="contributor-bio">{bio}</p>
                {socials && (
                    <div className="social-icons">
                        {socials.github && (
                            <a
                                href={socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="social-icon"
                                />
                            </a>
                        )}
                        {socials.linkedin && (
                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="social-icon"
                                />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    return webpage ? (
        <a
            href={webpage}
            target="_blank"
            rel="noopener noreferrer"
            className="contributor-link"
        >
            {CardContent}
        </a>
    ) : (
        CardContent
    );
};

const individual_contributors = [
    {
        name: "Joel Bernier",
        bio: "Researcher",
        imageUrl: "/images/individuals/joel_bernier.jpg",
        socials: {
            github: "https://github.com/joelvbernier",
            linkedin: "https://www.linkedin.com/in/joel-bernier-1125283/",
        },
    },
    {
        name: "Darren Pagan",
        bio: "Researcher",
        imageUrl: "/images/individuals/darren_pagan.jpg",
        socials: {
            github: "https://github.com/darrencpagan",
            linkedin: "https://www.linkedin.com/in/darren-pagan-8405532b/",
        },
    },
    {
        name: "Saransh Singh",
        bio: "Researcher",
        imageUrl: "/images/individuals/saransh_singh.jpg",
        socials: {
            github: "https://github.com/saransh13",
            linkedin: "https://www.linkedin.com/in/saransh-singh-bb7b2616/",
        },
    },
    {
        name: "Kelly Nygren",
        bio: "Researcher",
        imageUrl: "/images/individuals/kelly_nygren.jpg",
        socials: {
            github: "https://github.com/kenygren",
            linkedin: null,
        },
    },
    {
        name: "Sven Gustafson",
        bio: "Researcher",
        imageUrl: "/images/individuals/sven_gustafson.jpg",
        socials: {
            github: "https://github.com/gusfasonsven",
            linkedin: null,
        },
    },
    {
        name: "Chris Budrow",
        bio: "Researcher",
        imageUrl: "/images/individuals/chris_budrow.jpg",
        socials: {
            github: null,
            linkedin: null,
        },
    },
    {
        name: "Patrick Avery",
        bio: "Developer",
        imageUrl: "/images/individuals/patrick_avery.jpg",
        socials: {
            github: "https://github.com/psavery",
            linkedin: "https://www.linkedin.com/in/patrick-avery-78b70675/",
        },
    },
    {
        name: "Brianna Major",
        bio: "Developer",
        imageUrl: null,
        socials: {
            github: "https://github.com/bnmajor",
            linkedin: "https://www.linkedin.com/in/brianna-major/",
        },
    },
    {
        name: "Christos Tsolakis",
        bio: "Developer",
        imageUrl: "/images/individuals/christos_tsolakis.jpg",
        socials: {
            github: "https://github.com/christost",
            linkedin: "https://www.linkedin.com/in/christos-tsolakis/",
        },
    },
    {
        name: "Donald Boyce",
        bio: "Developer",
        imageUrl: null,
        socials: {
            github: "https://github.com/donald-e-boyce",
            linkedin: null,
        },
    },
    {
        name: "Zack Singer",
        bio: "Developer",
        imageUrl: "/images/individuals/zack_singer.png",
        socials: {
            github: "https://github.com/zackattack614",
            linkedin: "https://www.linkedin.com/in/zack-s-bb909920/",
        },
    },
    {
        name: "Kevin Welsh",
        bio: "Developer",
        imageUrl: "/images/individuals/kevin_welsh.jpg",
        socials: {
            github: "https://github.com/kpwelsh",
            linkedin: "https://www.linkedin.com/in/kevin-welsh-668140bb/",
        },
    },
    {
        name: "Kevin Lewis",
        bio: "Developer",
        imageUrl: "/images/individuals/kevin_lewis.jpg",
        socials: {
            github: "https://github.com/kevindlewis23",
            linkedin: "https://www.linkedin.com/in/kevindlewis23/",
        },
    },
    {
        name: "Óscar Villellas Guillén",
        bio: "Researcher",
        imageUrl: "/images/individuals/oscar_villellas_guillen.jpg",
        socials: {
            github: "https://github.com/ovillellas",
            linkedin: "https://www.linkedin.com/in/oscar-villellas/",
        },
    },
    {
        name: "Rachel Lim",
        bio: "Researcher",
        imageUrl: "/images/individuals/rachel_lim.jpg",
        socials: {
            github: "https://github.com/rachelelim",
            linkedin: "https://www.linkedin.com/in/rachel-lim-0924128b/",
        },
    },
];

const organization_contributors = [
    {
        name: "Air Force Research Laboratory",
        // bio: "Dedicated team of scientists and developers.",
        imageUrl: "/images/air_force_research_lab__logo.jpg",
        webpage: "https://www.afrl.af.mil/",
    },
    {
        name: "Lawrence Livermore National Laboratory",
        // bio: "Dedicated team of scientists and developers.",
        imageUrl: "/images/lawrence_livermore_national_laboratory__logo.jpg",
        webpage: "https://www.llnl.gov/",
    },
    {
        name: "Cornell High Energy Synchrotron Source",
        // bio: "Dedicated team of scientists and developers.",
        imageUrl: "/images/chess__logo.jpg",
        webpage: "https://www.chess.cornell.edu/",
    },
    {
        name: "University of Dayton Research Institute",
        // bio: "Dedicated team of scientists and developers.",
        imageUrl: "/images/udri__logo.jpg",
        webpage: "https://www.udri.udayton.edu/",
    },
    {
        name: "Kitware, Inc.",
        // bio: "Dedicated team of scientists and developers.",
        imageUrl: "/images/kitware_inc__logo.jpg",
        webpage: "https://www.kitware.com/",
    },
    {
        name: "Verdant Evolution, LLC.",
        // bio: "Dedicated team of scientists and developers.",
        imageUrl: "/images/verdant_evolution_llc__logo.png",
        webpage: "https://www.verdantevolution.com/",
    },
];

const Contributors = () => (
    <section className="contributors-wrapper" id="contributors">
        <h2>Contributors</h2>
        <h3>Individual Contributors</h3>
        <div className="contributors-grid">
            {individual_contributors.map((contributor, index) => (
                <ContributorInfo key={index} {...contributor} />
            ))}
        </div>

        <h3>Contributing Organizations</h3>
        <div className="contributors-grid">
            {organization_contributors.map((contributor, index) => (
                <ContributorInfo key={index} {...contributor} />
            ))}
        </div>
    </section>
);

export default Contributors;
