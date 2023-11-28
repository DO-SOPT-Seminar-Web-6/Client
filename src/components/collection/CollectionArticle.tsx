import styled from "styled-components";

import {collectionImages} from '@core/collectionImages';
import MovieArticle from "@components/common/MovieArticle/MovieArticle";

export default function CollectionArticle() {
  const imgSize : number[] = [19.8, 29.6]
  const keyword : string = "좋아요"
  const icon : boolean = false
  return (
    <Article>
      {collectionImages && collectionImages.map((image)=>{
        const {imgSrc, title, likes} = image;
        return(
          <MovieArticle
          imgSrc={imgSrc}
          imgHeight={imgSize[1]}
          imgWidth={imgSize[0]}
          title={title}
          rate={likes}
          keyword={keyword}
          icon={icon}
          />
        );
      })}
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  gap:1.2rem;
  width: 123rem;
  height: 33rem;
`