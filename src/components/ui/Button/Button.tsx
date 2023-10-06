import { type ComponentPropsWithoutRef, type FC } from 'react';
import * as S from './Button.styled';
import type { Variants } from './Button.styled';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: keyof Variants;
}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Button {...rest}>{children}</S.Button>
);
