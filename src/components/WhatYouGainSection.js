import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #0a0a14;
  color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
`;

const BenefitsContainer = styled.div`
  flex: 1;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const Bullet = styled.div`
  color: #ffa500;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const BenefitText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const WhatYouGainSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TitleContainer>
          <SectionTitle>
            WHAT<br />
            YOU<br />
            GAIN?
          </SectionTitle>
        </TitleContainer>
        
        <BenefitsContainer>
          <BenefitItem>
            <Bullet>•</Bullet>
            <BenefitText>
              Be among the first to enter AI-powered educational play
            </BenefitText>
          </BenefitItem>
          
          <BenefitItem>
            <Bullet>•</Bullet>
            <BenefitText>
              Capture market share through licensing
            </BenefitText>
          </BenefitItem>
          
          <BenefitItem>
            <Bullet>•</Bullet>
            <BenefitText>
              Build deep parental trust with an educational+ ROI application
            </BenefitText>
          </BenefitItem>
          
          <BenefitItem>
            <Bullet>•</Bullet>
            <BenefitText>
              KPI dashboard to measure all engagement, learning milestones, and more
            </BenefitText>
          </BenefitItem>
        </BenefitsContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default WhatYouGainSection;