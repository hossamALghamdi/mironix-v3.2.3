import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #0a0a14;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: rgba(30, 30, 50, 0.5);
  border-radius: 10px;
  padding: 2rem;
  width: 220px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: white;
`;

const HowItWorksSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>HOW IT WORKS?</SectionTitle>
      
      <CardsContainer>
        <Card>
          <CardIcon>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
              <path d="M8 7H16M8 12H16M8 17H12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </CardIcon>
          <CardText>
            A simple device, connects with your TV or tablet
          </CardText>
        </Card>
        
        <Card>
          <CardIcon>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M7 9L4 12L7 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 9L20 12L17 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 7L12 4L15 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 17L12 20L15 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </CardIcon>
          <CardText>
            Voice input processed in real-time with recordings
          </CardText>
        </Card>
        
        <Card>
          <CardIcon>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
              <path d="M8 12L10.5 14.5L16 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </CardIcon>
          <CardText>
            Interactive responses generated in less than 10 seconds
          </CardText>
        </Card>
        
        <Card>
          <CardIcon>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12H22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M5 5H19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 19H16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </CardIcon>
          <CardText>
            Easy to control with simple voice commands
          </CardText>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
};

export default HowItWorksSection;