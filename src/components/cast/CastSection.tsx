import styled from 'styled-components';
import CastInfo from './CastInfo';

interface InCastSectionPropsTypes {
  id: number;
  imageUrl: string;
  name: string;
  role: string;
  roleDetail: string;
}

/** each movie info  */
export default function CastSection(props: InCastSectionPropsTypes) {
  const { imageUrl, name, role, roleDetail } = props;

  return (
    <CastContainer>
      <CastImage src={imageUrl} />
      <CastInfo name={name} role={role} roleDetail={roleDetail} />
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
