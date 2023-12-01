import styled from 'styled-components';
import PopularCommentHeader from './PopularCommentHeader';
import PopularCommentBottom from './PopularCommentBottom';
import { MainContainer } from '@styles/Layout/MainContainer';
interface InPopularCommentPropsTypes {
  imageUrl: string;
  name: string;
  star: number;
  content: string;
  likeCount: number;
  commentCount: number;
  isLike: boolean;
}

export default function PopularCommentDetails(props: InPopularCommentPropsTypes) {
  const { imageUrl, name, star, content, likeCount, commentCount, isLike } = props;

  return (
    <CommentBox>
      <PopularCommentHeader name={name} imageUrl={imageUrl} star={star} />
      <PopularCommentText>{content}</PopularCommentText>
      <PopularCommentBottom likeCount={likeCount} commentCount={commentCount} isLike={isLike} />
    </CommentBox>
  );
}

const CommentBox = styled.section`
  ${MainContainer};
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
  color: ${({ theme }) => theme.colors.black};
`;
