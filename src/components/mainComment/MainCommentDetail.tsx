import styled from 'styled-components';
import Comment from '@components/common/Comment/Comment';
import useGetComment from '@hooks/useGetComment';

export default function MainCommentDetail() {
  const { data } = useGetComment('default');

  return (
    <MainCommentBox>
      {data &&
        data.map((mainComment) => {
          const { imageUrl, commentCount, isLike, likeCount, star, name, content } = mainComment;
          return (
            <Comment
              key={`${commentCount}-${star}-${name}`}
              imageUrl={imageUrl}
              commentCount={commentCount}
              isLike={isLike}
              likeCount={likeCount}
              star={star}
              name={name}
              content={content}
              isThumbnail={true}
            />
          );
        })}
    </MainCommentBox>
  );
}

const MainCommentBox = styled.section`
  display: flex;
  flex-direction: row;
  /* stylelint-disable declaration-block-no-shorthand-property-overrides*/
  flex-flow: row wrap;
  gap: 1rem;
  align-items: space-between;
  margin-top: 3.5rem;
`;
