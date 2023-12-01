import { ReviewLikeCommentIc, ReviewLikeUnActiveIc, ReviewLikeActiveIc } from '@assets/index';
import styled from 'styled-components';
import { MyPagePopularCommentIcon } from '@styles/common/commonIcon';
interface InBottomPropsTypes {
  likeCount: number;
  commentCount: number;
  isLike: boolean;
}

export default function PopularCommentBottom(props: InBottomPropsTypes) {
  const { likeCount, commentCount, isLike } = props;

  return (
    <BottomBox>
      <CommentBottomButton>
        {isLike && <ReviewLikeUnActiveIcon />}
        {!isLike && <ReviewLikeActiveIcon />}
        {commentCount}
      </CommentBottomButton>
      <CommentBottomButton>
        <ReviewLikeCommentIcon />
        {likeCount}
      </CommentBottomButton>
    </BottomBox>
  );
}

const BottomBox = styled.section`
  display: flex;
  gap: 1.2rem;
  align-items: flex-end;
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
  padding: 1.2rem 0;
  width: 100%;
  height: 4.8rem;
`;

const CommentBottomButton = styled.button`
  display: flex;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.grey600};
`;

const ReviewLikeCommentIcon = styled(ReviewLikeCommentIc)`
  ${MyPagePopularCommentIcon};
`;

const ReviewLikeUnActiveIcon = styled(ReviewLikeUnActiveIc)`
  ${MyPagePopularCommentIcon};
`;

const ReviewLikeActiveIcon = styled(ReviewLikeActiveIc)`
  ${MyPagePopularCommentIcon};
`;
