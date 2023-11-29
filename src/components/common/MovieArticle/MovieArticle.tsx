import styled from 'styled-components';
import MovieTag from './MovieTag';
import MovieInfo from './MovieInfo';
interface InImageTypes {
  imgWidth?: number;
  imgHeight?: number;
}
interface InMovieArticleProps extends InImageTypes {
  imgSrc: string;
  title: string;
  rate: number;
  keyword: string;
  icon: boolean;
  subInfo?: string;
  titleLength?: number;
  tag?: string[];
}

/** each movie info  */
export default function MovieArticle(props: InMovieArticleProps) {
  const {
    imgSrc,
    title,
    titleLength,
    rate,
    subInfo,
    tag,
    keyword,
    icon = true,
    imgWidth = 23.6,
    imgHeight = 35.2,
  } = props;
  return (
    <ArticleContainer>
      <ArticleImage src={imgSrc} imgWidth={imgWidth} imgHeight={imgHeight} />
      <MovieInfo title={title} titleLength={titleLength} rate={rate} subInfo={subInfo} keyword={keyword} icon={icon} />
      <MovieTag tag={tag} />
    </ArticleContainer>
  );
}

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

const ArticleImage = styled.img<InImageTypes>`
  width: ${({ imgWidth }) => `${imgWidth}rem`};
  height: ${({ imgHeight }) => `${imgHeight}rem`};
`;

{
  /* 이런 식으로 사용하면 됩니다 */
}
{
  /* <MovieArticle
  imgSrc={BoxOfficeGrade6Img}
  title="마녀 배달부 키키"
  rate={3.8}
  subInfo="감독, 각본"
  tag={['가족', '애니메이션']}
/> */
}
