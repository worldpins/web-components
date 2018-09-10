import * as React from 'react';
import styled from 'styled-components';

interface LabelProps {
  children: React.ReactNode
  className?: any
}

const LabelWrapper = styled.p`
  font-size: 12px;
  margin: 0;
  transition: all .25s;
`;

const Label = ({ children, className }: LabelProps) => <LabelWrapper className={className}>{children}</LabelWrapper>

export default Label;
