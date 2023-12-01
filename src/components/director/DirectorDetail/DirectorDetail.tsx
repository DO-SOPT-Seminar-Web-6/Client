import styled from 'styled-components';
import { SectionContainer } from '@styles/globalStyle';
import DirectorInfo from './DirectorInfo';
import DirectorLike from './DirectorLike';
import DirectorSubInfo from './DirectorSubInfo';

/** director page */
export default function DirectorDetail() {
  return (
    <FigureContainer>
      <DirectorInfo />
      <DirectorSubInfo />
      <DirectorLike />
    </FigureContainer>
  );
}

const FigureContainer = styled(SectionContainer)`
  padding-top: 2.7rem;
  padding-bottom: 2.7rem;
`;
