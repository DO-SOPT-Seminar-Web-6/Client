import styled from 'styled-components'
import ThumbnailTitleHeader from './ThumbnailTitleHeader'
import ThumbnailTitleDescription from './ThumbnailTitleDescription'

import { SectionContainer } from '@styles/globalStyle'
export default function ThumbnailTitle() {
  return (
    <Section>
      <ThumbnailTitleHeader/>
      <ThumbnailTitleDescription/>
    </Section>

  )
}

const Section = styled(SectionContainer)`
  position:absolute;
  bottom:5.6rem;
  gap:0.8rem;
  color: ${({ theme }) => theme.colors.white};
`
