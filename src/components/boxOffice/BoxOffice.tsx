import { SectionContainer } from '@styles/globalStyle';
import BoxOfficeHeader from './BoxOfficeHeader';
import BoxOfficeArticle  from './BoxOfficeArticle';
import styled from 'styled-components';
export default function BoxOffice() {

  return (
    <Section>
      <BoxOfficeHeader/>
      <BoxOfficeArticle/>
    </Section>

  )
}

const Section = styled(SectionContainer)`
  display: flex;
  flex-direction:column;
  gap: 3.5rem; 
  padding: 5.5rem 5.9rem 5.5rem 5.9rem;
  height: 50.8rem;
`;
