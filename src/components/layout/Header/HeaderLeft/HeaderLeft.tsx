import styled from 'styled-components';
import { WatchaLogoIc } from '@assets/index';
import { flexCenter } from '@styles/globalStyle';
import HeaderNav from './HeaderNav';

/** header left section */
export default function HeaderLeft() {
  return (
    <HeaderContainerLeft>
      <button>
        <WatchaLogoIcon />
      </button>
      <HeaderNav />
    </HeaderContainerLeft>
  );
}

const HeaderContainerLeft = styled.div`
  ${flexCenter}

  gap: 3rem;
`;

const WatchaLogoIcon = styled(WatchaLogoIc)`
  width: 15rem;
  height: 3.3rem;
`;
