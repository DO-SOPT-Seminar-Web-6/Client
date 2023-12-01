import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop';

/** footer */
export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop />
      <FooterBottom />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  ${flexCenter}

  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`;
