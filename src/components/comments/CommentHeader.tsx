import { flexCenter } from '@styles/globalStyle';
import { ReviewFilterIc } from '@assets/index';
import styled from 'styled-components';
import CommentToggle from './CommentToggle';
import { useState } from 'react';

interface InCommentHeaderPropsTypes {
  handleSort: (sort: string) => void;
}

export default function CommentHeader({ handleSort }: InCommentHeaderPropsTypes) {
  const [isReorder, setIsReorder] = useState(false);
  const [isLiked, setIsLiked] = useState(true);

  function handleClickOrder() {
    setIsReorder((prev) => !prev);
  }

  return (
    <Wrapper>
      <TitleText>코멘트</TitleText>
      <OrderButton onClick={handleClickOrder}>
        <ReviewFilterIcon />
        {isLiked ? '좋아요 순' : '댓글 수 순'}
      </OrderButton>
      {isReorder && <CommentToggle setIsReorder={setIsReorder} setIsLiked={setIsLiked} handleSort={handleSort} />}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2.5rem;
  margin-bottom: 2.1rem;
`;

const TitleText = styled.h1`
  ${({ theme }) => theme.fonts.largeTitle};
  color: ${({ theme }) => theme.colors.black};
`;

const OrderButton = styled.button`
  ${flexCenter}
  gap: 0.4rem;
  ${({ theme }) => theme.fonts.subTitle5};
  color: ${({ theme }) => theme.colors.grey600};
`;

const ReviewFilterIcon = styled(ReviewFilterIc)`
  width: 2rem;
  height: 2rem;
`;
