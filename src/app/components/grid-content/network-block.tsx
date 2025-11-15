import React from 'react';
import Image from 'next/image';
import '../../styles/grid-content/contact-block.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

export default function NetworkBlock() {
  const socialNetworks = [
    { url: 'https://linkedin.com/in/hchautard ', label: 'LinkedIn' },
    { url: 'https://github.com/Hchautard', label: 'GitHub' },
    { url: '#contact', label: 'Mail' },
  ];

  return (
    <div>
      {socialNetworks.map((network) => (
        <SocialIcon
          key={network.label}
          url={network.url}
          style={{ height: 100, width: 100, margin: '0 10px' }}
          fgColor="#fff"
          bgColor="transparent"
          aria-label={network.label}
        />
      ))}
    </div>
  );
}
