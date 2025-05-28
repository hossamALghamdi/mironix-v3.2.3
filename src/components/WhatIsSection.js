import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #0a0a14;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const TitleText = styled.span`
  margin-right: 0.5rem;
`;

const HighlightedText = styled.span`
  color: #ffa500;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 1rem;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const WhatIsSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        <TitleText>WHAT IS</TitleText>
        <HighlightedText>LITTLE GENIUS?</HighlightedText>
      </SectionTitle>
      
      <FeaturesContainer>
        <FeatureItem>
          <FeatureIcon>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="1.5"/>
              <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </FeatureIcon>
          <FeatureTitle>AI conversations in real time</FeatureTitle>
        </FeatureItem>
        
        <FeatureItem>
          <FeatureIcon>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5"/>
              <path d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12Z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Dynamic scenes</FeatureTitle>
        </FeatureItem>
        
        <FeatureItem>
          <FeatureIcon>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.4 13.3H15.6C16.1 13.3 16.5 13.7 16.5 14.2C16.5 16.69 14.49 18.7 12 18.7C9.51 18.7 7.5 16.69 7.5 14.2C7.5 13.7 7.9 13.3 8.4 13.3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Emotion & object recognition</FeatureTitle>
        </FeatureItem>
        
        <FeatureItem>
          <FeatureIcon>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 22H17M22 18V16M22 22V20M16 18H18M20 16H22M20 22H22M14 22H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FeatureIcon>
          <FeatureTitle>Parental dashboard</FeatureTitle>
        </FeatureItem>
      </FeaturesContainer>
    </SectionContainer>
  );
};

export default WhatIsSection;