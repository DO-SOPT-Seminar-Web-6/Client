import { useState } from 'react';
import { flexCenter } from '@styles/globalStyle';
import styled from 'styled-components';
import { CollectDetailChatBottomIc } from '@assets/index';
import { useMutation, useQueryClient } from 'react-query';
import { postCollectionAnimation } from '@api/postCollectionAnimation';

export default function CommentInput() {
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient();

  const { mutate: postComment } = useMutation(postCollectionAnimation, {
    onSuccess: () => {
      queryClient.invalidateQueries('getAnimationCollection');
      setInputValue('');
    },
    onSettled: () => {
      console.log('loading..');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function handleClickPostButton() {
    if (inputValue.trim() !== '') {
      postComment({ userId: 1, content: inputValue });
    }
  }

  function handleChangeComment(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <Wrapper>
      <CommentInputBox
        onChange={handleChangeComment}
        value={inputValue}
        placeholder="컬렉션에 댓글을 남겨보세요."
        type="text"
      />
      <InputSubmitButton onClick={handleClickPostButton}>
        <CollectDetailChatBottomIcon />
        등록
      </InputSubmitButton>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  gap: 2.4rem;
  justify-content: space-between;
  margin: 2.7rem 0rem;
  width: 68rem;
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
