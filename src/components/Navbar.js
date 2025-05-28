import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    background-color: rgba(10, 10, 20, 0.95);
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(10, 10, 20, 0.95);
    transition: right 0.3s ease-in-out;
    gap: 2rem;
    padding: 2rem;
    z-index: 99;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffcc00;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactButton = styled(Link)`
  background-color: #ffa500;
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ffcc00;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }
  
  &::before {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg) translate(0, 0)' : 'translateY(-10px)')};
  }
  
  &::after {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg) translate(0, 0)' : 'translateY(10px)')};
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 98;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <NavContainer>
        <Logo>Marionix</Logo>
        
        <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
          <Hamburger isOpen={isMenuOpen} />
        </MobileMenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" onClick={closeMenu}>ABOUT US</NavLink>
          <NavLink to="/" onClick={closeMenu}>THE PROCESS</NavLink>
          <NavLink to="/" onClick={closeMenu}>OUR CLIENTS</NavLink>
          <NavLink to="/partnership" onClick={closeMenu}>PARTNERSHIP</NavLink>
          <ContactButton to="/contact" onClick={closeMenu}>Contact Us</ContactButton>
        </NavLinks>
      </NavContainer>
      
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
};

export default Navbar;