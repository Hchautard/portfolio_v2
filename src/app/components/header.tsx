import '../styles/header.css';
import React from 'react';

function transitionView(
  e: React.MouseEvent<HTMLAnchorElement>,
  anchorName: string
) {
  e.preventDefault();
  const section = document.querySelector(`${anchorName}`);
  if (section) {
    const rect = section.getBoundingClientRect();
    const offsetTop = window.pageYOffset + rect.top - 100;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}

export default function Header() {
  const anchorList = [
    { name: 'Accueil', href: '#home' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {anchorList.map((anchor, index) => (
            <React.Fragment key={anchor.name}>
              <li key={anchor.name} className="nav-item">
                <a
                  href={anchor.href}
                  className="nav-link"
                  onClick={(e) => transitionView(e, anchor.href.toLowerCase())}
                >
                  {anchor.name}
                </a>
              </li>
              {index < anchorList.length - 1 && (
                <hr className="nav-separator" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
}
