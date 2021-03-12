import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import FocusLock from 'react-focus-lock';
// import { useOnClickOutside } from './useOnClickOutside';
import Menu from './Menu';
import Hamburger from './Hamburger';

function App() {
  const [open, setOpen] = useState(false);
  // const node = useRef();
  const menuId = "main-menu";

  // useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <FocusLock disabled={!open}>
            <Hamburger open={open} onHamburgerClick={setOpen} aria-controls={menuId} />
            <Menu open={open} onMenuOpen={setOpen} />
          </FocusLock>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;