import styled from 'styled-components';

export const BoxHeader = styled.h2`
  ${({ theme }) => theme.fonts.body5};
  margin-bottom: 1.2rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.grey600};
`;
