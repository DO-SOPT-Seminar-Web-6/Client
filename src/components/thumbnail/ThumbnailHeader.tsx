import thumnailMainsteelImg from '@assets/image/thumbnail/thumnailMainsteelImg.png';
import styled from 'styled-components';
export default function ThumbnailHeader() {
  return <Image src={thumnailMainsteelImg} alt="썸네일" />;
}

const Image = styled.img`
  position:relative;
`