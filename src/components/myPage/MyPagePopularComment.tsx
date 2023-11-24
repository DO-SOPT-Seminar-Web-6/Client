import React from 'react'
import Comment from '@components/common/Comment/Comment'
import styled from 'styled-components'

export default function MyPagePopularComment() {

  return (
    <PopularCommentBox>
      <h2>인기 코멘트</h2>
      <PopularCommentDetails>
        <Comment
          userName="신상훈남" 
          content="설명" 
          isThumbnail={true}
        />
        <Comment
          userName="신상훈남" 
          content="설명" 
          isThumbnail={true}
        />
      </PopularCommentDetails> 
    </PopularCommentBox>
  )
}

const PopularCommentBox = styled.section`
  display:flex;
  flex-direction:column;
  gap: 1.2rem;
  padding: 3rem 0 0;
  height: 28.1rem;
  &>h2{
    ${({ theme }) => theme.fonts.body5};
    margin-bottom:1.2rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.colors.grey600};
  }
`
const PopularCommentDetails= styled.section`
  display:flex;
  flex-direction:row;
`