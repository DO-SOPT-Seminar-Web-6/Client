import boxOfficeGrade1Img from '@assets/image/boxoffice/boxOfficeGrade1Img.png';
import boxOfficeGrade2Img from '@assets/image/boxoffice/boxOfficeGrade2Img.png';
import boxOfficeGrade3Img from '@assets/image/boxoffice/boxOfficeGrade3Img.png';
import boxOfficeGrade4Img from '@assets/image/boxoffice/boxOfficeGrade4Img.png';
import boxOfficeGrade5Img from '@assets/image/boxoffice/boxOfficeGrade5Img.png';
import boxOfficeGrade6Img from '@assets/image/boxoffice/boxOfficeGrade6Img.png';

interface InBoxOfficeMoviesTypes{
  wrapperNumber : string;
  imgSrc: string;
  title : string;
  rate : number;
}

export const boxOfficeMovies: InBoxOfficeMoviesTypes[] = [
  {
    wrapperNumber: '1.',
    imgSrc: boxOfficeGrade1Img,
    title: '프레디의 피자 가게',
    rate: 2.1,
  },
  {
    wrapperNumber: '2.',
    imgSrc: boxOfficeGrade2Img,
    title: '헝거게임: 노래하는 새와 뱀의 발라드',
    rate: 3.4,
  },
  {
    wrapperNumber: '3.',
    imgSrc: boxOfficeGrade3Img,
    title: '더 마블스',
    rate: 3.4,
  },
  {
    wrapperNumber: '4.',
    imgSrc: boxOfficeGrade4Img,
    title: '30일',
    rate: 3.2,
  },
  {
    wrapperNumber: '5.',
    imgSrc: boxOfficeGrade5Img,
    title: '테일러 스위프트 더 에라스 투어',
    rate: 4.8,
  },
  {
    wrapperNumber: '6.',
    imgSrc: boxOfficeGrade6Img,
    title: '소년들',
    rate: 2.9,
  },
];