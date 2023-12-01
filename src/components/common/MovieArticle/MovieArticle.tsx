import styled from 'styled-components';
import MovieTag from './MovieTag';
import MovieInfo from './MovieInfo';

interface InMovieArticleProps {
  imgSrc: string;
  title: string;
  rate: number;
  keyword?: string;
  subInfo?: string;
  titleLength?: number;
  tag?: string[];
  icon?: boolean;
  imgWidth?: number;
  imgHeight?: number;
}

/** each movie info
 * 사용법 :
 * <MovieArticle
 *  imgSrc={BoxOfficeGrade6Img}
 *  title="마녀 배달부 키키"
 *  rate={3.8}
 *  subInfo="감독, 각본"
 *  tag={['가족', '애니메이션']}
 * />
 */
export default function MovieArticle(props: InMovieArticleProps) {
  const {
    imgSrc,
    title,
    titleLength,
    rate,
    subInfo,
    tag,
    keyword = '평균',
    icon = true,
    imgWidth = 23.6,
    imgHeight = 35.2,
  } = props;
  return (
    <ArticleContainer>
      <ArticleImage src={imgSrc} $imgWidth={imgWidth} $imgHeight={imgHeight} />
      <MovieInfo title={title} titleLength={titleLength} rate={rate} subInfo={subInfo} keyword={keyword} icon={icon} />
      {tag && <MovieTag tag={tag} />}
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

interface InArticleImagePropsTypes {
  $imgWidth?: number;
  $imgHeight?: number;
}

const ArticleImage = styled.img<InArticleImagePropsTypes>`
  width: ${({ $imgWidth }) => `${$imgWidth}rem`};
  height: ${({ $imgHeight }) => `${$imgHeight}rem`};
`;
