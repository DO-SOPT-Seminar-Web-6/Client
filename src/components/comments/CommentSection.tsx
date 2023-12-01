import { customAxios } from '@api/customAxios';
import Comment from '@components/common/Comment/Comment';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface InCommentSectionPropsTypes {
  sort: string;
}

//여기다가 나열해주시면 됩니다!
export default function CommentSection({ sort }: InCommentSectionPropsTypes) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function todo() {
      const response = await customAxios.get('/api/comment', {
        params: {
          sort,
        },
      });
      setData(response.data.data);
    }
    todo();
  }, [sort]);

  return (
    <Wrapper>
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
