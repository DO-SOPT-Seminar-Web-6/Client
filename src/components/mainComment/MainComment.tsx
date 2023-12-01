import styled from 'styled-components';
import { SectionContainer } from '@styles/globalStyle';
import MainCommentDetail from './MainCommentDetail';
import MainCommentHeader from './MainCommentHeader';

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
`;
