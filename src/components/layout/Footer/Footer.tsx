import styled from 'styled-components';
import footerPushDownIc from '@assets/icon/footer/footerPushDownIc.svg';
import footerStarIc from '@assets/icon/footer/footerStarIc.svg';
import { flexCenter } from '@styles/globalStyle';

/** footer */
export default function Footer() {
  return (
    <FooterContainer>
      <FooterTopBox>
        <span>지금까지 </span>
        <FooterStrongText>
          <img src={footerStarIc} />
          <span>705,566,092 개의 평가가 </span>
        </FooterStrongText>
        <span>쌓였어요.</span>
      </FooterTopBox>
      <FooterBottomBox>
        <FooterFirstRowBox>
          <button>
            <span>서비스 이용약관</span>
          </button>
          <button>
            <span>개인정보 처리방침</span>
          </button>
          <button>
            <span>회사 안내</span>
          </button>
        </FooterFirstRowBox>
        <FooterSecondRowBox>
          <span>고객센터 | cs@watchapedia.co.kr, 02-515-9985</span>
          <FooterDownloadBox>
            <span>광고 문의 | ad_sales@Watcha.com</span>
            <FooterDownloadButton>
              <span>최신 광고 소개서</span>
              <img src={footerPushDownIc} />
            </FooterDownloadButton>
          </FooterDownloadBox>
          <span>제휴 및 대외 협력 | http://watcha.team/contact</span>
        </FooterSecondRowBox>
        <FooterThirdRowBox>
          <span>주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩 3층</span>
          <span>사업자 등록 번호 211-88-6013</span>
          <span>WATCHAPEDIA 2022 by WATCHA, Inc. All rights reserved.</span>
        </FooterThirdRowBox>
      </FooterBottomBox>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  ${flexCenter}

  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`;

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

const FooterBottomBox = styled.div`
  ${({ theme }) => theme.fonts.body6};

  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2.2rem 5.8rem 3.5rem;
  color: ${({ theme }) => theme.colors.grey500};
`;

const FooterFirstRowBox = styled.div`
  display: flex;
  gap: 1.9rem;
`;

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

const FooterThirdRowBox = styled(FooterRowBox)`
  gap: 0.4rem;
`;
