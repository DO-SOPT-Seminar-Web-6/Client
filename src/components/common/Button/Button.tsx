import styled from 'styled-components';
import WatchaOpenIc from '@assets/icon/watcha/watchaOpenIc.svg?react';
import WatchaCloseIc from '@assets/icon/watcha/watchaCloseIc.svg?react';
import { flexCenter } from '@styles/globalStyle';

interface InButtonPropsTypes {
  isOpen: boolean;
  handleShowMore: () => void;
}

/** 닫기 / 더보기 버튼 */
export default function Button({ isOpen, handleShowMore }: InButtonPropsTypes) {
  return (
    <>
      <ButtonContainer onClick={handleShowMore}>
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

  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 6px;
  width: 16.6rem;
  height: 3.4rem;
  color: ${({ theme }) => theme.colors.mainPink};
`;
