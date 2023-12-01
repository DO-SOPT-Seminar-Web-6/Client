import styled from 'styled-components';
import { boxOfficeMovies } from '@core/boxOfficeMovies';
import BoxOfficeWrapper from './BoxOfficeWrapper';

export default function BoxOfficeArticle() {
  return (
    <Article>
      {boxOfficeMovies &&
        boxOfficeMovies.map((boxOffice) => {
          const { wrapperNumber, imgSrc, title, rate } = boxOffice;

          return (
            <BoxOfficeWrapper
              key={`${wrapperNumber}-${title}`}
              wrapperNumber={wrapperNumber}
              imgSrc={imgSrc}
              title={title}
              rate={rate}
            />
          );
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
