import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonProps } from './types';

const StyledLink = styled(Link)``;
const StyledButton = styled.button``;

class Button extends React.PureComponent<ButtonProps, {}> {
  public render() {
    const { buttonRef, className, disabled, label, link, icon, onClick, type } = this.props;
    return type === 'LINK' ?
      <StyledLink
        {...this.props}
        ref={buttonRef}
        className={className}
        to={disabled ? undefined : link}>
        {label}
      </StyledLink> :
      <StyledButton
        {...this.props}
        ref={buttonRef}
        className={className}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        type={type}>
        <span>{icon}</span>
        <span>{label}</span>
      </StyledButton>
  }
}

export default Button;
