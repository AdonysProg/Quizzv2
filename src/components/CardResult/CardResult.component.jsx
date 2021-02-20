import styled from 'styled-components';

export const Container = styled.div`
  color: black;
  display: flex;
  flex-flow: column wrap;
  background-color: #e3e3e3;
  text-align: center;
  width: 320px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
`;
export const Title = styled.h2`
  font-weight: 800;
`;
export const CorrectAnswer = styled.h4`
  font-size: 1.1rem;
`;
export const Answer = styled.h5`
  font-size: 1.1rem;
`;
export const CorrectContainer = styled.div`
  padding: 10px;
  text-align: left;
`;
export const AnswerContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const AnswerHeader = styled.h3`
  color: #f72585;
`;
export const CorrectAnswerHeader = styled.h3`
  color: #00f5d4;
  text-align: center;
`;
