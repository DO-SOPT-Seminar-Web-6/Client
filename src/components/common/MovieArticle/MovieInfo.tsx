import styled from 'styled-components';
import castDetailLikeIc from '@assets/icon/watcha/watchaListStarIc.svg?react';
interface InMovieArticleProps {
  title: string;
  rate: number;
  keyword: string;
  icon? : boolean;
  subInfo?: string;
}

/** each movie info  */
export default function MovieInfo({ keyword, title, rate, subInfo, icon }: InMovieArticleProps) {
  return (
    <ArticleInfoBox>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleRateText>
        <span>{keyword}</span>
        {icon && <CastDetailLikeIcon />}
        <span>{rate}</span>
      </ArticleRateText>
      {subInfo && <p>{subInfo}</p>}
    </ArticleInfoBox>
  );
}

const ArticleInfoBox = styled.div`
  ${({ theme }) => theme.fonts.body3};

  line-height: 2rem;
  color: ${({ theme }) => theme.colors.grey600};
`;

const ArticleTitle = styled.h3`
  ${({ theme }) => theme.fonts.subTitle5};

  line-height: 2.3rem;
  color: ${({ theme }) => theme.colors.black};
`;

const ArticleRateText = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CastDetailLikeIcon = styled(castDetailLikeIc)`
  width: 1.4rem;
  height: 1.4rem;
`