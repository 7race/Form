import * as S from './Switcher.styled';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const Switcher: FC<ComponentPropsWithoutRef<'input'>> = ({
  checked,
  ...rest
}) => (
  <S.Switcher>
    <input
      id="switcher"
      type="checkbox"
      className="realInput"
      checked={checked}
      {...rest}
    />
    <label htmlFor="switcher" className="switcherWrapper">
      <div className="switcher">
        <div className="toggle" />
      </div>
      {checked ? <span>on</span> : <span>off</span>}
    </label>
  </S.Switcher>
);
