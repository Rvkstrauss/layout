import styled from 'styled-components';

export const StyledMenu = styled.nav<{theme: {primaryDark: string, primaryLight: string}, open: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 7rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      outline: 0;
    }
  }
`;

export const StyledHamburger = styled.button<{open: boolean, theme: {primaryDark: string, primaryLight: string}}>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 15px;
    height: 15px;
    padding: 6px 5px 6px 4px;
    object-fit: contain;
    }
//     :first-child {
//       transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//     }
//     :nth-child(2) {
//       opacity: ${({ open }) => open ? '0' : '1'};
//       transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
//     }
//     :nth-child(3) {
//       transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//     }
//   }
`;