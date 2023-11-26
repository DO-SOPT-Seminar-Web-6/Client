import {ReviewLikeCommentIc,ReviewLikeUnActiveIc} from '@assets/index';

import styled from 'styled-components';

interface InBottomPropsTypes {
  likes: string;
  numComments: number;
}

export default function PopularCommentBottom(props: InBottomPropsTypes) {
  const { likes, numComments } = props; 

  return(
    <BottomBox>
      <CommentBottomButton>
        <ReviewLikeCommentIcon/>
        <span>{likes}</span>
      </CommentBottomButton>
      <CommentBottomButton>
        <ReviewLikeUnActiveIcon/>
        <span>{numComments}</span>
      </CommentBottomButton>
    </BottomBox>
  )
}

const BottomBox = styled.div`
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
  &>span{
    color: ${({ theme }) => theme.colors.grey600};
  }
`;

const ReviewLikeCommentIcon = styled(ReviewLikeCommentIc)`
  width: 2rem;
  height: 2rem;
`
const ReviewLikeUnActiveIcon = styled(ReviewLikeUnActiveIc)`
  width: 2rem;
  height: 2rem;
`