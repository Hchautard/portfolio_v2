import React from 'react';
import '../../styles/grid-content/network-block.css';
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
          fgColor="#fff"
          bgColor="transparent"
          aria-label={network.label}
          className={'badge'}
        />
      ))}
    </div>
  );
}
