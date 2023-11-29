import styled from 'styled-components';
import BoxOfficeWrapper from './BoxOfficeWrapper';
import { boxOfficeMovies } from '@core/boxOfficeMovies';

export default function BoxOfficeArticle() {
  return (
    <Article>
      {boxOfficeMovies &&
        boxOfficeMovies.map((boxOffice) => {
          const { wrapperNumber, imgSrc, title, rate } = boxOffice;

          return <BoxOfficeWrapper wrapperNumber={wrapperNumber} imgSrc={imgSrc} title={title} rate={rate} />;
        })}
    </Article>
  );
}
const Article = styled.article`
  display: flex;
  gap: 1rem;
  width: 123rem;
  height: 33rem;
`;
