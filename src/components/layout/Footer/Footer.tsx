import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';

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
