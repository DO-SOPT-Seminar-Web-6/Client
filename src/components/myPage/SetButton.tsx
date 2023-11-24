import styled from 'styled-components'
import {BodyPlusNormalIc} from '@assets/index';
import {BodyMenuHoverIc, BodyMenuNormalIc } from '@assets/index';
import {BodyPencilHoverIc, BodyPencilNormalIc } from '@assets/index';
import { MyPageButtonContainer } from '@styles/Layout/MyPageButtonContainer';
import { flexCenter } from '@styles/globalStyle';
import { useState } from 'react';
export default function SetButton() {
  const [isComment, setIsComment] = useState(false);

  function handleComment() {
    setIsComment((prev) => !prev);
  }

  const [isSeeMore, setIsSeeMore] = useState(false);

  function handleSeeMore(){
    setIsSeeMore((see) => !see);
  }

  return (
    <ButtonContainer>
      <PlusButton>
        <BodyPlusNormalIc/>
        <h2>보고싶어요</h2>
      </PlusButton>
      <CommentButton onClick={handleComment}>
        {isComment && (
          <BodyPencilHoverIc/>
        )}
        {!isComment &&(
          <BodyPencilNormalIc/>
        )}
        <h2>코멘트</h2>
      </CommentButton>
      <SeeMoreButton onClick={handleSeeMore}>
        {isSeeMore && (
          <BodyMenuHoverIc/>
        )}
        {!isSeeMore &&(
          <BodyMenuNormalIc/>
        )}
        <h2>더보기</h2>
      </SeeMoreButton>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  ${flexCenter};
  flex-direction:row:
  gap:2.8rem;  
`
const PlusButton=styled(MyPageButtonContainer)`
  ${flexCenter}; 
  flex-direction: column;
  &>h2{
    line-height:1.7rem;
    ${({ theme }) => theme.fonts.body5};
  }
`
const CommentButton = styled(MyPageButtonContainer)`
  ${flexCenter}; 
  flex-direction: column;
  &>h2{
    line-height:1.7rem;
    ${({ theme }) => theme.fonts.body5};
  }
`
const SeeMoreButton = styled(MyPageButtonContainer)`
  ${flexCenter}; 
  flex-direction: column;
  &>h2{
    line-height:1.7rem;
    ${({ theme }) => theme.fonts.body5};
  }
`