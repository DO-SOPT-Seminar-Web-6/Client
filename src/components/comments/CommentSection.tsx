import Comment from '@components/common/Comment/Comment';
import styled from 'styled-components';

//여기다가 나열해주시면 됩니다!
export default function CommentSection() {
  return (
    <Wrapper>
      <Comment userName="너" content="설명" />
      <Comment userName="너" content="설명" />
      <Comment userName="너" content="설명" />
      <Comment userName="너" content="설명" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;
