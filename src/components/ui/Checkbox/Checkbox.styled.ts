import styled from 'styled-components';

export const Checkbox = styled.div`
  display: inline-flex;

  .realInput {
    display: none;
  }

  .checkMark {
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grey[1]};
    display: inline-flex;
    height: 24px;
    justify-content: center;
    width: 24px;
    position: absolute;
  }

  .labelWrapper {
    align-items: center;
    color: ${({ theme }) => theme.colors.grey[0]};
    cursor: pointer;
    display: inline-flex;
    gap: 16px;
    user-select: none;
  }

  .label {
    margin-left: 40px;
  }
`;
