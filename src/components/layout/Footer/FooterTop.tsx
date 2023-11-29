import styled from 'styled-components';
import { FooterStarIc } from '@assets/index';

/** footer top section */
export default function FooterTop() {
  return (
    <FooterTopBox>
      <span>지금까지 </span>
      <FooterStrongText>
        <FooterStarIcon />
        <span>705,566,092 개의 평가가 </span>
      </FooterStrongText>
      <span>쌓였어요.</span>
    </FooterTopBox>
  );
}

const FooterTopBox = styled.div`
  ${({ theme }) => theme.fonts.subTitle2};

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey700};
  padding: 1.6rem 0;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey400};
`;

const FooterStrongText = styled.strong`
  color: ${({ theme }) => theme.colors.mainPink};
`;

const FooterStarIcon = styled(FooterStarIc)`
  width: 1.8rem;
  height: 1.8rem;
`;
