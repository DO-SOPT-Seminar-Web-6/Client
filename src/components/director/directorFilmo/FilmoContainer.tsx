import MovieArticle from '@components/common/MovieArticle/MovieArticle';
import styled from 'styled-components';
import Button from '@components/common/Button/Button';
import useShowMore from '@hooks/useShowMore';
import { castDetailMovies } from '@core/\bdirectorMovies';

interface InFilmoContainerPropsTypes {
  title: string;
}

/** filmo 공통 container */
export default function FilmoContainer(props: InFilmoContainerPropsTypes) {
  const { title } = props;
  const { isOpen, handleShowMore } = useShowMore();

  return (
    <>
      <FilmoTitle>{title}</FilmoTitle>
      <FilmoList isOpen={isOpen}>
        {castDetailMovies.map(({ img, title, rate, subInfo }) => (
          <li key={`${title}-${rate}-${subInfo}`}>
            <MovieArticle imgSrc={img} title={title} rate={rate} subInfo={subInfo} />
          </li>
        ))}
      </FilmoList>
      <Button isOpen={isOpen} handleShowMore={handleShowMore} />
    </>
  );
}

const FilmoTitle = styled.h4`
  ${({ theme }) => theme.fonts.subTitle2};

  margin-bottom: 1.6rem;
`;

interface InFilmoListPropsTypes {
  isOpen: boolean;
}

const FilmoList = styled.ul<InFilmoListPropsTypes>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2.4rem;
  grid-column-gap: 1.6rem;
  margin-bottom: 4rem;
  width: 100%;
  height: 87.4rem;
  height: ${({ isOpen }) => (isOpen ? 'auto' : '87.4rem')};
  overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;
