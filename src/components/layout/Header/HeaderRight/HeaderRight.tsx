import styled from 'styled-components';
import { BannerProfileIc } from '@assets/index';
import { flexCenter } from '@styles/globalStyle';
import HeaderInput from './HeaderInput';

/** header right section */
export default function HeaderRight() {
  return (
    <HeaderContainerRight>
      <HeaderInput />
      <HeaderText>평가하기</HeaderText>
      <HeaderText>소식</HeaderText>
      <button>
        <BannerProfileIcon />
      </button>
    </HeaderContainerRight>
  );
}

const HeaderText = styled.span`
  cursor: pointer;
`;

const HeaderContainerRight = styled.div`
  ${flexCenter}
  ${({ theme }) => theme.fonts.body3};

  gap: 2rem;
  color: ${({ theme }) => theme.colors.grey700};
`;

const BannerProfileIcon = styled(BannerProfileIc)`
  width: 2.6rem;
  height: 2.7rem;
`;
