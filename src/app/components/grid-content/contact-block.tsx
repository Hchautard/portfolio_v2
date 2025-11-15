import React from 'react';
import '../../styles/grid-content/contact-block.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ContactBlock() {
  return (
    <div className="contact-block">
      <div className="six-header">
        <h6>Des questions ?</h6>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          size="2x"
          color="#ffffff"
        />
      </div>
      <h1>Contactez moi !</h1>
    </div>
  );
}
