import * as S from './RadioButton.styled';
import type { ComponentPropsWithoutRef, FC } from 'react';

interface RadioButtonProps extends ComponentPropsWithoutRef<'input'> {
  id: string;
  label: string;
}

export const RadioButton: FC<RadioButtonProps> = ({ id, label, ...rest }) => (
  <S.RadioButton>
    <input type="radio" id={id} value={label} className="realRadio" {...rest} />

    <label htmlFor={id} className="label">
      <span className="customRadio" />
      {label}
    </label>
  </S.RadioButton>
);
