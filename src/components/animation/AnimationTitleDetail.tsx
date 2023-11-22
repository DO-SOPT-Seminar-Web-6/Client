import styled from 'styled-components';
export default function AnimationTitleDetail() {
  return (
    <Wrapper>
      <Details>좋아요</Details>
      <Number>1324</Number>
      <DivideLine />
      <Details>댓글</Details>
      <Number>9</Number>
      <DivideLine />

      <Details>12일 전 업데이트</Details>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  gap: 1.4rem;
  ${({ theme }) => theme.fonts.body2};
`;

const Details = styled.h2`
  color: ${({ theme }) => theme.colors.grey600};
`;

const Number = styled.p`
  color: ${({ theme }) => theme.colors.grey700};
`;

const DivideLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.grey600};
  height: 1.2rem;
`;
