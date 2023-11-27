import styled from 'styled-components';
import { AnimationTitleText } from '@styles/common/commonText';

export default function MoviesSectionTitle() {
  return (
    <Title>
      <AnimationTitleText>작품들</AnimationTitleText>
      <MoviesNumber>933</MoviesNumber>
    </Title>
  );
}

const MoviesNumber = styled.p`
  ${({ theme }) => theme.fonts.subTitle3};
  color: ${({ theme }) => theme.colors.mainPink};
`;

const Title = styled.span`
  display: flex;

  gap: 0.6rem;
  align-items: center;

  margin-top: 8rem;
  margin-bottom: 2.4rem;
`;
