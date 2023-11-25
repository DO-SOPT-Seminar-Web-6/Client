import styled from 'styled-components';
export default function ThumbnailTitleHeader() {
  return (
    <Header>
      <h2>그대들은 어떻게 살것인가</h2>
    </Header>
  );
}

const Header = styled.div`
  ${({ theme }) => theme.fonts.largeTitle};
  line-height: 6.2rem;
`