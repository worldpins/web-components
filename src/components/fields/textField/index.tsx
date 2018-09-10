import * as React from 'react';
import styled from 'styled-components';

import { Label } from '../helpers';

import { TextFieldProps, TextFieldState } from './types';

const TextFieldWrapper = styled.div`
  display: flex;
  flexDirection: column;
`;
const FocussedLabel = styled(Label)`
  y: 10px;
`;
const TextInput = styled.input`
  transition: all .25s;
  &:focus {
    border-bottom: 1px solid grey;
  }
`;

class TextField extends React.Component<TextFieldProps, TextFieldState> {

  public state = { isFocussed: false }

  public onChange = (e) => {
    this.props.onChange(e.target.value);
  }

  public onFocus = (e) => {
    const { onFocus } = this.props;
    this.setState({ isFocussed: true });
    if (onFocus && typeof onFocus === 'function') {
      onFocus();
    }
  }

  public onBlur = (e) => {
    const { onBlur } = this.props;
    this.setState({ isFocussed: false });
    if (onBlur && typeof onBlur === 'function') {
      onBlur();
    }
  }

  public render() {
    const { label, value } = this.props;
    const { isFocussed } = this.state;

    return (
      <TextFieldWrapper>
        {label && <Label className={isFocussed ? FocussedLabel: undefined}>{label}</Label>}
        <input
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          value={value}
        />
      </TextFieldWrapper>
    )
  }
}

export default TextField;
