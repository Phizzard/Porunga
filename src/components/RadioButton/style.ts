import styled from '@emotion/styled'

interface RadioButtonProps {
  color?: string
  backgroundColor?: string
}

export const Container = styled.label<RadioButtonProps>`
  color: ${p => p.color};
  display: block;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Style the indicator (dot/circle) */
  .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`

export const Input = styled.input<RadioButtonProps>`
  /* Hide the browser's default radio button */
  position: absolute;
  opacity: 0;
  cursor: pointer;

  /* On mouse-over, add a grey background color */
  :hover ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  :checked ~ .checkmark {
    background-color: ${p => p.backgroundColor};
  }

  /* Show the indicator (dot/circle) when checked */
  :checked ~ .checkmark:after {
    display: block;
  }
`
