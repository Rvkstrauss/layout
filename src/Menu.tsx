
import React from 'react';
import { StyledMenu } from './styles';

const Menu: React.FC<{open: boolean, onMenuOpen: (isOpen: boolean) => void}> = ({ open, onMenuOpen }) => {
  
  const isHidden = open ? true : false;
//   const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} onClick={() => onMenuOpen(!open)}>
     
    </StyledMenu>
  )
}

export default Menu;