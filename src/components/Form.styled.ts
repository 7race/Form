import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;

  @media (min-height: 1024px) {
    align-items: center;
    height: 100vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 564px;

  .inputBlock {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }

  .inputSubtitle {
    color: ${({ theme }) => theme.colors.grey[0]};
    font-size: 12px;
    font-weight: 600;
  }

  .radioWrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .buttonsWrapper {
    display: flex;
    justify-content: space-between;
  }

  .errorMessage {
    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
    position: absolute;
    bottom: -20px;
  }
`;

export const PasswordSubtitle = styled.div<{ $passwordLengthError: boolean }>`
  color: ${({ $passwordLengthError, theme }) =>
    $passwordLengthError ? theme.colors.red : theme.colors.grey[0]};
  font-size: 12px;
`;
