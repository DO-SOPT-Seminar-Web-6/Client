import React from 'react'
import styled from 'styled-components'
import MovieTag from '@components/common/MovieArticle/MovieTag'
import {BannerProfileIc} from '@assets/index'
import { BoxHeader } from '@styles/common/myPage/ReviewBoxHeader'

export default function MyPageReview() {
  return (
    <MyPageReviewBox>
      <MyCommentBox>
        <BoxHeader>내가 쓴 코멘트</BoxHeader>
        <MyComment>
          <BannerProfileIcon/>
          <Text>심오합니다 깊고 좋았어요...</Text>
        </MyComment>
      </MyCommentBox>
      <TagBox>
        <BoxHeader>선호하는 태그</BoxHeader>
        <MovieTag tag={['스튜디오 지브리','소셜 원작']} />
      </TagBox>
    </MyPageReviewBox>
  )
}

const MyPageReviewBox = styled.div` 
  padding: 0 0;
`

const MyCommentBox = styled.section`
  gap:1.2rem;
  padding: 4rem 0 0;
`

const TagBox = styled.article`
  gap:1.2rem;
  padding: 4rem 0;
`

const MyComment = styled.article`
  display:flex;
  flex-direction: row;
  gap: 1.7rem;
  align-items:center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  width: 100%;
  height: 10rem;
`
const Text = styled.p`
  ${({ theme }) => theme.fonts.body2};
  width: 9.3rem;
  height: 4rem;
  line-height: 2rem;
`
const BannerProfileIcon = styled(BannerProfileIc)`
width: 5.8rem;
height: 5.8rem;
`