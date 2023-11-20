import styled from 'styled-components';
import footerStarIc from '@assets/icon/footer/footerStarIc.svg';

/** footer top section */
export default function FooterTop() {
  return (
    <FooterTopBox>
      <span>지금까지 </span>
      <FooterStrongText>
        <img src={footerStarIc} />
        <span>705,566,092 개의 평가가 </span>
      </FooterStrongText>
      <span>쌓였어요.</span>
    </FooterTopBox>
  );
}

const FooterTopBox = styled.div`
  ${({ theme }) => theme.fonts.subTitle2};

  width: 100%;
  padding: 1.6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey700};
  color: ${({ theme }) => theme.colors.grey400};
  text-align: center;
`;

const FooterStrongText = styled.strong`
  color: ${({ theme }) => theme.colors.mainPink};
`;
