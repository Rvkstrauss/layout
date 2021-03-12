import React from 'react';
import { StyledHamburger } from './styles';

const Hamburger: React.FC<{open: boolean, onHamburgerClick: (isOpen: boolean) => void}> = ({ open, onHamburgerClick }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledHamburger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => onHamburgerClick(!open)} >
      <div className="down">
         
      </div>
    </StyledHamburger>
  )
}

export default Hamburger;