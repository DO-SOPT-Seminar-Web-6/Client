import styled from 'styled-components';
import { CollectDetailLikeTopIc, CollectDetailChatTopIc, CollectDetailShareTopIc } from '@assets/index';

export default function AnimationTitleButtons() {
  return (
    <ButtonBox>
      <Button>
        <CollectDetailLikeTopIcon />
        <ButtonTitle>좋아요</ButtonTitle>
      </Button>
      <DivideLine />
      <Button>
        <CollectDetailChatTopIcon />
        <ButtonTitle>댓글</ButtonTitle>
      </Button>
      <DivideLine />
      <Button>
        <CollectDetailShareTopIcon />
        <ButtonTitle>공유</ButtonTitle>
      </Button>
    </ButtonBox>
  );
}

const CollectDetailLikeTopIcon = styled(CollectDetailLikeTopIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
const CollectDetailChatTopIcon = styled(CollectDetailChatTopIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
const CollectDetailShareTopIcon = styled(CollectDetailShareTopIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const ButtonTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.subTitle5};
`;

const Button = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  height: 2.4rem;
`;

const ButtonBox = styled.div`
  display: flex;

  gap: 8.4rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
  height: 5.2rem;
`;

const DivideLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.grey600};
  height: 1.2rem;
`;
