import styled from 'styled-components';
import AnimationHeader from '@components/animation/AnimationHeader';
import AnimationTitle from '@components/animation/AnimationTitle';
import { SectionContainer } from '@styles/globalStyle';
import MoviesSection from '@components/animation/MoviesSection';
import { AnimationLayout, ContentLayout } from '@styles/Layout/AnimationLayout';

export default function Animation() {
  return (
    <>
      <SectionWrapper>
        <AnimationLayout>
          <AnimationHeader />

          <AnimationTitle />
          <MoviesSection />
        </AnimationLayout>
      </SectionWrapper>
    </>
  );
}

const SectionWrapper = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
