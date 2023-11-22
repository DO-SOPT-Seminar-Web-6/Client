import MovieArticle from '@components/common/MovieArticle/MovieArticle'
import SimilarNum1Img from '@assets/image/similar/similarNum1Img.png';
import SimilarNum2Img from '@assets/image/similar/similarNum2Img.png';
import SimilarNum3Img from '@assets/image/similar/similarNum3Img.png';
import SimilarNum4Img from '@assets/image/similar/similarNum4Img.png';
import SimilarNum5Img from '@assets/image/similar/similarNum5Img.png';
import SimilarNum6Img from '@assets/image/similar/similarNum6Img.png';
import styled from 'styled-components';

export default function SimilarArticle() {
  return (
    <Article>
      <MovieArticle
        imgSrc={SimilarNum1Img}
        title="그대들, 어떻게 살 것인가"
        rate={3.8}
        tag={['애니메이션', '모험']}
      />
      <MovieArticle
        imgSrc={SimilarNum2Img}
        title="하울의 움직이는 성"
        rate={3.8}
        tag={['가족', '애니메이션']}
      />
      <MovieArticle
        imgSrc={SimilarNum3Img}
        title="마녀 배달부 키키"
        rate={3.8}
        tag={['가족', '애니메이션']}
      />
      <MovieArticle
        imgSrc={SimilarNum4Img}
        title="마녀 배달부 키키"
        rate={3.8}
        tag={['가족', '애니메이션']}
      />
      <MovieArticle
        imgSrc={SimilarNum5Img}
        title="마녀 배달부 키키"
        rate={3.8}
        tag={['가족', '애니메이션']}
      />
      <MovieArticle
        imgSrc={SimilarNum6Img}
        title="마녀 배달부 키키"
        rate={3.8}
        tag={['가족', '애니메이션']}
      />
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  gap:1.2rem;
  width: 123rem;
  height: 33rem;
`