import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import { FooterPushDownIc } from '@assets/index';

/** footer bottom section second row */
export default function FooterBottomSecondRow() {
  return (
    <FooterSecondRowBox>
      <span>고객센터 | cs@watchapedia.co.kr, 02-515-9985</span>
      <FooterDownloadBox>
        <span>광고 문의 | ad_sales@Watcha.com</span>
        <FooterDownloadButton>
          <span>최신 광고 소개서</span>
          <FooterPushDownIcon />
        </FooterDownloadButton>
      </FooterDownloadBox>
      <span>제휴 및 대외 협력 | http://watcha.team/contact</span>
    </FooterSecondRowBox>
  );
}

const FooterRowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.8rem;
`;

const FooterSecondRowBox = styled(FooterRowBox)`
  gap: 0.2rem;
`;

const FooterDownloadBox = styled.div`
  ${flexCenter}

  gap: 1.7rem;
`;

const FooterDownloadButton = styled.button`
  ${flexCenter}

  gap: 0.3rem;
`;

const FooterPushDownIcon = styled(FooterPushDownIc)`
  width: 2.1rem;
  height: 2.1rem;
`;
