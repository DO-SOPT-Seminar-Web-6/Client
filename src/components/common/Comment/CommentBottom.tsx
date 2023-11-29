import ReviewLikeCommentIc from '@assets/icon/review/reviewLikeCommentIc.svg';
import ReviewLikeUnActiveIc from '@assets/icon/review/reviewLikeUnActiveIc.svg';
import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';

/** Comment 좋아요, 댓글 부분 */
export default function CommentBottom() {
  return (
    <CommentBottomBox>
      <CommentBottomButton>
        <img src={ReviewLikeUnActiveIc} />
        <span>755</span>
      </CommentBottomButton>
      <CommentBottomButton>
        <img src={ReviewLikeCommentIc} />
        <span>14</span>
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
