import styled from 'styled-components';
export default function AnimationTitleHeader() {
  return (
    <Header>
      <AnimationTitle>애니메이션</AnimationTitle>
      <TitleDetail>애니메이션은 이제 애들만의 전유물이 아니다</TitleDetail>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const AnimationTitle = styled.h1`
  ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.black};
`;

const TitleDetail = styled.p`
  ${({ theme }) => theme.fonts.subTitle3};
  color: ${({ theme }) => theme.colors.grey600};
`;
