import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import { useState } from 'react';
import { WatchaCloseIc, WatchaOpenIc } from '@assets/index';

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
            <WatchaOpenIcon />
          </>
        )}
        {isOpen && (
          <>
            <span>닫기</span>
            <WatchaCloseIcon />
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

const WatchaCloseIcon = styled(WatchaCloseIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
const WatchaOpenIcon = styled(WatchaOpenIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
