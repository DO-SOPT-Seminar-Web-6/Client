import { SectionContainer } from '@styles/globalStyle';
import styled from 'styled-components';
import MainCommentHeader from './MainCommentHeader';
import MainCommentDetail from './MainCommentDetail';

export default function MainComment() {
  return (
    <MainCommentContainer>
      <MainCommentHeader />
      <MainCommentDetail />
    </MainCommentContainer>
  );
}

const MainCommentContainer = styled(SectionContainer)`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4.4rem 5.8rem 5.3rem;
  height: 68rem;
`;
