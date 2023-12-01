import styled from 'styled-components';
import PopularCommentDetails from './PopularCommentDetails';
import useGetMyPageComment from '@hooks/useGetMyPageComment';

export default function MyPagePopularComment() {
  const {data} = useGetMyPageComment(); 

  return (
    <PopularCommentSection>
      <Header>인기 코멘트</Header>
      <PopularCommentBox>
        {data?.slice(6,8).map((data) => {
            const { imageUrl, name, star, content, likeCount, commentCount, isLike } = data;
            return (
              <PopularCommentDetails
                imageUrl={imageUrl}
                name={name}
                star={star}
                content={content}
                likeCount={likeCount}
                commentCount={commentCount}
                isLike={isLike}
              />
            );
          })}
      </PopularCommentBox>
    </PopularCommentSection>
  );
}

const PopularCommentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 3rem 0;
  height: 28.1rem;
`;

const Header = styled.h2`
  ${({ theme }) => theme.fonts.body5}; 
  color: ${({ theme }) => theme.colors.grey600};
`;

const PopularCommentBox = styled.section`
  display: flex;
  gap: 2rem;
`;
