import { useState } from 'react';
import { Input } from './ui/Input/Input';
import { Checkbox } from './ui/Checkbox/Checkbox';
import { RadioButton } from './ui/RadioButton/RadioButton';
import { Dropdown } from './ui/DropDown/DropDown';
import { Button } from './ui/Button/Button';
import { Switcher } from './ui/Switcher/Switcher';
import * as S from './Form.styled';
import type { ChangeEvent, FC } from 'react';

export const Form: FC = () => {
  enum InputFields {
    username = 'username',
    password = 'password',
    inputTextLabel = 'inputTextLabel',
  }

  const dropDownOptions = [
    'Dropdown option',
    'Dropdown option 1',
    'Dropdown option 2',
  ];

  const [formData, setFormData] = useState({
    [InputFields.username]: '',
    [InputFields.password]: '',
    [InputFields.inputTextLabel]: '',
    isRememberMe: false,
    isSwitcherOn: false,
    radioSelection: 'Radio selection 1',
    dropdownTitle: dropDownOptions[0],
  });

  const [validationErrors, setValidationErrors] = useState({
    [InputFields.username]: {
      required: false,
    },
    [InputFields.password]: {
      required: false,
      length: false,
    },
    [InputFields.inputTextLabel]: {
      required: false,
    },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === InputFields.username) {
      setFormData((prev) => ({ ...prev, [InputFields.username]: value }));
    } else if (name === InputFields.password) {
      setFormData((prev) => ({ ...prev, [InputFields.password]: value }));
    } else if (name === InputFields.inputTextLabel) {
      setFormData((prev) => ({ ...prev, [InputFields.inputTextLabel]: value }));
    }

    setValidationErrors({ ...validationErrors, [name]: '' });
  };

  const handlerIsRememberMeFlag = (): void => {
    setFormData((prev) => ({
      ...prev,
      isRememberMe: !formData.isRememberMe,
    }));
  };

  const handlerSwitcherFlag = (): void => {
    setFormData((prev) => ({
      ...prev,
      isSwitcherOn: !formData.isSwitcherOn,
    }));
  };

  const handleRadioOption = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({
      ...prev,
      radioSelection: event.target.value,
    }));
  };

  const handleDropdownOption = (selectedOption: string): void => {
    setFormData((prev) => ({
      ...prev,
      dropdownTitle: selectedOption,
    }));
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target;

    const usernameErrors = {
      required: !formData[InputFields.username].length,
    };

    const passwordErrors = {
      required: !formData[InputFields.password].length,
      length:
        (formData[InputFields.password].length < 4 ||
          formData[InputFields.password].length > 12) &&
        formData[InputFields.password].length !== 0,
    };

    const inputTextLabelErrors = {
      required: !formData[InputFields.inputTextLabel].length,
    };

    switch (name) {
      case InputFields.username:
        setValidationErrors((prev) => ({
          ...prev,
          [InputFields.username]: { required: usernameErrors.required },
        }));
        break;

      case InputFields.password:
        setValidationErrors((prev) => ({
          ...prev,
          [InputFields.password]: {
            required: passwordErrors.required,
            length: passwordErrors.length,
          },
        }));
        break;

      case InputFields.inputTextLabel:
        setValidationErrors((prev) => ({
          ...prev,
          [InputFields.inputTextLabel]: {
            required: inputTextLabelErrors.required,
          },
        }));
        break;
    }

    const isValid = !(
      usernameErrors.required ||
      passwordErrors.required ||
      passwordErrors.length ||
      inputTextLabelErrors.required
    );

    if (isValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handlerCancelClick = (): void => {
    setFormData(() => ({
      [InputFields.username]: '',
      [InputFields.password]: '',
      [InputFields.inputTextLabel]: '',
      isRememberMe: false,
      isSwitcherOn: false,
      radioSelection: 'Radio selection 1',
      dropdownTitle: dropDownOptions[0],
    }));
    setIsFormValid(false);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (isFormValid) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.Form>
        <div className="inputBlock">
          <p className="inputSubtitle">Username</p>
          <Input
            value={formData.username}
            onChange={handleInputChange}
            onBlur={validateForm}
            name={InputFields.username}
            error={validationErrors[InputFields.username].required}
          />
          {validationErrors[InputFields.username].required && (
            <div className="errorMessage">This field is required</div>
          )}
        </div>

        <div className="inputBlock">
          <p className="inputSubtitle">Password</p>
          <Input
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            name={InputFields.password}
            onBlur={validateForm}
            error={validationErrors[InputFields.password].required}
            autoComplete="on"
          />
          <S.PasswordSubtitle
            $passwordLengthError={validationErrors.password.length}
          >
            Your password is between 4 and 12 characters
          </S.PasswordSubtitle>
          {validationErrors[InputFields.password].required && (
            <div className="errorMessage">This field is required</div>
          )}
        </div>

        <div className="inputBlock">
          <p className="inputSubtitle">Input Text Label </p>
          <Input
            value={formData.inputTextLabel}
            onChange={handleInputChange}
            onBlur={validateForm}
            error={validationErrors[InputFields.inputTextLabel].required}
            name={InputFields.inputTextLabel}
          />
          {validationErrors[InputFields.inputTextLabel].required && (
            <div className="errorMessage">This field is required</div>
          )}
        </div>

        <div>
          <Checkbox
            id="c1"
            label="Remember me"
            checked={formData.isRememberMe}
            onChange={handlerIsRememberMeFlag}
          />
        </div>

        <Switcher
          checked={formData.isSwitcherOn}
          onChange={handlerSwitcherFlag}
        />

        <div className="radioWrapper">
          <RadioButton
            id="r1"
            name="radio group"
            label="Radio selection 1"
            onChange={handleRadioOption}
            checked={formData.radioSelection === 'Radio selection 1'}
          />
          <RadioButton
            id="r2"
            name="radio group"
            label="Radio selection 2"
            onChange={handleRadioOption}
          />
          <RadioButton
            id="r3"
            name="radio group"
            label="Radio selection 3"
            onChange={handleRadioOption}
          />
        </div>

        <div>
          <Dropdown
            options={dropDownOptions}
            onSelect={handleDropdownOption}
            defaultOption={formData.dropdownTitle}
          />
        </div>

        <div className="buttonsWrapper">
          <Button
            type="button"
            variant="secondary"
            onClick={handlerCancelClick}
          >
            Cancel
          </Button>
          <Button variant="primary" disabled={!isFormValid}>
            Next
          </Button>
        </div>
      </S.Form>
    </S.FormWrapper>
  );
};
