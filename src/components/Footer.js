import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #050510;
  color: white;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffa500;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #888;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>Marionix</Logo>
        <FooterLinks>
          <FooterLink to="/">About Us</FooterLink>
          <FooterLink to="/">The Process</FooterLink>
          <FooterLink to="/">Our Clients</FooterLink>
          <FooterLink to="/partnership">Partnership</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </FooterLinks>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Marionix. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;