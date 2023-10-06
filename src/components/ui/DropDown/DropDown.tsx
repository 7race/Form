import { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { ArrowUpIcon } from './icons/ArrowUpIcon';
import * as S from './DropDown.styled';
import type { FC } from 'react';

interface DropdownProps {
  defaultOption?: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({
  options,
  onSelect,
  defaultOption = 'Choose option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultOption
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [defaultOption]);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <S.DropdownWrapper ref={dropdownRef} $isOpen={isOpen}>
      <button type="button" onClick={handleToggle} className="dropdownButton">
        {selectedOption}
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
      {isOpen && (
        <ul className="dropdownList">
          {options.map((option, index) => (
            <li
              className="dropdownItem"
              key={index}
              onClick={() => {
                handleSelect(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </S.DropdownWrapper>
  );
};
