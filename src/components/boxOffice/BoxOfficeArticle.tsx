import styled from "styled-components"
import BoxOfficeWrapper from "./BoxOfficeWrapper";
import boxOfficeGrade1Img from '../../assets/image/boxoffice/boxOfficeGrade1Img.png';
import boxOfficeGrade2Img from '../../assets/image/boxoffice/boxOfficeGrade2Img.png';
import boxOfficeGrade3Img from '../../assets/image/boxoffice/boxOfficeGrade3Img.png';
import boxOfficeGrade4Img from '../../assets/image/boxoffice/boxOfficeGrade4Img.png';
import boxOfficeGrade5Img from '../../assets/image/boxoffice/boxOfficeGrade5Img.png';
import boxOfficeGrade6Img from '../../assets/image/boxoffice/boxOfficeGrade6Img.png';

export default function BoxOfficeArticle() {

  return (
    <Article>
      <BoxOfficeWrapper
        WrapperNumber="1."
        imgSrc={boxOfficeGrade1Img}
        title="프레디의 피자 가게"
        rate={2.1}
      />
      <BoxOfficeWrapper
        WrapperNumber="2."
        imgSrc={boxOfficeGrade2Img}
        title="헝거게임: 노래하는 새와 뱀의 발라드"
        rate={3.4}
      />
      <BoxOfficeWrapper
        WrapperNumber="3."
        imgSrc={boxOfficeGrade3Img}
        title="더 마블스"
        rate={3.4}
      />
      <BoxOfficeWrapper
        WrapperNumber="4."
        imgSrc={boxOfficeGrade4Img}
        title="30일"
        rate={3.2}
      />
      <BoxOfficeWrapper
        WrapperNumber="5."
        imgSrc={boxOfficeGrade5Img}
        title="테일러 스위프트 더 에라스 투어"
        rate={4.8}
      />
      <BoxOfficeWrapper
        WrapperNumber="6."
        imgSrc={boxOfficeGrade6Img}
        title="소년들"
        rate={2.9}
      />
    </Article>
  );
}
const Article = styled.article`
  display: flex;
  gap:1rem;
  width: 123rem;
  height: 33rem;
`