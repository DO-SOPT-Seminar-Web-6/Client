import styled from 'styled-components';
import AnimationTitle from '@components/animation/AnimationTitle';
import CommentSection from '@components/animation/CommentSection';
import MoviesSection from '@components/animation/MoviesSection';
import AnimationHeader from '@components/animation/Title/AnimationHeader';
import { SectionContainer } from '@styles/globalStyle';
import { AnimationLayout, ContentLayout } from '@styles/Layout/AnimationLayout';
import MoviesSection from '@components/animation/MoviesSection';
import CommentSection from '@components/animation/CommentSection';
import { Suspense } from 'react';

export default function Animation() {
  return (
    <>
      <Suspense fallback={<div>로딩중</div>}>
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
      </Suspense>
    </>
  );
}

const SectionWrapper = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
