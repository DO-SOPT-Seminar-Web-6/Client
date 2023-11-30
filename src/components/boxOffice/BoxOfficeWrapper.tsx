import styled from 'styled-components';
import BoxOfficeWrapperDescription from './BoxOfficeWrapperDescription';
interface InBoxOfficeMoviesProps {
  wrapperNumber: string;
  imgSrc: string;
  title: string;
  rate: number;
  imgWidth?: number;
  imgHeight?: number;
}

/** each BoxOffice info  */
export default function BoxOfficeWrapper({
  wrapperNumber,
  imgSrc,
  title,
  rate,
  imgWidth = 15,
  imgHeight = 21.6,
}: InBoxOfficeMoviesProps): JSX.Element {
  return (
    <WrapperContents>
      <Grade>{wrapperNumber}</Grade>
      <BoxOfficeWrapperDescription
        imgSrc={imgSrc}
        title={title}
        rate={rate}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
      />
    </WrapperContents>
  );
}

const WrapperContents = styled.article`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  width: 19.8rem;
  height: 29.3rem;
`;

const Grade = styled.span`
  ${({ theme }) => theme.fonts.title1};
`;
