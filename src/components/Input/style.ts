import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

type InputProps = {
  borderColorActive?: string
  borderColorInactive?: string
}

export const StyledInput = styled.input<InputProps>`
    font: inherit;
    background-color: #FFFFFF;
    border: 1px solid ${p => p.borderColorInactive};
    border-radius: 12rem;
    width: 100%;
    transition: all 0.1s linear, padding 0s, border 0s;
    display: inline-block;
    padding: 0 1rem;
    line-height: 2.5rem;
    height: 2.5rem;
    color: #666666;
    font-size: 1rem;
    box-sizing: border-box;
    margin: 0;
    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
        height: auto;
    }
    :focus,
    :active {
        outline: 0;
        padding: 0 0.9375rem;
        border: 1px solid ${p => p.borderColorActive};
        background-color: #FFFFFF;
    }
    ::placeholder {
        color: #BFBFBF;
        font-weight: 300;
        font-size: 1rem;
    }
    &[disabled] {
        background-color: #DDDDDD;
        border: 1px solid #888888;
        color: #888888;
        cursor: not-allowed;
        user-select: none;
        &:focus,
        &:active {
            box-shadow: none;
            background-color: #DDDDDD;
            border: 1px solid #888888;
        }
    }
    @supports (-webkit-overflow-scrolling: touch) {
        &[type='date'],
        &[type='datetime-local'],
        &[type='time'],
        &[type='week'],
        &[type='month'] {
            appearance: textfield;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                display: block;
                right: 1rem;
                bottom: 45%;
                pointer-events: none;
                width: 0.45rem;
                height: 0.45rem;
                border-style: solid;
                border-width: 0.15em 0.15em 0 0;
                transform: rotate(135deg);
                vertical-align: top;
                color: #666666;
                box-sizing: border-box;
            }
            &[disabled]::after {
                color: #888888;
                box-sizing: border-box;
            }
        }
    }
}`
