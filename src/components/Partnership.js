import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background-color: #0a0a14;
  color: white;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(30, 30, 50, 0.5);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #ffa500;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(30, 30, 50, 0.5);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #ffa500;
  }
`;

const SubmitButton = styled.button`
  background-color: #ffa500;
  color: black;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: #ffcc00;
  }
`;

const Partnership = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <PageTitle>Partnership Opportunities</PageTitle>
        <Description>
          Join us in revolutionizing children's educational entertainment. We're looking for partners who share our vision 
          of creating meaningful, interactive experiences that combine learning and play.
        </Description>
        
        <Description>
          Whether you're a content creator, technology provider, or educational institution, we'd love to explore how we can 
          work together to bring Marionix to more children around the world.
        </Description>
        
        <ContactForm>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your name" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="company">Company</Label>
            <Input type="text" id="company" placeholder="Your company" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Your email" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">How would you like to partner with us?</Label>
            <TextArea id="message" placeholder="Tell us about your partnership ideas..." />
          </FormGroup>
          
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Partnership;