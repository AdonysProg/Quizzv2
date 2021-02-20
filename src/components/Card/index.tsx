import React, { useState } from 'react';
import Button from '../Button';
import {
  Container,
  Title,
  Question,
  Input,
  FooterCard,
} from './Card.component';

interface Props {
  index: number;
  title: string;
  next: (index: number) => void;
  submit: (answer: string, id: number) => void;
}

const Card: React.FC<Props> = ({ title, next, index, submit, children }) => {
  const [answer, setAnswer] = useState('');
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        onChange={(e: any) => {
          setAnswer(e.target.value);
        }}
      />
      <FooterCard>
        <Button
          onClick={() => {
            submit(answer, index);
            next(index);
          }}
        >
          Next
        </Button>
      </FooterCard>
    </Container>
  );
};

export default Card;
