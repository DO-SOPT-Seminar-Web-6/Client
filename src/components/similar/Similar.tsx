import styled from 'styled-components';
import Button from '@components/common/Button/Button';
import useShowMore from '@hooks/useShowMore';
import { SectionContainer } from '@styles/globalStyle';
import SimilarHeader from './SimilarHeader';
import SimilarArticle from './SimilarArticle';

export default function Similar() {
  const { isOpen, handleShowMore } = useShowMore();

  return (
    <Container>
      <Section>
        <SimilarHeader />
        <SimilarArticle />
      </Section>
      <Button isOpen={isOpen} handleShowMore={handleShowMore} />
    </Container>
  );
}

const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15.5rem 5.9rem 10rem 5.9rem;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  height: 50.8rem;
`;
