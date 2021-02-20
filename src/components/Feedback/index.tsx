import React, { useState } from 'react';
import CardResult from '../CardResult';
import { Container } from './Feedback.component';
interface Props {
  answers: any;
}

const Feedback: React.FC<Props> = ({ answers }) => {
  return (
    <Container>
      {answers.map((answer: any) => {
        return (
          <React.Fragment>
            <CardResult
              answer={answer.answer}
              title={answer.title}
              correctAnswer={answer.correctAnswer}
            />
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default Feedback;
