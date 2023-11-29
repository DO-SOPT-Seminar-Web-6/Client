import styled from 'styled-components';
import CastDetailHayaoImg from '@assets/image/cast/castDetail/castDetailHayaoImg.png';
import { SectionContainer } from '@styles/globalStyle';
import DirectorLike from '@components/director/directorDetail/DirectorLike';
import DirectorInfo from '@components/director/directorDetail/DirectorInfo';
import FilmoContainer from '@components/director/directorFilmo/FilmoContainer';

/** director page */
export default function Director() {
  return (
    <>
      <FigureContainer>
        <Image src={CastDetailHayaoImg} alt="figure_picture" width={84} height={84} />
        <div>
          <Title>미야자키 하야오</Title>
          <TitleText>감독, 저자, 작가,배우, 시리즈 구성</TitleText>
        </div>
        <DirectorInfo />
        <DirectorLike />
      </FigureContainer>
      <FilmoContainerBox>
        <FilmoSection>
          <FilmoSectionTitle>영화</FilmoSectionTitle>
          <FilmoContainer title="감독" />
        </FilmoSection>
        <FilmoTable>123</FilmoTable>
      </FilmoContainerBox>
    </>
  );
}

const FigureContainer = styled(SectionContainer)`
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

const FilmoContainerBox = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: flex-start;
  margin-bottom: 6rem;
  padding: 0 6rem;
  width: 100%;
`;

const FilmoSection = styled.section`
  width: 99.2rem;
`;

const FilmoSectionTitle = styled.h3`
  ${({ theme }) => theme.fonts.title2};

  margin-bottom: 1.6rem;
`;

const FilmoTable = styled.aside`
  ${({ theme }) => theme.fonts.body2};

  padding: 2rem 0;
  width: 23.6rem;
  height: 19.6rem;
`;
