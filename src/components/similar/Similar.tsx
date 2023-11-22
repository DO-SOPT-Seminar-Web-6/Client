import SimilarHeader from "./SimilarHeader";
import { SectionContainer } from "@styles/globalStyle";
import SimilarArticle from "./SimilarArticle";
import styled from "styled-components";

export default function Similar() {

  return (
    <Section>
      <SimilarHeader/>
      <SimilarArticle/>
    </Section>
  )
}

const Section = styled(SectionContainer)`
  display: flex;
  flex-direction:column;
  gap: 3.5rem;
  padding: 15.5rem 5.9rem 5.5rem 5.9rem;
  height: 70.8rem
`;