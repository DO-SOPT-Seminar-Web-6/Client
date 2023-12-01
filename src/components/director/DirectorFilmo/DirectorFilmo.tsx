import styled from 'styled-components';
import FilmoContainer from '@components/director/DirectorFilmo/FilmoContainer';
import FilmoTable from '@components/director/DirectorFilmo/FilmoTable';

/** director page */
export default function DirectorFilmo() {
  return (
    <FilmoContainerBox>
      <FilmoSection>
        <FilmoSectionTitle id="filmography_movies">영화</FilmoSectionTitle>
        <FilmoContainer id="filmography_director" title="감독" />
        <FilmoContainer id="filmography_scenario" title="각본" />
        <FilmoContainer id="filmography_cast" title="출연" />
      </FilmoSection>
      <FilmoTable />
    </FilmoContainerBox>
  );
}

const FilmoContainerBox = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: flex-start;
  margin-bottom: 6rem;
  padding: 0 6rem;
  width: 100%;
`;

const FilmoSection = styled.section`
  width: 99.2rem;
`;

const FilmoSectionTitle = styled.h3`
  ${({ theme }) => theme.fonts.title2};

  margin-bottom: 1.6rem;
`;
