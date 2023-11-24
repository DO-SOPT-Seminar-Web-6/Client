import React from 'react'
import { MainContainer } from '@styles/Layout/MainContainer'
import styled from 'styled-components'
import PopularCommentHeader from './PopularCommentHeader'
import PopularCommentBottom from './PopularCommentBottom'
import { flexCenter } from '@styles/globalStyle'

interface InPopularCommentPropsTypes {
  imgSrc: string
  name: string
  comments: string
  likes: string
  numComments: number
}

/** Comment */
export default function PopularCommentDetails(props: InPopularCommentPropsTypes) {
  const { imgSrc, name, comments, likes, numComments } = props;

  return (
    <CommentBox>
      <PopularCommentHeader name={name} imgSrc={imgSrc}/>
      <PopularCommentText>{comments}</PopularCommentText>
      <PopularCommentBottom likes={likes} numComments={numComments}/>
    </CommentBox>
  )
}

const CommentBox = styled.section`
  &{MainContainer};
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 43rem;
`
const PopularCommentText = styled.p`
  display: flex;
  ${({ theme }) => theme.fonts.body2160};
  color: ${({ theme }) => theme.colors.grey600};
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
  padding: 2rem 0;
  height: 14.6rem;
`
