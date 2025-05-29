import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  /* Remove the background image since we'll use the slider */
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/child-tablet.jpg'); */
  /* background-size: cover;
  background-position: center; */
`;

const Presenter = styled.p`
  color: #ffa500;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  margin-left: 10%;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const JoinButton = styled.button`
  background: #ffa500;
  color: black;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #ffcc00;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <Presenter>Presented by Luca Pecci</Presenter>
        <Title>Marionix</Title>
        <Description>
          WE HAD A DREAM WHERE CHILDREN COULD SEAMLESSLY 
          INTERACT WITH THEIR FAVORITE ANIMATED FRIENDS. 
          THAT DREAM BECAME REALITY WITH MARIONDO
        </Description>
        <JoinButton>JOIN US</JoinButton>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;


## 3. Save the Images

You'll need to save the images you shared to the public/images directory. Name them according to the paths in the BackgroundSlider component:

- child-teddy-tablet.jpg (the image with the child and teddy bear)
- father-daughter-tablet.jpg (the image with the father and daughter looking at a tablet)
- child-glasses-computer.jpg (the image with the child with glasses at a computer)
- boy-colorful-tablet.jpg (the image with the boy in colorful lighting using a tablet)
- father-daughter-device.jpg (the image with the father and daughter looking at a device)

## 4. Update the Hero Component to Use a Transparent Background

Now, let's modify the Hero component to work with our background slider:
```javascript
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: relative;
  /* Remove the background image since we'll use the slider */
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/child-tablet.jpg'); */
  /* background-size: cover;
  background-position: center; */
`;

const Presenter = styled.p`
  color: #ffa500;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  margin-left: 10%;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const JoinButton = styled.button`
  background: #ffa500;
  color: black;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #ffcc00;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <Presenter>Presented by Luca Pecci</Presenter>
        <Title>Marionix</Title>
        <Description>
          WE HAD A DREAM WHERE CHILDREN COULD SEAMLESSLY 
          INTERACT WITH THEIR FAVORITE ANIMATED FRIENDS. 
          THAT DREAM BECAME REALITY WITH MARIONDO
        </Description>
        <JoinButton>JOIN US</JoinButton>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
```