import React from 'react';

export default function EducationBlock() {
  return (
    <div className="flex flex-col items-left justify-center px-4">
      <h3 className="text-xl font-semibold mb-2">Formation</h3>
      <ul className="list-disc list-inside">
        <li>
          <strong>Master en Informatique</strong> - Université XYZ (2020 - 2022)
        </li>
        <li>
          <strong>Licence en Informatique</strong> - Université ABC (2017 -
          2020)
        </li>
      </ul>
    </div>
  );
}
