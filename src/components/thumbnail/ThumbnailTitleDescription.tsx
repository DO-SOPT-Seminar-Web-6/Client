import styled from 'styled-components'

export default function ThumbnailTitleDescription() {
  return (
    <Description>
      <Info>君たちはどう生きるか</Info>
      <Info>2023·애니메이션/모험/판타지/드라마/가족·일본</Info>
      <Info>2시간 4분·전체</Info>
      <Text>예매 순위 7위(4.1%)·개봉 15일째·누적 관객 153.5만명</Text>
    </Description>
  )
}

const Description=styled.article`
  gap:1rem;
`
const Info=styled.p`
  margin-bottom:1rem;
  line-height: 2.1rem;
  ${({ theme }) => theme.fonts.body2};
`
const Text=styled.p`
  margin-top:1rem;
  line-height: 3.1rem;
  ${({ theme }) => theme.fonts.body2};
`
