import { AnimationDetailText, AnimationTitleText } from '@styles/common/commonText';
import { flexCenter } from '@styles/globalStyle';
import styled from 'styled-components';

export default function CommentTitle() {
  return (
    <Wrapper>
      <AnimationTitleText>댓글</AnimationTitleText>
      <AnimationDetailText>댓글 개수</AnimationDetailText>
    </Wrapper>
  );
}

const Wrapper = styled.p`
  ${flexCenter};
  gap: 0.4rem;
  justify-content: flex-start;
`;
