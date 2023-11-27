import styled from 'styled-components';

export default function CommentToggle() {
  return (
    <ToggleWrapper>
      <Text>좋아요 수 순</Text>
      <Text>댓글 수 순</Text>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;

  box-shadow: 0 0 6 ${({ theme }) => theme.colors.white} 0.15;

  width: 17.6rem;
  height: 8.6rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.body4};
  cursor: pointer;

  width: 14.8rem;
  height: 2.8rem;
  color: ${({ theme }) => theme.colors.black};
`;
