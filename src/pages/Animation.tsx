import styled from 'styled-components';
import AnimationHeader from '@components/animation/Title/AnimationHeader';
import AnimationTitle from '@components/animation/AnimationTitle';
import { SectionContainer } from '@styles/globalStyle';
import { AnimationLayout, ContentLayout } from '@styles/Layout/AnimationLayout';
import MoviesSection from '@components/animation/MoviesSection';
import CommentSection from '@components/animation/CommentSection';

export default function Animation() {
  return (
    <>
      <SectionWrapper>
        <AnimationLayout>
          <AnimationHeader />
          <ContentLayout>
            <AnimationTitle />
            <MoviesSection />
            <CommentSection />
          </ContentLayout>
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
