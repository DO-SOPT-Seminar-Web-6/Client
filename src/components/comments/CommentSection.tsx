import { customAxios } from '@api/customAxios';
import getComment from '@api/getComment';
import Comment from '@components/common/Comment/Comment';
import useGetComment from '@hooks/useGetComment';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface InCommentSectionPropsTypes {
  sort: string;
}

//여기다가 나열해주시면 됩니다!
export default function CommentSection({ sort }: InCommentSectionPropsTypes) {
  // useQuery를 이용한 방법 -> 아직 안 됨.
  const { data } = useGetComment(sort);

  console.log(sort);

  return (
    <Wrapper>
      <h1>{sort}</h1>
      {data?.map(({ imageUrl, content, commentCount, isLike, likeCount, name, star }) => (
        <Comment
          key={`${imageUrl}-${content}`}
          imageUrl={imageUrl}
          commentCount={commentCount}
          isLike={isLike}
          likeCount={likeCount}
          star={star}
          name={name}
          content={content}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-bottom: 12rem;
`;
