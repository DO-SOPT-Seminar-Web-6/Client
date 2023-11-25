import React from 'react'
import styled from 'styled-components'
import PopularCommentDetails from './PopularCommentDetails'
import { popularComments } from '@core/popularComments'

export default function MyPagePopularComment() {

  return (
    <PopularCommentSection>
      <h2>인기 코멘트</h2>
      <PopularCommentBox>
        {popularComments && popularComments.map((data)=> {
          const {imgSrc, name, comments,likes, numComments} =data;
          return(
            <PopularCommentDetails 
            imgSrc={imgSrc}
            name={name}
            comments={comments}
            likes={likes}
            numComments={numComments}/>
          )
        })}
      </PopularCommentBox> 
    </PopularCommentSection>
  )
}

const PopularCommentSection = styled.section`
  display:flex;
  flex-direction:column;
  gap: 1.2rem;
  padding: 3rem 0;
  height: 28.1rem;
  &>h2{
    ${({ theme }) => theme.fonts.body5};
    margin-bottom:1.2rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.colors.grey600};
  }
`
const PopularCommentBox= styled.section`
  display:flex;
  gap: 2rem; 
`