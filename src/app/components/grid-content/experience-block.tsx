import React from 'react';

export default function ExperienceBlock() {
  return (
    <div className="flex flex-col items-left justify-center px-4">
      <h3 className="text-xl font-semibold mb-2">Expérience Professionnelle</h3>
      <ul className="list-disc list-inside">
        <li>
          <strong>Développeur Web</strong> - Entreprise XYZ (2022 - Présent)
        </li>
        <li>
          <strong>Stagiaire en Développement</strong> - Entreprise ABC (2021 -
          2022)
        </li>
      </ul>
    </div>
  );
}
