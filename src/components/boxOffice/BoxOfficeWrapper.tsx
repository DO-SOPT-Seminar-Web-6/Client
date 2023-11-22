import styled from 'styled-components';
import BoxOfficeWrapperDescription from './BoxOfficeWrapperDescription';

interface InBoxOfficePropsTypes {
  WrapperNumber : string;
  imgSrc: string;
  title: string;
  rate: number;
  imgWidth: number;
  imgHeight: number;
}

/** each BoxOffice info  */
export default function BoxOfficeWrapper({
  WrapperNumber,
  imgSrc,
  title,
  rate,
  imgWidth = 15,
  imgHeight = 21.6,
}: InBoxOfficePropsTypes) {

  return (
    <WrapperContents>
      <Grade>{WrapperNumber}</Grade>
      <BoxOfficeWrapperDescription imgSrc={imgSrc} title={title} rate={rate} imgWidth={imgWidth} imgHeight={imgHeight}/>
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
`
