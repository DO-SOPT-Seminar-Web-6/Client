import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import { ReviewLikeActiveIc, ReviewLikeCommentIc, ReviewLikeUnActiveIc } from '@assets/index';

interface InCommentBottomPropsTypes {
  commentCount: number;
  likeCount: number;
  isLike: boolean;
}

/** Comment 좋아요, 댓글 부분 */
export default function CommentBottom({ commentCount, isLike, likeCount }: InCommentBottomPropsTypes) {
  return (
    <CommentBottomBox>
      <CommentBottomButton>
        {!isLike && <ReviewLikeUnActiveIc />}
        {isLike && <ReviewLikeActiveIc />}
        <LikeCountText $isLike={isLike}>{likeCount}</LikeCountText>
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

interface InLikeCountTextPropsTypes {
  $isLike: boolean;
}

const LikeCountText = styled.span<InLikeCountTextPropsTypes>`
  color: ${({ $isLike, theme }) => ($isLike ? `${theme.colors.mainPink}` : `${theme.colors.grey600}`)};
`;
