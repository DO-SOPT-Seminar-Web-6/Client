import AnimationHeader from '@components/animation/AnimationHeader';
import AnimationTitle from '@components/animation/AnimationTitle';
import { SectionContainer } from '@styles/globalStyle';
import React from 'react';

export default function Animation() {
  return (
    <>
      <AnimationHeader />
      <SectionContainer>
        <AnimationTitle />
      </SectionContainer>
    </>
  );
}
