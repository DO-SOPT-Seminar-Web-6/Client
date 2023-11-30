import styled from 'styled-components';
import PopularCommentHeader from './PopularCommentHeader';
import PopularCommentBottom from './PopularCommentBottom';
import { MainContainer } from '@styles/Layout/MainContainer';

interface InPopularCommentPropsTypes {
  imgSrc: string;
  name: string;
  comments: string;
  likes: string;
  numComments: number;
}

/** Comment */
export default function PopularCommentDetails(props: InPopularCommentPropsTypes) {
  const { imgSrc, name, comments, likes, numComments } = props;

  return (
    <CommentBox>
      <PopularCommentHeader name={name} imgSrc={imgSrc} />
      <PopularCommentText>{comments}</PopularCommentText>
      <PopularCommentBottom likes={likes} numComments={numComments} />
    </CommentBox>
  );
}

const CommentBox = styled.section`
  ${MainContainer}
  background-color: ${({ theme }) => theme.colors.white};

  padding: 1rem;
  width: 43rem;
`;

const PopularCommentText = styled.p`
  display: flex;
  ${({ theme }) => theme.fonts.body2160};
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
  padding: 2rem 0;

  height: 14.6rem;
  color: ${({ theme }) => theme.colors.grey600};
`;
