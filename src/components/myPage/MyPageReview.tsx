import React from 'react'
import styled from 'styled-components'
import MovieTag from '@components/common/MovieArticle/MovieTag'
import { flexCenter } from '@styles/globalStyle'
import {BannerProfileIc} from '@assets/index'

export default function MyPageReview() {
  return (
    <MyPageReviewBox>
      <MyCommentBox>
        <h2>내가 쓴 코멘트</h2>
        <MyComment>
          <BannerProfileIc width="5.8rem" height="5.8rem"/>
          <Text>심오합니다 깊고 좋았어요...</Text>
        </MyComment>
      </MyCommentBox>
      <TagBox>
        <h2>선호하는 태그</h2>
        <MovieTag tag={['스튜디오 지브리','소셜 원작']} />
      </TagBox>
    </MyPageReviewBox>
  )
}

const MyPageReviewBox = styled.div` 
  padding: 0 0;
`
const TagBox = styled.article`
  gap:1.2rem;
  padding: 4rem 0;
  &>h2{
    ${({ theme }) => theme.fonts.body5};
    line-height: 1.8rem;
    margin-bottom:1.2rem;
    color: ${({ theme }) => theme.colors.grey600};
  }
`
const MyCommentBox = styled.section`
  gap:1.2rem;
  padding: 4rem 0 0;
  &>h2{
    ${({ theme }) => theme.fonts.body5};
    line-height: 1.8rem;
    margin-bottom:1.2rem;
    color: ${({ theme }) => theme.colors.grey600};
  }
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
  line-height: 2rem;
  width: 9.3rem;
  height: 4rem;
`