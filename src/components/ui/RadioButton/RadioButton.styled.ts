import styled from 'styled-components';

export const RadioButton = styled.div`
  align-items: center;
  display: flex;

  .realRadio {
    display: none;
  }

  .customRadio {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.grey[1]};
    display: inline-block;
    height: 24px;
    margin-right: 16px;
    position: relative;
    vertical-align: text-top;
    width: 24px;
  }

  .customRadio::before {
    content: '';

    background: ${({ theme }) => theme.colors['keatext-purple']};
    border-radius: 50%;
    display: inline-block;
    height: 12px;
    width: 12px;

    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);

    transition: 0.2s ease-in;
  }

  .realRadio:checked + .label .customRadio::before {
    transform: translate(-50%, -50%) scale(1);
  }

  .label {
    color: ${({ theme }) => theme.colors.grey[0]};
    cursor: pointer;
    user-select: none;
  }
`;
