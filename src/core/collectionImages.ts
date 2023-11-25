import CollectionNum1Img from '@assets/image/collection/collectionNum1Img.png'; 
import CollectionNum2Img from '@assets/image/collection/collectionNum2Img.png'; 
import CollectionNum3Img from '@assets/image/collection/collectionNum3Img.png'; 
import CollectionNum4Img from '@assets/image/collection/collectionNum4Img.png'; 
import CollectionNum5Img from '@assets/image/collection/collectionNum5Img.png'; 
import CollectionNum6Img from '@assets/image/collection/collectionNum6Img.png'; 

interface InCollectionImagesTypes {
  imgSrc: string;
  title: string;
  likes: number;
}

export const collectionImages : InCollectionImagesTypes[] = [
  {
    imgSrc: CollectionNum1Img, 
    title: "한번쯤은 꼭 봤으면 하는 영화",
    likes: 11502,
  },
  {
    imgSrc: CollectionNum2Img, 
    title: "너무 사랑하는 일본의 영화",
    likes: 1869,
  },
  {
    imgSrc: CollectionNum3Img,
    title: "애니메이션",
    likes: 1324,
  },
  {
    imgSrc: CollectionNum4Img, 
    title: "이상한 꿈 같은 영화",
    likes: 262,
  },
  {
    imgSrc: CollectionNum5Img, 
    title: "일본교복이 나오는 영화",
    likes: 254,
  },
  {
    imgSrc: CollectionNum6Img, 
    title: "괴작 혹은 띵작",
    likes: 180,
  },
];