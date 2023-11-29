import styled from 'styled-components';

export const AnimationTitleText = styled.h1`
  ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.black};
`;

export const AnimationDetailText = styled.h2`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grey600};
`;
