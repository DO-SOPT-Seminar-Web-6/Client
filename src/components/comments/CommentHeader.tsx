import { flexCenter } from '@styles/globalStyle';
import { ReviewFilterIc } from '@assets/index';
import styled from 'styled-components';

export default function CommentHeader() {
  return (
    <Wrapper>
      <TitleText>코멘트</TitleText>
      <OrderButton>
        <ReviewFilterIcon />
        좋아요순
      </OrderButton>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;

const TitleText = styled.h1`
  ${({ theme }) => theme.fonts.largeTitle};
  color: ${({ theme }) => theme.colors.black};
`;

const OrderButton = styled.button`
  ${flexCenter}
  gap: 0.4rem;
  ${({ theme }) => theme.fonts.subTitle5};
  color: ${({ theme }) => theme.colors.grey600};
`;

const ReviewFilterIcon = styled(ReviewFilterIc)`
  width: 2rem;
  height: 2rem;
`;
