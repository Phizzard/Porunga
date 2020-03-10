interface LabelProps {
  label?: string
  required?: boolean
  inputId?: string
  id?: string
  hideLabel?: boolean
}
declare const Label: ({
  id,
  label,
  required,
  inputId,
  hideLabel,
}: LabelProps) => JSX.Element
export default Label
