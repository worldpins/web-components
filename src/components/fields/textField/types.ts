export interface TextFieldProps {
  label?: string
  onBlur: () => void
  onChange: (value: string) => void
  onFocus: () => void
  value?: string
}

export interface TextFieldState {
  isFocussed: boolean
}
