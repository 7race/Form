import styled from 'styled-components';

export const InputWrapper = styled.div<{ $error?: boolean }>`
  display: inline-flex;
  max-width: 564px;
  position: relative;
  width: 100%;

  .errorIcon {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .input {
    border-radius: 8px;
    border: 1px solid;
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.red : theme.colors.grey[1]};
    outline: none;
    padding: 16px;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey[0]};
      font-size: 16px;
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors['keatext-purple']};
    }
  }
`;
