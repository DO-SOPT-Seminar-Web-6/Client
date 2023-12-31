import styled from 'styled-components';
import MovieArticle from '@components/common/MovieArticle/MovieArticle';
import { useNavigate } from 'react-router-dom';
import { collectionImages } from '@core/collectionImages';

export default function CollectionArticle() {
  const imgSize: number[] = [19.8, 29.6];
  const keyword: string = '좋아요';
  const icon: boolean = false;
  const navigate = useNavigate();

  function handleMoveToAnimation() {
    navigate('/animation');
  }
  return (
    <Article onClick={handleMoveToAnimation}>
      {collectionImages &&
        collectionImages.map((image) => {
          const { imgSrc, title, likes } = image;
          return (
            <MovieArticle
              key={`${title}-${likes}`}
              imgSrc={imgSrc}
              imgHeight={imgSize[1]}
              imgWidth={imgSize[0]}
              title={title}
              rate={likes}
              keyword={keyword}
              icon={icon}
            />
          );
        })}
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  gap: 1.2rem;
  cursor: pointer;
  width: 123rem;
  height: 33rem;
`;
