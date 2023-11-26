import styled from 'styled-components'
import {BodyPlusNormalIc} from '@assets/index';
import {BodyMenuHoverIc, BodyMenuNormalIc } from '@assets/index';
import {BodyPencilHoverIc, BodyPencilNormalIc } from '@assets/index';
import { flexCenter } from '@styles/globalStyle';
import { useState } from 'react';
import { SetTitle } from '@styles/common/myPage/SetTitle';
import { ButtonBox } from '@styles/Layout/MyPage/SetButtonBox';

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
    <Container>
      <ButtonBox>
        <BodyPlusNormalIc/>
        <SetTitle>보고싶어요</SetTitle>
      </ButtonBox>
      <ButtonBox onClick={handleComment}>
        {isComment && (
          <BodyPencilHoverIc/>
        )}
        {!isComment &&(
          <BodyPencilNormalIc/>
        )}
        <SetTitle>코멘트</SetTitle>
      </ButtonBox>
      <ButtonBox onClick={handleSeeMore}>
        {isSeeMore && (
          <BodyMenuHoverIc/>
        )}
        {!isSeeMore &&(
          <BodyMenuNormalIc/>
        )}
        <SetTitle>더보기</SetTitle>
      </ButtonBox>
    </Container>
  )
}

const Container = styled.section`
  ${flexCenter};
`
