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
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  text-align: left;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const MainText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Bullet = styled.span`
  color: #ffa500;
  margin-right: 0.5rem;
`;

const BenefitText = styled.span`
  font-size: 1rem;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OpportunitySection = () => {
  return (
    <SectionContainer>
      <SectionTitle>THE OPPORTUNITY</SectionTitle>
      
      <ContentWrapper>
        <TextContainer>
          <MainText>
            Let kids go beyond passive viewing — let them interact, learn, and grow through a character they already know and love.
          </MainText>
          
          <BenefitsList>
            <BenefitItem>
              <Bullet>•</Bullet>
              <BenefitText>Characters greet your child by name</BenefitText>
            </BenefitItem>
            
            <BenefitItem>
              <Bullet>•</Bullet>
              <BenefitText>Respond to what children say and do in real-time</BenefitText>
            </BenefitItem>
            
            <BenefitItem>
              <Bullet>•</Bullet>
              <BenefitText>Personalized stories based on interactions</BenefitText>
            </BenefitItem>
            
            <BenefitItem>
              <Bullet>•</Bullet>
              <BenefitText>Seamless integration of lessons in math, empathy, and physical activity</BenefitText>
            </BenefitItem>
          </BenefitsList>
        </TextContainer>
        
        <ImageContainer>
          <IconsGroup>
            <Icon>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5"/>
                <path d="M8 14C8.5 15.5 10 17 12 17C14 17 15.5 15.5 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 9H9.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 9H15.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Icon>
            <Icon>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4L6 12L18 20V4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Icon>
          </IconsGroup>
        </ImageContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default OpportunitySection;