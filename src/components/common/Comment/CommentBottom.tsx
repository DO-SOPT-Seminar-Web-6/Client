import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import { ReviewLikeActiveIc, ReviewLikeCommentIc, ReviewLikeUnActiveIc } from '@assets/index';

interface InTextTypes {
  isLike: boolean;
}

interface InCommentBottomPropsTypes extends InTextTypes {
  commentCount: number;
  likeCount: number;
}

/** Comment 좋아요, 댓글 부분 */
export default function CommentBottom({ commentCount, isLike, likeCount }: InCommentBottomPropsTypes) {
  return (
    <CommentBottomBox>
      <CommentBottomButton>
        {!isLike && <ReviewLikeUnActiveIc />}
        {isLike && <ReviewLikeActiveIc />}
        <LikeCountText isLike={isLike}>{likeCount}</LikeCountText>
      </CommentBottomButton>
      <CommentBottomButton>
        <ReviewLikeCommentIc />
        <span>{commentCount}</span>
      </CommentBottomButton>
    </CommentBottomBox>
  );
}

const CommentBottomBox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: flex-end;
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
  width: 100%;
  height: 3.4rem;
`;

const CommentBottomButton = styled.button`
  ${flexCenter}

  gap: 0.2rem;
`;

const LikeCountText = styled.span<InTextTypes>`
  color: ${({ isLike, theme }) => (isLike ? `${theme.colors.mainPink}` : `${theme.colors.grey600}`)};
`;
