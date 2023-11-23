import styled from 'styled-components';
import WatchaOpenIc from '@assets/icon/watcha/watchaOpenIc.svg?react';
import WatchaCloseIc from '@assets/icon/watcha/watchaCloseIc.svg?react';
import { flexCenter } from '@styles/globalStyle';
import { useState } from 'react';

/** 닫기 / 더보기 버튼 */
export default function Button() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <ButtonContainer onClick={handleClick}>
        {!isOpen && (
          <>
            <span>더보기</span>
            <img src={WatchaOpenIc} />
          </>
        )}
        {isOpen && (
          <>
            <span>닫기</span>
            <img src={WatchaCloseIc} />
          </>
        )}
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.button`
  ${flexCenter}
  ${({ theme }) => theme.fonts.body3};

  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 6px;
  width: 16.6rem;
  height: 3.4rem;
  color: ${({ theme }) => theme.colors.mainPink};
`;
