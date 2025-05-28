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

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const FutureSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>THE FUTURE IS SHARED</SectionTitle>
      <Description>
        Together, we can build a new kind of child-focused entertainment where play, learning, and emotional connection 
        come to life through intelligent technology.
      </Description>
    </SectionContainer>
  );
};

export default FutureSection;