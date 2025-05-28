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
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: rgba(30, 30, 50, 0.5);
  border-radius: 10px;
  padding: 2rem;
  width: 45%;
  min-width: 300px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
`;

const WhyApproachSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>WHY THIS APPROACH?</SectionTitle>
      
      <CardsContainer>
        <Card>
          <CardText>Globally recognized and loved by children and parents alike</CardText>
        </Card>
        
        <Card>
          <CardText>Already rich with visual and emotional depth</CardText>
        </Card>
        
        <Card>
          <CardText>Character personalities are perfect for interactive storytelling</CardText>
        </Card>
        
        <Card>
          <CardText>Built-in educational and emotional growth potential</CardText>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
};

export default WhyApproachSection;