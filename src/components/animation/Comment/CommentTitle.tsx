import useGetAnimationCollection from '@hooks/useGetAnimationCollection';
import { AnimationDetailText, AnimationTitleText } from '@styles/common/commonText';
import { flexCenter } from '@styles/globalStyle';
import styled from 'styled-components';

export default function CommentTitle() {
  const { data } = useGetAnimationCollection();

  return (
    <Wrapper>
      <AnimationTitleText>댓글</AnimationTitleText>
      <AnimationDetailText>{data?.replyCount}</AnimationDetailText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter};
  gap: 0.4rem;
  justify-content: flex-start;
`;
