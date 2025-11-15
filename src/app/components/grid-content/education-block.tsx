import React from 'react';

export default function EducationBlock() {
  return (
    <div className="flex flex-col items-left justify-center px-4 py-2">
      <h3 className="text-l font-semibold">Formation</h3>
      <ul className="list-inside">
        <li>
          <strong>Master en Informatique</strong> - Université d'Avignon (2024 -
          2026)
        </li>
        <li>
          <strong>Bachelor Informatique</strong> - Université ABC (2021 - 2024)
        </li>
      </ul>
    </div>
  );
}
