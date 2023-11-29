import styled from 'styled-components';

import MovieArticle from '@components/common/MovieArticle/MovieArticle';
import { animationMovies } from '@core/animationMovies';

export default function AnimationMovies() {
  const imgSize: number[] = [16.4, 23.8];

  return (
    <MoviesArr>
      {animationMovies &&
        animationMovies.map((movie) => {
          const { img, title, rate, subInfo } = movie;
          return (
            <MovieArticle
              titleLength={imgSize[0]}
              key={title}
              icon={true}
              keyword="평점"
              imgHeight={imgSize[1]}
              imgWidth={imgSize[0]}
              imgSrc={img}
              title={title}
              rate={rate}
              subInfo={subInfo}
            />
          );
        })}
    </MoviesArr>
  );
}

const MoviesArr = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
