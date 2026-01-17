import React from 'react';
import '../../styles/grid-content/contact-block.css';
import { SocialIcon } from 'react-social-icons';

export default function NetworkBlock() {
  const socialNetworks = [
    { url: 'https://linkedin.com/in/hchautard ', label: 'LinkedIn' },
    { url: 'https://github.com/Hchautard', label: 'GitHub' },
    { url: '#contact', label: 'Mail' },
  ];

  return (
    <div className="network-block">
      {socialNetworks.map((network) => (
        <SocialIcon
          key={network.label}
          url={network.url}
          target={network.label != 'Mail' ? '_blank' : undefined}
          // style={{ height: 100, width: 100, margin: '0 10px' }}
          fgColor="#fff"
          bgColor="transparent"
          aria-label={network.label}
          className={'badge'}
        />
      ))}
    </div>
  );
}
