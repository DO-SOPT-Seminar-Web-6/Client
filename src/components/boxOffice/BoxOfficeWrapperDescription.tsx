import styled from 'styled-components';
import { BoxOfficeStarIc } from '@assets/index';

interface InBoxOfficePropsTypes {
  imgSrc: string;
  title: string;
  rate: number;
  imgWidth: number;
  imgHeight: number;
}

export default function BoxOfficeWrapperDescriptions(props: InBoxOfficePropsTypes) {
  const { title, rate, imgSrc, imgWidth, imgHeight } = props;

  return (
    <DescriptionBox>
      <DescriptionImage src={imgSrc} $imgWidth={imgWidth} $imgHeight={imgHeight} />
      <DescriptionTitle>{title}</DescriptionTitle>
      <DescriptionStar>
        <BoxOfficeStarIcon />
        <StarRate>{rate}</StarRate>
      </DescriptionStar>
    </DescriptionBox>
  );
}
const DescriptionBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 16.7rem;
  height: 29.3rem;
`;

interface InDescriptionImagePropsTypes {
  $imgWidth: number;
  $imgHeight: number;
}

const DescriptionImage = styled.img<InDescriptionImagePropsTypes>`
  width: ${({ $imgWidth }) => `${$imgWidth}rem`};
  height: ${({ $imgHeight }) => `${$imgHeight}rem`};
`;

const DescriptionTitle = styled.h2`
  ${({ theme }) => theme.fonts.subTitle1};
  padding: 1.6rem 0 0 0;
  line-height: 2.9rem;
`;

const DescriptionStar = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  width: 6.5rem;
  height: 3.5rem;
`;

const BoxOfficeStarIcon = styled(BoxOfficeStarIc)`
  width: 3.5rem;
  height: 3.5rem;
`;

const StarRate = styled.p`
  ${({ theme }) => theme.fonts.title2};
  line-height: 3.5rem;
  color: ${({ theme }) => theme.colors.mainPink};
`;
