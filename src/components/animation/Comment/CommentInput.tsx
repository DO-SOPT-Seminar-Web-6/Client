import { flexCenter } from '@styles/globalStyle';
import styled from 'styled-components';
import { CollectDetailChatBottomIc } from '@assets/index';

export default function CommentInput() {
  return (
    <Wrapper>
      <CommentInputBox placeholder="컬렉션에 댓글을 남겨보세요." type="text" />
      <InputSubmitButton>
        <CollectDetailChatBottomIcon />
        등록
      </InputSubmitButton>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  gap: 2.4rem;
  margin: 2.7rem 0rem;
  width: 100%;
`;

const CommentInputBox = styled.input`
  display: flex;

  border: 1px solid ${({ theme }) => theme.colors.grey300};

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.grey100};
  padding-left: 2rem;
  width: 57rem;

  height: 4.6rem;
  color: ${({ theme }) => theme.colors.grey500};
  ${({ theme }) => theme.fonts.subTitle3};
`;

const InputSubmitButton = styled.button`
  ${flexCenter}
  gap: 0.2rem;
  ${({ theme }) => theme.fonts.subTitle3};
  color: ${({ theme }) => theme.colors.grey600};
`;

const CollectDetailChatBottomIcon = styled(CollectDetailChatBottomIc)`
  width: 2.1rem;
  height: 2.1rem;
`;
