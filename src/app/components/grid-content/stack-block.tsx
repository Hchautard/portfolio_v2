import React from 'react';
import '../../styles/grid-content/stack-block.css';
import {
  React as ReactIcon,
  NodeJs,
  TypeScript,
  Python,
  SymfonyLight,
  NextJs,
} from 'developer-icons';

export default function StackBlock() {
  const stack = [
    { label: 'React', icon: ReactIcon },
    { label: 'Next.js', icon: NextJs },
    { label: 'Node.js', icon: NodeJs },
    { label: 'Symfony', icon: SymfonyLight },
    { label: 'TypeScript', icon: TypeScript },
    { label: 'Python', icon: Python },
  ];

  return (
    <div className="stack-block">
      {stack.map((tech) => (
        <div key={tech.label} className="tech-item" title={tech.label}>
          <tech.icon size={32} />
          <span>{tech.label}</span>
        </div>
      ))}
    </div>
  );
}
