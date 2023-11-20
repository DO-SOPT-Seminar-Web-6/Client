import styled from 'styled-components';

/** footer bottom section third row */
export default function FooterBottomThirdRow() {
  return (
    <FooterThirdRowBox>
      <span>주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩 3층</span>
      <span>사업자 등록 번호 211-88-6013</span>
      <span>WATCHAPEDIA 2022 by WATCHA, Inc. All rights reserved.</span>
    </FooterThirdRowBox>
  );
}

const FooterRowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.8rem;
`;

const FooterThirdRowBox = styled(FooterRowBox)`
  gap: 0.4rem;
`;
