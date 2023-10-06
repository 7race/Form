import styled from 'styled-components';

export const Switcher = styled.div`
  .realInput {
    display: none;
  }

  .switcher {
    width: 49px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.grey[1]};
    border-radius: 32px;
    padding: 3px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    cursor: pointer;
  }

  .toggle {
    width: 18px;
    height: 18px;
    border: 1px solid ${({ theme }) => theme.colors.grey[1]};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.grey[2]};
    transition: transform 0.3s;
  }

  .switcherWrapper {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    color: ${({ theme }) => theme.colors.grey[0]};
    cursor: pointer;
    user-select: none;
  }

  .switcherWrapper .switcher {
    background-color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s;
  }

  .realInput:checked + .switcherWrapper .switcher {
    background-color: ${({ theme }) => theme.colors['keatext-purple']};
  }

  .realInput:checked + .switcherWrapper .toggle {
    transform: translateX(-23px);
    transition: transform 0.3s;
    border: none;
  }
`;
