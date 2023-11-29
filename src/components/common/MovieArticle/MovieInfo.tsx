import styled from 'styled-components';
import castDetailLikeIc from '@assets/icon/watcha/watchaListStarIc.svg?react';
interface InMovieArticleProps {
  title: string;
  rate: number;
  keyword: string;
  icon?: boolean;
  subInfo?: string;
  titleLength?: number;
}

/** each movie info  */
export default function MovieInfo(props: InMovieArticleProps) {
  const { keyword, title, rate, subInfo, icon, titleLength } = props;

  return (
    <ArticleInfoBox>
      <ArticleTitle titleLength={titleLength}>{title}</ArticleTitle>
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

const ArticleTitle = styled.h3<{ titleLength?: number | undefined }>`
  width: ${({ titleLength }) => (titleLength !== undefined ? `${titleLength}rem` : 'auto')};
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2.3rem;

  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  font-style: ${({ theme, titleLength }) => (titleLength ? theme.fonts.subTitle2 : theme.fonts.subTitle5)};
`;

const ArticleRateText = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CastDetailLikeIcon = styled(castDetailLikeIc)`
  width: 1.4rem;
  height: 1.4rem;
`;
