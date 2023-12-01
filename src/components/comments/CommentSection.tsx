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
  // axios를 이용한 방법 -> 이건 됩니다.
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function todo() {
  //     const response = await customAxios.get('/api/comment', {
  //       params: {
  //         sort,
  //       },
  //     });
  //     setData(response.data.data);
  //   }
  //   todo();
  // }, [sort]);

  // useQuery를 이용한 방법 -> 아직 안 됨.
  const { data, refetch } = useGetComment(sort);

  console.log(sort);

  return (
    <Wrapper>
      {/* 아래는 렌더링 되고 있는지 테스트를 위해 추가 */}
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
