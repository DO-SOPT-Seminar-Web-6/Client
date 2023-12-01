import styled from 'styled-components';
import thumnailMainsteelImg from '@assets/image/thumbnail/thumnailMainsteelImg.png';

export default function ThumbnailHeader() {
  return <Image src={thumnailMainsteelImg} alt="썸네일" />;
}

const Image = styled.img`
  position: relative;
`;
