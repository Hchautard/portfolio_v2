import React from 'react';
import Image from 'next/image';

export default function NestedCard({
  id = '',
  title = '',
  description = '',
  date = '',
  image = '',
  link = '#',
  className = '',
}: {
  id?: string | number;
  title?: string;
  description?: string;
  date?: string;
  image?: string;
  link?: string;
  className?: string;
}) {
  return (
    <div
      id={id ? `nested-card-${id}` : undefined}
      className={`bg-white ${className} flex flex-col items-center justify-center p-4 rounded-lg shadow-lg hidden`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-500 text-sm mb-4">{date}</p>
      <Image
        className="mb-4 w-full h-auto"
        src={image}
        alt={title}
        width={400}
        height={300}
      />
      <a href={link} className="text-blue-500 hover:underline">
        Learn more
      </a>
    </div>
  );
}
