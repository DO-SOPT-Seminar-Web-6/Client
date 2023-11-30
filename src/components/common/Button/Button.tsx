import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import { WatchaCloseIc, WatchaOpenIc } from '@assets/index';

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

  margin: 0 auto;
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
