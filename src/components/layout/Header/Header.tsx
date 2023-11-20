import styled from 'styled-components';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

/** header */
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft />
      <HeaderRight />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.3rem;
  padding: 0 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
`;
