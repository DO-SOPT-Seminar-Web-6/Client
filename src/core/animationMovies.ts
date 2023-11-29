import collectDetailPoster1Img from '@assets/image/collection/collectDetail/collectDetailPoster1Img.png';
import collectDetailPoster2Img from '@assets/image/collection/collectDetail/collectDetailPoster2Img.png';
import collectDetailPoster3Img from '@assets/image/collection/collectDetail/collectDetailPoster3Img.png';
import collectDetailPoster4Img from '@assets/image/collection/collectDetail/collectDetailPoster4Img.png';
import collectDetailPoster5Img from '@assets/image/collection/collectDetail/collectDetailPoster5Img.png';
import collectDetailPoster6Img from '@assets/image/collection/collectDetail/collectDetailPoster6Img.png';
import collectDetailPoster7Img from '@assets/image/collection/collectDetail/collectDetailPoster7Img.png';
import collectDetailPoster8Img from '@assets/image/collection/collectDetail/collectDetailPoster8Img.png';

interface InAnimationMoviesTypes {
  img: string;
  title: string;
  rate: number;
  subInfo: string;
}

export const animationMovies: InAnimationMoviesTypes[] = [
  {
    img: collectDetailPoster1Img,
    title: '그대들은 어떻게 살 것인가',
    rate: 3.4,
    subInfo: '영화',
  },
  {
    img: collectDetailPoster2Img,
    title: '스파이더맨: 어크로스 유니버스',
    rate: 4.2,
    subInfo: '영화',
  },
  {
    img: collectDetailPoster3Img,
    title: '스파이더맨: 뉴 유니버스',
    rate: 4.2,
    subInfo: '영화',
  },
  {
    img: collectDetailPoster4Img,
    title: '거울 속 새로운 세계',
    rate: 3.4,
    subInfo: '영화',
  },
  {
    img: collectDetailPoster5Img,
    title: '오스왈드 더 럭키 래빗',
    rate: 2.9,
    subInfo: '영화',
  },
  {
    img: collectDetailPoster6Img,
    title: '엘리멘탈',
    rate: 3.8,
    subInfo: '영화',
  },
  {
    img: collectDetailPoster7Img,
    title: '칼의 데이트',
    rate: 2.7,
    subInfo: '영화',
  },
  {
    img: collectDetailPoster8Img,
    title: '혹시 내게 무슨 일이 일어났다면',
    rate: 3.4,
    subInfo: '영화',
  },
];
