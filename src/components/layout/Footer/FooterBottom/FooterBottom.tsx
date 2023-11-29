import styled from 'styled-components';
import FooterBottomFirstRow from './FooterBottomFirstRow';
import FooterBottomSecondRow from './FooterBottomSecondRow';
import FooterBottomThirdRow from './FooterBottomThirdRow';
import { SectionContainer } from '@styles/globalStyle';

/** footer bottom section */
export default function FooterBottom() {
  return (
    <FooterBottomBox>
      <FooterBottomFirstRow />
      <FooterBottomSecondRow />
      <FooterBottomThirdRow />
    </FooterBottomBox>
  );
}

const FooterBottomBox = styled(SectionContainer)`
  ${({ theme }) => theme.fonts.body6};

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2.2rem;
  padding-bottom: 3.5rem;
  color: ${({ theme }) => theme.colors.grey500};
`;
