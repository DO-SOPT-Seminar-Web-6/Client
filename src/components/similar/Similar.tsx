import SimilarHeader from "./SimilarHeader";
import {SectionContainer} from "@styles/globalStyle";
import SimilarArticle from "./SimilarArticle";
import styled from "styled-components";
import Button from "@components/common/Button/Button";

export default function Similar() {

  return (
    <Container>
      <Section>
        <SimilarHeader/>
        <SimilarArticle/>
      </Section>
      <Button/>
    </Container>
  )
}

const Container = styled(SectionContainer)`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 15.5rem 5.9rem 10rem 5.9rem;
`
const Section = styled.section`
  display: flex;
  flex-direction:column;
  gap: 3.5rem;
  height: 50.8rem
`;