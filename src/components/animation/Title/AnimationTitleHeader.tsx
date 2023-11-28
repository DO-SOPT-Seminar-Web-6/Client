import styled from 'styled-components';
import { AnimationTitleText } from '@styles/common/commonText';

export default function AnimationTitleHeader() {
  return (
    <Header>
      <AnimationTitleText>애니메이션</AnimationTitleText>
      <TitleDetail>애니메이션은 이제 애들만의 전유물이 아니다</TitleDetail>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const TitleDetail = styled.p`
  ${({ theme }) => theme.fonts.subTitle3};
  color: ${({ theme }) => theme.colors.grey600};
`;
