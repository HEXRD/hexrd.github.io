import React from 'react';
import './Funders.scss';

const funding_sources = [
  { name: "Air Force Research Lab", logo: "/images/air_force_research_lab__logo.jpg", alt: "AFRL Logo", webpage: "https://www.afrl.af.mil/" },
  { name: "Lawrence Livermore National Lab", logo: "/images/lawrence_livermore_national_laboratory__logo.jpg", alt: "LLNL Logo", webpage: "https://www.llnl.gov/" },
  { name: "Cornell High Energy Synchrotron Source", logo: "/images/chess__logo.jpg", alt: "CHESS Logo", webpage: "https://www.chess.cornell.edu/" },
];

const Funders = () => (
  <section id="funders" className="funders-section">
    <h2>Funding Sources</h2>
    <p className="funders-description">
      HEXRD is supported by funding from various organizations dedicated to advancing materials research. We are grateful for the support from the following groups:
    </p>
    <div className="funders-grid">
      {funding_sources.map((funder, index) => {
        const cardClassName = `funder-card ${funder.webpage ? 'hover-enabled' : ''}`;

        const CardContent = (
          <div className={cardClassName}>
            <img src={funder.logo} alt={funder.alt} className="funder-logo" />
            <p className="funder-name">{funder.name}</p>
          </div>
        );

        return funder.webpage ? (
          <a href={funder.webpage} target="_blank" rel="noopener noreferrer" key={index} className="funder-link">
            {CardContent}
          </a>
        ) : (
          <div key={index}>{CardContent}</div>
        );
      })}
    </div>
  </section>
);

export default Funders;
