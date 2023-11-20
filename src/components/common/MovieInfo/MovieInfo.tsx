import styled from 'styled-components';
import castDetailLikeIc from '@assets/icon/watcha/watchaListStarIc.svg';

interface InImageTypes {
  imgWidth?: number;
  imgHeight?: number;
}

interface InMovieInfoProps extends InImageTypes {
  imgSrc: string;
  title: string;
  rate: number;
  subInfo?: string;
  tag?: string[];
}

/** each movie info  */
export default function MovieInfo({
  imgSrc,
  title,
  rate,
  subInfo,
  tag,
  imgWidth = 23.6,
  imgHeight = 35.2,
}: InMovieInfoProps) {
  return (
    <article>
      <ArticleImage src={imgSrc} imgWidth={imgWidth} imgHeight={imgHeight} />
      <div>
        <h3>{title}</h3>
        <p>
          <span>평균</span>
          <img src={castDetailLikeIc} />
          <span>{rate}</span>
        </p>
        {subInfo && <p>{subInfo}</p>}
        {tag && tag.map((item, index) => <div key={`${item} - ${index}`}>{item}</div>)}
      </div>
    </article>
  );
}

const ArticleImage = styled.img<InImageTypes>`
  width: ${({ imgWidth }) => `${imgWidth}rem`};
  height: ${({ imgHeight }) => `${imgHeight}rem`};
  margin-bottom: 1rem;
`;
