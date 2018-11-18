export interface ButtonProps {
  buttonRef?: (ref: object) => void
  className?: string
  disabled?: boolean
  flavor?: string
  icon?: string | React.ReactNode
  label?: string
  link?: string
  type: string
  onClick?: () => void
}
