import { flexCenter } from '@styles/globalStyle';
import styled from 'styled-components';

interface CommentTogglePropsTypes {
  setIsReorder: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CommentToggle(props: CommentTogglePropsTypes) {
  const { setIsReorder, setIsLiked } = props;

  //좋아요 수 순
  function handleClickLikedOrder() {
    setIsReorder(false);
    setIsLiked(true);
  }

  //댓글수순
  function handleClickCommentsNumOrder() {
    setIsReorder(false);
    setIsLiked(false);
  }

  return (
    <ToggleWrapper>
      <Text onClick={handleClickLikedOrder}>좋아요 수 순</Text>
      <Text onClick={handleClickCommentsNumOrder}>댓글 수 순</Text>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;

  gap: 1rem;
  margin-top: -1.5rem;

  border-radius: 7px;

  box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.black};

  width: 17.6rem;
  height: 8.6rem;
`;

const Text = styled.p`
  ${flexCenter};
  justify-content: flex-start;
  ${({ theme }) => theme.fonts.body4};
  cursor: pointer;
  width: 14.8rem;
  height: 2.8rem;
  color: ${({ theme }) => theme.colors.black};
`;
