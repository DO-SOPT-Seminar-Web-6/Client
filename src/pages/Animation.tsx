import styled from 'styled-components';
import AnimationTitle from '@components/animation/AnimationTitle';
import CommentSection from '@components/animation/CommentSection';
import MoviesSection from '@components/animation/MoviesSection';
import AnimationHeader from '@components/animation/Title/AnimationHeader';
import { SectionContainer } from '@styles/globalStyle';
import { AnimationLayout, ContentLayout } from '@styles/Layout/AnimationLayout';

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
