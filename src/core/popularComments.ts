import ReviewProfile1Img from '@assets/image/review/reviewProfile1Img.png';
import ReviewProfile2Img from '@assets/image/review/reviewProfile2Img.png';

interface InPopularCommentTypes {
  imgSrc: string;
  name: string;
  comments: string;
  likes: string;
  numComments: number;
}

export const popularComments: InPopularCommentTypes[] = [
  {
    imgSrc: ReviewProfile1Img,
    name: '신상훈남',
    comments:
      '우리는 아득한 시간과 장소를 여행하며 탑을 쌓는다. 그곳엔 풍요와, 평화와, 아름다움이 가득하기를. 졸다가도 황홀스러운 꿈을 꾸게 될 영화. 우리는 다들 굶주릴 수밖에 없어. 그래서 날아올랐지. 더 높이 날기 위해. 계속해서 날개짓을 하기 위해. 새로 태어난 아니는 나는 법을 몰라.',
    likes: '000',
    numComments: 16,
  },
  {
    imgSrc: ReviewProfile2Img,
    name: 'Joopiter',
    comments:
      '빨리 제가 어떻게 살아야 할지 알려주세요. 감상후 사실, 아직도 어떻게 살아야할지는 잘 모르겠습니다. 다만 그대처럼 살아가고 싶다는 생각이 들었습니다.',
    likes: '1087',
    numComments: 19,
  },
];
