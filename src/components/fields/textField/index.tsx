import * as React from 'react';

import { Label } from '../helpers';

import { TextFieldProps } from './types';

class TextField extends React.Component<TextFieldProps, {}> {

  public onChange = (e) => {
    this.props.onChange(e.target.value);
  }

  public render() {
    const { label, value } = this.props;
    return (
      <div>
        {label && <Label>{label}</Label>}
        <input
          onChange={this.onChange}
          value={value}
        />
      </div>
    )
  }
}

export default TextField;
