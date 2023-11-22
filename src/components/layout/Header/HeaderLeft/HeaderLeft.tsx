import styled from 'styled-components';
import watchaLogoIc from '@assets/icon/banner/watchaLogoIc.svg?react';
import { flexCenter } from '@styles/globalStyle';
import HeaderNav from './HeaderNav';

/** header left section */
export default function HeaderLeft() {
  return (
    <HeaderContainerLeft>
      <button>
        <img src={watchaLogoIc} />
      </button>
      <HeaderNav />
    </HeaderContainerLeft>
  );
}

const HeaderContainerLeft = styled.div`
  ${flexCenter}

  gap: 3rem;
`;
