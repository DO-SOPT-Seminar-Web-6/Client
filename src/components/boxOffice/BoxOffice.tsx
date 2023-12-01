import styled from 'styled-components';
import { SectionContainer } from '@styles/globalStyle';
import BoxOfficeArticle from './BoxOfficeArticle';
import BoxOfficeHeader from './BoxOfficeHeader';

export default function BoxOffice() {
  return (
    <Section>
      <BoxOfficeHeader />
      <BoxOfficeArticle />
    </Section>
  );
}

const Section = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 5.5rem 5.9rem 5.5rem 5.9rem;
  height: 50.8rem;
`;
