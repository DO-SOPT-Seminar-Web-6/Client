import styled from 'styled-components';
import MovieArticle from '@components/common/MovieArticle/MovieArticle';
import { similarWorks } from '@core/similarWorks';

export default function SimilarArticle() {
  const keyword: string = '평균';

  return (
    <Article>
      {similarWorks &&
        similarWorks.map((works) => {
          const { imgSrc, title, rate, tag } = works;
          return <MovieArticle imgSrc={imgSrc} title={title} rate={rate} tag={tag} keyword={keyword} icon={true} />;
        })}
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  gap: 1.2rem;
  width: 123rem;
  height: 33rem;
`;
