import React from 'react';
import '../../styles/grid-content/stack-block.css';
import {
  React as ReactIcon,
  NodeJs,
  TypeScript,
  Python,
  SymfonyLight,
} from 'developer-icons';

export default function StackBlock() {
  const stack = [
    { label: 'React', icon: ReactIcon },
    { label: 'Node', icon: NodeJs },
    { label: 'Symfony', icon: SymfonyLight },
    { label: 'Python', icon: Python },
    { label: 'TypeScript', icon: TypeScript },
  ];

  return (
    <div className="stack-block">
      {stack.map((tech) => (
        <div key={tech.label} className="tech-item" title={tech.label}>
          <tech.icon key={tech.label} size={48} color="#ffffff" />
        </div>
      ))}
    </div>
  );
}
