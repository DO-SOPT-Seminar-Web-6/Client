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
      <ArticleInfoBox>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleRate>
          <span>평균</span>
          <img src={castDetailLikeIc} />
          <span>{rate}</span>
        </ArticleRate>
        {subInfo && <p>{subInfo}</p>}
      </ArticleInfoBox>
      <ul>{/* {tag && tag.map((item, index) => <li key={`${item} - ${index}`}>{item}</li>)} */}</ul>
    </article>
  );
}

const ArticleImage = styled.img<InImageTypes>`
  width: ${({ imgWidth }) => `${imgWidth}rem`};
  height: ${({ imgHeight }) => `${imgHeight}rem`};
  margin-bottom: 0.7rem;
`;

const ArticleInfoBox = styled.div`
  ${({ theme }) => theme.fonts.body3};

  color: ${({ theme }) => theme.colors.grey600};
  line-height: 2rem;
`;

const ArticleTitle = styled.h3`
  ${({ theme }) => theme.fonts.subTitle5};

  color: ${({ theme }) => theme.colors.black};
  line-height: 2.3rem;
`;

const ArticleRate = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
