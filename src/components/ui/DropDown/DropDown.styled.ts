import styled from 'styled-components';

export const DropdownWrapper = styled.div<{ $isOpen: boolean }>`
  font-size: 16px;
  max-width: 564px;
  position: relative;

  .dropdownButton {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme, $isOpen }) =>
      $isOpen && theme.colors['keatext-purple']};
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.grey[1]};
    color: ${({ theme }) => theme.colors.grey[0]};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    width: 100%;

    &:hover {
      border-color: ${({ theme }) => theme.colors['keatext-purple']};
    }
  }

  .dropdownList {
    background-color: ${({ theme }) => theme.colors.white};
    left: 0;
    position: absolute;
    top: 84%;
    width: 100%;
    z-index: 1;
  }

  .dropdownItem {
    border: 1px solid ${({ theme }) => theme.colors.grey[1]};
    color: ${({ theme }) => theme.colors.grey[0]};
    cursor: pointer;
    list-style-type: none;
    padding: 16px;

    &:not(:first-child) {
      border-top: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors['keatext-purple']};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
