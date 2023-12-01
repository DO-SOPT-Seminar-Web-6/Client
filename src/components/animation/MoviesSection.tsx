import styled from 'styled-components';
import AnimationMovies from './MovieSection/AnimationMovies';
import MoviesSectionTitle from './MovieSection/MoviesSectionTitle';

export default function MoviesSection() {
  return (
    <SectonWrapper>
      <MoviesSectionTitle />
      <AnimationMovies />
    </SectonWrapper>
  );
}

const SectonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 69.2rem;
`;
