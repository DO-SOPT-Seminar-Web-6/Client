import castDetailMovie1Img from '@assets/image/cast/castDetail/castDetailMovie1Img.png';
import castDetailMovie2Img from '@assets/image/cast/castDetail/castDetailMovie2Img.png';
import castDetailMovie3Img from '@assets/image/cast/castDetail/castDetailMovie3Img.png';
import castDetailMovie4Img from '@assets/image/cast/castDetail/castDetailMovie4Img.png';
import castDetailMovie5Img from '@assets/image/cast/castDetail/castDetailMovie5Img.png';
import castDetailMovie6Img from '@assets/image/cast/castDetail/castDetailMovie6Img.png';
import castDetailMovie7Img from '@assets/image/cast/castDetail/castDetailMovie7Img.png';
import castDetailMovie8Img from '@assets/image/cast/castDetail/castDetailMovie8Img.png';
import castDetailMovie11Img from '@assets/image/cast/castDetail/castDetailMovie11Img.png';

interface castDetailMoviesTypes {
  img: string;
  title: string;
  rate: number;
  subInfo: string;
}

export const castDetailMovies: castDetailMoviesTypes[] = [
  {
    img: castDetailMovie1Img,
    title: '그대들은 어떻게 살 것인가',
    rate: 3.4,
    subInfo: '감독, 각본',
  },
  {
    img: castDetailMovie2Img,
    title: '털벌레 보로',
    rate: 3.4,
    subInfo: '감독',
  },
  {
    img: castDetailMovie3Img,
    title: '바람이 분다',
    rate: 3.1,
    subInfo: '감독, 각본',
  },
  {
    img: castDetailMovie4Img,
    title: '빵반죽과 계란 공주',
    rate: 3.5,
    subInfo: '감독',
  },
  {
    img: castDetailMovie5Img,
    title: '벼랑 위의 포뇨',
    rate: 3.7,
    subInfo: '감독, 각본, 원작',
  },
  {
    img: castDetailMovie6Img,
    title: '물거미 끙끙',
    rate: 3.4,
    subInfo: '감독',
  },
  {
    img: castDetailMovie7Img,
    title: '별을 샀던 날',
    rate: 4.0,
    subInfo: '감독',
  },
  {
    img: castDetailMovie8Img,
    title: '하울의 움직이는 성',
    rate: 4.2,
    subInfo: '감독',
  },
  {
    img: castDetailMovie11Img,
    title: '코쿠리코 언덕에서',
    rate: 4.2,
    subInfo: '감독',
  },
];
