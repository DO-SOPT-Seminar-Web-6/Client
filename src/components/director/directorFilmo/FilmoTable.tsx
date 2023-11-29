import styled, { css } from 'styled-components';

/** Filmography 목차 */
export default function FilmoTable() {
  return (
    <Container>
      <ContentTableLink selected={true}>영화</ContentTableLink>
      <SubContainer>
        <ContentTableLink selected={true}>감독</ContentTableLink>
        <ContentTableLink selected={false}>각본</ContentTableLink>
        <ContentTableLink selected={false}>출연</ContentTableLink>
      </SubContainer>
      <ContentTableLink selected={false}>책</ContentTableLink>
    </Container>
  );
}

const Container = styled.aside`
  ${({ theme }) => theme.fonts.body2};

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 2rem 0;
  width: 23.6rem;
  height: 19.6rem;
`;

interface ContentInTableLinkPropsTypes {
  selected: boolean;
}

const ContentTableLink = styled.a<ContentInTableLinkPropsTypes>`
  cursor: pointer;
  padding: 0.4rem 1rem 4px 0.8rem;
  width: 100%;
  height: 2.8rem;

  ${({ selected }) =>
    selected &&
    css`
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    `};
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-left: 1.6rem;
`;
