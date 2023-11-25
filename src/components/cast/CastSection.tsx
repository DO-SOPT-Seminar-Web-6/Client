import styled from 'styled-components';
import CastInfo from './CastInfo';

interface InCastSectionPropsTypes{
  imgSrc: string;
  name: string;
  role: string;
}

/** each movie info  */
export default function CastSection(props: InCastSectionPropsTypes) {
  const { imgSrc, name, role } = props;

  return (
    <CastContainer>
      <CastImage src={imgSrc}/>
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

const CastImage = styled.img`
  width: 5.7rem;
  height: 5.7rem;
`;

