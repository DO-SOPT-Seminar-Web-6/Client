import styled from 'styled-components';
import { AnimationDetailText } from '@styles/common/commonText';
import useGetAnimationCollection from '@hooks/useGetAnimationCollection';

export default function AnimationTitleDetail() {
  const { data } = useGetAnimationCollection();
  return (
    <Wrapper>
      <AnimationDetailText>좋아요</AnimationDetailText>
      <Number>1324</Number>
      <DivideLine />
      <AnimationDetailText>댓글</AnimationDetailText>
      <Number>{data?.replyCount}</Number>
      <DivideLine />

      <AnimationDetailText>12일 전 업데이트</AnimationDetailText>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  gap: 1.4rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.fonts.body2};
`;

const Number = styled.p`
  color: ${({ theme }) => theme.colors.grey700};
`;

const DivideLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.grey600};
  height: 1.2rem;
`;
