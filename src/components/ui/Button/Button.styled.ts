import styled, { css } from 'styled-components';
import { baseTheme } from '../../../styles/theme/theme';
import type { ButtonProps } from './Button';
import type { RuleSet } from 'styled-components';

export interface Variants {
  secondary: RuleSet<object>;
  primary: RuleSet<object>;
}

const variants: Variants = {
  secondary: css`
    background: ${baseTheme.colors.white};
    background: transparent;
    border: 1px solid ${baseTheme.colors['keatext-purple']};
    color: ${baseTheme.colors['keatext-purple']};
  `,
  primary: css`
    background: ${baseTheme.colors['keatext-purple']};
    border: none;
    color: ${baseTheme.colors.white};
  `,
};

export const Button = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors['keatext-purple']};
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  height: 56px;
  max-width: 172px;
  padding: 16px;
  width: 100%;

  ${({ variant }) => variants[variant]}

  &:disabled {
    background: ${({ theme }) => theme.colors.grey[1]};
    cursor: not-allowed;
  }
`;
