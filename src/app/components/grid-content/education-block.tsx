import React from 'react';

export default function EducationBlock() {
  const education = [
    {
      degree: 'Master Informatique (ILSEN)',
      school: "Université d'Avignon",
      period: '2024 - 2026',
    },
    {
      degree: 'Bachelor Informatique (BUT)',
      school: "Université d'Aix-Marseille",
      period: '2021 - 2024',
    },
  ];

  return (
    <div className="education-block">
      <h3>Formation</h3>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <strong>{item.degree}</strong>
            <br />
            <span className="school">{item.school}</span>
            <span className="period">{item.period}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
