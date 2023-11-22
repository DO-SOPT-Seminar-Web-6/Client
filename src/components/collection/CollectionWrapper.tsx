import styled from 'styled-components';
import CollectionText from './CollectionText';

interface InCollectionTypes {
  imgWidth?: number;
  imgHeight?: number;
}

interface InCollectionPropsTypes extends InCollectionTypes {
  imgSrc: string;
  title: string;
  likes: number;
}

/** each collection info  */
export default function CollectionWrapper({
  imgSrc,
  title,
  likes,
  imgWidth = 19.8,
  imgHeight = 29.6,
}: InCollectionPropsTypes) {
  
  return (
    <CollectionContainer>
      <CollectionImage src={imgSrc} imgWidth={imgWidth} imgHeight={imgHeight} />
      <CollectionText title={title} likes={likes}/>
    </CollectionContainer>
  );
}

const CollectionContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

const CollectionImage = styled.img<InCollectionTypes>`
  width: ${({ imgWidth }) => `${imgWidth}rem`};
  height: ${({ imgHeight }) => `${imgHeight}rem`};
`;


