import styled from 'styled-components';
import CastDetailHayaoImg from '@assets/image/cast/castDetail/castDetailHayaoImg.png';
import { CastDetailLikeIc } from '@assets/index';
import { SectionContainer, flexCenter } from '@styles/globalStyle';

/** director page */
export default function Director() {
  return (
    <>
      <Container>
        <Image src={CastDetailHayaoImg} alt="figure_picture" width={84} height={84} />
        <div>
          <Title>미야자키 하야오</Title>
          <TitleText>감독, 저자, 작가,배우, 시리즈 구성</TitleText>
        </div>
        <div>
          <SubTitle>바이오그래피</SubTitle>
          <SubTitleDescription>
            <SubTitleDescriptionText>
              1941년 도쿄에서 출생. 애니메이션 영화감독. 가쿠슈인(學習院)대학을 졸업한 후 1963년 도에이동화(東映動畵: 현
              도에이 애니메이션) 입사. 그 후 몇몇 창작회사를 거쳐 1985년 지브리 스튜디오(Studio Ghibli) 설립에 참가.
              2013년 현재 지브리 스튜디오 소장. 감독한 작품에 극장용 장편 (ルパン三世 : カリオストロの城, 1979),
              &lt;바람 계곡의 나우시카&gt;(風の谷の ナウシカ, 1984), &lt;천공의 성 라퓨타&gt;(天空の城ラピュタ, 1986),
              &lt;이웃집 토토로&gt;(となりのトトロ, 1988), &lt;마녀 배달부 키키&gt;(魔女の宅急便, 1989), &lt;붉은
              돼지&gt;(紅の豚, 1992), &lt;원령공주&gt;(もののけ姬, 1997), &lt;센과 치히로의
              행방불명&gt;(千と千尋の神隱し,
            </SubTitleDescriptionText>
            <SubTitleDescriptionHideBox>&nbsp;</SubTitleDescriptionHideBox>
            <SubTitleDescriptionButton>더보기</SubTitleDescriptionButton>
          </SubTitleDescription>
          <SubTitleRef>도서정보 및 바이오그래피 제공 | 알라딘</SubTitleRef>
        </div>
        <LikeBox>
          <CastDetailLikeIc />
          <LikeText>좋아요 2,688명이 이 인물을 좋아합니다</LikeText>
        </LikeBox>
      </Container>
    </>
  );
}

const Container = styled(SectionContainer)`
  padding-top: 2.7rem;
  padding-bottom: 2.7rem;
`;

const Image = styled.img`
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.title1};

  margin-bottom: 0.2rem;
  color: ${({ theme }) => theme.colors.black};
`;

const TitleText = styled.p`
  ${({ theme }) => theme.fonts.subTitle5};

  margin-bottom: 2.4rem;
  height: 2.3rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.grey600};
`;

const SubTitle = styled.h1`
  ${({ theme }) => theme.fonts.title2};

  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.black};
`;

const SubTitleDescription = styled.div`
  ${({ theme }) => theme.fonts.subTitle160};

  position: relative;
  margin-bottom: 1rem;
  height: 7.8rem;
  overflow: hidden;
`;

const SubTitleDescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.grey600};
`;

const SubTitleDescriptionHideBox = styled.div`
  position: absolute;
  right: 4.4rem;
  bottom: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 10rem;
  width: 4.5rem;
  height: 2.6rem;

  /* stylelint-disable property-no-vendor-prefix */
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: left, right;
`;

const SubTitleDescriptionButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const SubTitleRef = styled.p`
  ${({ theme }) => theme.fonts.body2};

  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.grey500};
`;

const LikeBox = styled.div`
  ${flexCenter}

  gap: 0.4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  padding: 2.9rem;
`;

const LikeText = styled.span`
  ${({ theme }) => theme.fonts.subTitle5};

  color: ${({ theme }) => theme.colors.grey600};
`;
