import styled from 'styled-components';

/** footer bottom section first row */
export default function FooterBottomFirstRow() {
  return (
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
  );
}

const FooterFirstRowBox = styled.div`
  display: flex;
  gap: 1.9rem;
`;
