import styled from 'styled-components';
import CastInfo from './CastInfo';

interface InCastSectionPropsTypes{
  imgSrc: string;
  name: string;
  role: string;
  imgHeight: number;
  imgWidth: number;
}

/** each movie info  */
export default function CastSection({
  imgSrc,
  name,
  role,
  imgWidth= 5.7,
  imgHeight= 5.7,
}: InCastSectionPropsTypes) {
  return (
    <CastContainer>
      <CastImage src={imgSrc} imgWidth={imgWidth} imgHeight={imgHeight} />
      <CastInfo name={name} role={role}/>
    </CastContainer>
  );
}

const CastContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1.1rem;
  width: 29.7rem;
  height: 6.6rem;
`;

const CastImage = styled.img<InCastSectionPropsTypes>`
  width: ${({ imgWidth }) => `${imgWidth}rem`};
  height: ${({ imgHeight }) => `${imgHeight}rem`};
`;

