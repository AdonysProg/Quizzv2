import React from 'react';
import { ButtonC } from './Button.component';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonC onClick={onClick}>{children}</ButtonC>;
};

export default Button;
