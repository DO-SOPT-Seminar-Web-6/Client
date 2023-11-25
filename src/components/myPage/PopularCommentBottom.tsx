import ReviewLikeCommentIc from '@assets/icon/review/reviewLikeCommentIc.svg';
import ReviewLikeUnActiveIc from '@assets/icon/review/reviewLikeUnActiveIc.svg';
import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';

interface InBottomPropsTypes {
  likes: string;
  numComments: number;
}

export default function PopularCommentBottom(props: InBottomPropsTypes) {
  const { likes, numComments } = props; 

  return(
    <BottomBox>
      <CommentBottomButton>
        <img src={ReviewLikeUnActiveIc} />
        <span>{likes}</span>
      </CommentBottomButton>
      <CommentBottomButton>
        <img src={ReviewLikeCommentIc} />
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
