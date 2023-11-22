import styled from "styled-components";
import CollectionWrapper from "./CollectionWrapper";
import CollectionNum1 from '@assets/image/collection/collectionNum1Img.png'; 
import CollectionNum2 from '@assets/image/collection/collectionNum2Img.png'; 
import CollectionNum3 from '@assets/image/collection/collectionNum3Img.png'; 
import CollectionNum4 from '@assets/image/collection/collectionNum4Img.png'; 
import CollectionNum5 from '@assets/image/collection/collectionNum5Img.png'; 
import CollectionNum6 from '@assets/image/collection/collectionNum6Img.png'; 

export default function CollectionArticle() {

  return (
    <Article>
      <CollectionWrapper imgSrc={CollectionNum1} title="한번쯤은 꼭 봤으면 하는 영화" likes={11502} />
      <CollectionWrapper imgSrc={CollectionNum2} title="너무 사랑하는 일본의 영화" likes={1869} />
      <CollectionWrapper imgSrc={CollectionNum3} title="애니메이션" likes={1324} />
      <CollectionWrapper imgSrc={CollectionNum4} title="이상한 꿈 같은 영화" likes={262} />
      <CollectionWrapper imgSrc={CollectionNum5} title="일본교복이 나오는 영화" likes={254} />
      <CollectionWrapper imgSrc={CollectionNum6} title="괴작 혹은 띵작" likes={180} />
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  gap:1.2rem;
  width: 123rem;
  height: 33rem;
`