import { BannerProfileIc } from '@assets/index';
import styled from 'styled-components';
import { BoxHeader } from '@styles/common/myPage/ReviewBoxHeader';

interface InBoxPropsTypes {
  comment: string;
}
export default function MyCommentBox(props: InBoxPropsTypes) {
  const { comment } = props;

  return (
    <CommentBox>
      <BoxHeader>내가 쓴 코멘트</BoxHeader>
      <MyComment>
        <BannerProfileIcon />
        <Text>{comment}</Text>
      </MyComment>
    </CommentBox>
  );
}

const CommentBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 4rem 0 0;
`;
const MyComment = styled.article`
  display: flex;
  gap: 1.7rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  width: 100%;
  height: 10rem;
`;
const BannerProfileIcon = styled(BannerProfileIc)`
  width: 5.8rem;
  height: 5.8rem;
`;
const Text = styled.p`
  ${({ theme }) => theme.fonts.body2};
  width: 9.3rem;
  height: 4rem;
  line-height: 2rem;
`;
