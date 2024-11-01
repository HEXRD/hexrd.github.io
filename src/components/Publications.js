import React from 'react';
import './Publications.scss';

const publications = [
  {
    title: "Advanced Diffraction Analysis Techniques",
    authors: "John Doe, Jane Smith, Alice Brown",
    abstract: "This paper explores advanced methods in diffraction analysis, specifically focusing on new techniques developed using HEXRD...",
    date: "March 15, 2023",
    link: "https://example.com/publication1"
  },
  {
    title: "HEXRD: Applications in Material Science",
    authors: "Emily White, Michael Green",
    abstract: "In this study, we showcase the various applications of HEXRD in material science, including its impact on data accuracy and analysis...",
    date: "January 10, 2022",
    link: "https://example.com/publication2"
  },
];

const Publications = () => (
  <section id="publications" className="publications-section">
    <h2>Publications on HEXRD</h2>
    <p className="publications-description">
      Explore research articles that delve into the applications and advancements of HEXRD in diffraction analysis and material science.
    </p>
    <div className="publications-grid">
      {publications.map((pub, index) => (
        <a href={pub.link} target="_blank" rel="noopener noreferrer" key={index} className="publication-card">
          <h3 className="publication-title">{pub.title}</h3>
          <p className="publication-authors">{pub.authors}</p>
          <p className="publication-abstract">{pub.abstract}</p>
          <p className="publication-date">{pub.date}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Publications;
