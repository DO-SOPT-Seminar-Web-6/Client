import styled from 'styled-components';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderRight from './HeaderRight/HeaderRight';
import { SectionContainer } from '@styles/globalStyle';

/** header */
export default function Header() {
  return (
    <HeaderContainer as="header">
      <HeaderLeft />
      <HeaderRight />
    </HeaderContainer>
  );
}

const HeaderContainer = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
  height: 6.3rem;
`;
