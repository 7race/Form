import * as S from './Checkbox.styled';
import { CheckMarkIcon } from './icons/CheckMarkIcon';
import type { ComponentPropsWithoutRef, FC } from 'react';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  id: string;
  checked: boolean;
  label: string;
}
export const Checkbox: FC<CheckboxProps> = ({
  id,
  checked,
  label,
  ...rest
}) => (
  <S.Checkbox>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      {...rest}
      className="realInput"
    />

    <label htmlFor={id} className="labelWrapper">
      <div className="checkMark">{checked && <CheckMarkIcon />}</div>
      <span className="label">{label}</span>
    </label>
  </S.Checkbox>
);
