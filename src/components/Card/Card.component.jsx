import styled from 'styled-components';

export const Container = styled.div`
  color: #eee;
  display: flex;
  flex-flow: column wrap;
  background-color: #b5179e;
  text-align: center;
  width: 320px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;
export const FooterCard = styled.div`
  margin-top: 1rem;
`;
export const Title = styled.h2``;
export const Question = styled.h4``;
export const Input = styled.textarea`
  width: auto;
  height: 120px;
  font-size: 1.5rem;
  max-width: 310px;
  resize: none;

  &:focus {
    border-color: #e3e3e3;
    outline-color: #399c3d;
  }
`;
