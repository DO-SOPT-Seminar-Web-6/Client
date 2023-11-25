import styled from 'styled-components';
import ThumbnailHeader from './ThumbnailHeader';
import ThumbnailTitle from './ThumbnailTitle';

export default function Thumbnail() {
  return (
    <Wrapper>
      <ThumbnailHeader/>
      <ThumbnailTitle/>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  position: relative;
`;