import React from 'react';
import '../../styles/grid-content/experience-eduction-block.css';

export default function ExperienceBlock() {
  const experiences = [
    {
      role: 'Développeur Fullstack',
      company: 'Betoobe',
      period: '2024 - Présent',
    },
    {
      role: 'Développeur PHP/Prestashop',
      company: 'Nocika',
      period: '2023 - 2024',
    },
  ];

  return (
    <div className="experience-block">
      <h3>Expérience</h3>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <strong>{exp.role}</strong>
            <br />
            <span className="company">{exp.company}</span>
            <span className="period">{exp.period}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
