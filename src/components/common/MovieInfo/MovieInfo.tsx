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
    <ArticleContainer>
      <ArticleImage src={imgSrc} imgWidth={imgWidth} imgHeight={imgHeight} />
      <ArticleInfoBox>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleRateText>
          <span>평균</span>
          <img src={castDetailLikeIc} />
          <span>{rate}</span>
        </ArticleRateText>
        {subInfo && <p>{subInfo}</p>}
      </ArticleInfoBox>
      <ArticleTagList>
        {tag && tag.map((item, index) => <ArticleTagListItem key={`${item} - ${index}`}>{item}</ArticleTagListItem>)}
      </ArticleTagList>
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

const ArticleRateText = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ArticleTagList = styled.ul`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: flex-start;
`;

const ArticleTagListItem = styled.li`
  ${({ theme }) => theme.fonts.body5};

  height: 2.5rem;
  padding: 0.4rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 22px;
  color: ${({ theme }) => theme.colors.grey600};
`;
