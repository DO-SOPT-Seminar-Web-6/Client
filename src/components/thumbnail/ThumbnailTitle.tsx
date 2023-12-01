import styled from 'styled-components';
import { SectionContainer } from '@styles/globalStyle';
import ThumbnailTitleHeader from './ThumbnailTitleHeader';
import ThumbnailTitleDescription from './ThumbnailTitleDescription';

export default function ThumbnailTitle() {
  return (
    <Section>
      <ThumbnailTitleHeader />
      <ThumbnailTitleDescription />
    </Section>
  );
}

const Section = styled(SectionContainer)`
  position: absolute;
  bottom: 5.6rem;
  gap: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
`;
