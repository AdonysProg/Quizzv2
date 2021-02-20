import React from 'react';
import {
  Container,
  Answer,
  CorrectAnswer,
  Title,
  AnswerContainer,
  CorrectContainer,
  CorrectAnswerHeader,
  AnswerHeader,
} from './CardResult.component';

interface Props {
  title: string;
  answer: string;
  correctAnswer: string;
}

const CardResult: React.FC<Props> = ({ title, answer, correctAnswer }) => {
  console.log(title, answer, correctAnswer);
  return (
    <Container>
      <Title>{title}</Title>
      <AnswerContainer>
        <AnswerHeader>Mi respuesta</AnswerHeader>
        <Answer>{answer}</Answer>
      </AnswerContainer>
      <CorrectContainer>
        <CorrectAnswerHeader>Respuesta correcta</CorrectAnswerHeader>
        <CorrectAnswer>{correctAnswer}</CorrectAnswer>
      </CorrectContainer>
    </Container>
  );
};

export default CardResult;
