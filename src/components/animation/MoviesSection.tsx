import styled from 'styled-components';
import MoviesSectionTitle from './MoviesSectionTitle';
import AnimationMovies from './AnimationMovies';

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
