import styled from 'styled-components';

/** header left section navigation */
export default function HeaderNav() {
  return (
    <HeaderNavigation>
      <HeaderText>영화</HeaderText>
      <HeaderText>TV</HeaderText>
      <HeaderText>책</HeaderText>
      <HeaderText>웹툰</HeaderText>
    </HeaderNavigation>
  );
}

const HeaderNavigation = styled.nav`
  ${({ theme }) => theme.fonts.body1};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 17.5rem;
  height: 3.3rem;
  color: ${({ theme }) => theme.colors.grey700};
`;

const HeaderText = styled.span`
  cursor: pointer;
`;
