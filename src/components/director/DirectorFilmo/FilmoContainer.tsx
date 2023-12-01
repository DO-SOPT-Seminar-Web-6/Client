import styled from 'styled-components';
import Button from '@components/common/Button/Button';
import MovieArticle from '@components/common/MovieArticle/MovieArticle';
import { castDetailMovies } from '@core/directorMovies';
import useShowMore from '@hooks/useShowMore';

interface InFilmoContainerPropsTypes {
  id: string;
  title: string;
}

/** filmo 공통 container */
export default function FilmoContainer(props: InFilmoContainerPropsTypes) {
  const { id, title } = props;
  const { isOpen, handleShowMore } = useShowMore();

  return (
    <FilmoBox>
      <FilmoTitle id={id}>{title}</FilmoTitle>
      <FilmoList $isOpen={isOpen}>
        {castDetailMovies.map(({ img, title, rate, subInfo }) => (
          <li key={`${title}-${rate}-${subInfo}`}>
            <MovieArticle imgSrc={img} title={title} rate={rate} subInfo={subInfo} />
          </li>
        ))}
      </FilmoList>
      <Button isOpen={isOpen} handleShowMore={handleShowMore} />
    </FilmoBox>
  );
}

const FilmoBox = styled.div`
  margin-bottom: 6rem;
`;

const FilmoTitle = styled.h4`
  ${({ theme }) => theme.fonts.subTitle2};

  margin-bottom: 1.6rem;
`;

interface InFilmoListPropsTypes {
  $isOpen: boolean;
}

const FilmoList = styled.ul<InFilmoListPropsTypes>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2.4rem;
  grid-column-gap: 1.6rem;
  margin-bottom: 4rem;
  width: 100%;
  height: 87.4rem;
  height: ${({ $isOpen }) => ($isOpen ? 'auto' : '87.4rem')};
  overflow: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
`;
