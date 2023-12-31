import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';

export default function MainCommentHeader() {
  const navigate = useNavigate();

  function handleMoveToComments() {
    navigate('/comments');
  }

  return (
    <Header>
      <HeaderLeft>
        <HeaderLeftSpan>코멘트</HeaderLeftSpan>
        <HeaderLeftText>6000+</HeaderLeftText>
      </HeaderLeft>
      <HeaderRight>
        <button onClick={handleMoveToComments}>더보기</button>
      </HeaderRight>
    </Header>
  );
}

const Header = styled.section`
  ${flexCenter};
  gap: 100.2rem;
  width: 124.6rem;
  height: 3.5rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 20rem;
`;

const HeaderLeftSpan = styled.span`
  ${({ theme }) => theme.fonts.title2};
  line-height: 3.5rem;
`;

const HeaderLeftText = styled.p`
  ${({ theme }) => theme.fonts.title3};
  line-height: 3.5rem;
  color: ${({ theme }) => theme.colors.mainPink};
`;

const HeaderRight = styled.div`
  width: 4.5rem;
  height: 2.3rem;
  & > button {
    ${({ theme }) => theme.fonts.subTitle5};
    cursor: point;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.mainPink};
  }
`;
