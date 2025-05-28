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

const WhyPartnerSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TitleContainer>
          <SectionTitle>
            WHY<br />
            PARTNER<br />
            NOW?
          </SectionTitle>
        </TitleContainer>
        
        <BenefitsContainer>
          <BenefitItem>
            <Bullet>•</Bullet>
            <BenefitText>
              Rapid growth in AI-driven children's experiences provides increasingly valuable purposeful screen time
            </BenefitText>
          </BenefitItem>
          
          <BenefitItem>
            <Bullet>•</Bullet>
            <BenefitText>
              Technology designed for scalability across multiple platforms
            </BenefitText>
          </BenefitItem>
          
          <BenefitItem>
            <Bullet>•</Bullet>
            <BenefitText>
              Launching with a globally-loved character gives us immediate entry
            </BenefitText>
          </BenefitItem>
        </BenefitsContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default WhyPartnerSection;