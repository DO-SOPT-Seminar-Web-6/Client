import styled from 'styled-components';
import { SectionContainer } from '@styles/globalStyle';
import CollectionHeader from './CollectionHeader';
import CollectionArticle from './CollectionArticle';

export default function Collection() {
  return (
    <Section>
      <CollectionHeader />
      <CollectionArticle />
    </Section>
  );
}

const Section = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 12.3rem 5.9rem 5.5rem;
  height: 62rem;
`;
