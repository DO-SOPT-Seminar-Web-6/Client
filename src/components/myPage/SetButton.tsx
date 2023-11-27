import styled from 'styled-components';
import { BodyPlusNormalIc, BodyPencilHoverIc, BodyPencilNormalIc, BodyMenuHoverIc, BodyMenuNormalIc } from '@assets/index';
import { flexCenter } from '@styles/globalStyle';
import { useState } from 'react';
import { SetTitle } from '@styles/common/myPage/SetTitle';
import { ButtonBox } from '@styles/Layout/MyPage/SetButtonBox';
import MyPageModal from '@utils/Modal';

interface InSetButtonPropsTypes{
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  isExistComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SetButton(props:InSetButtonPropsTypes) {
  const {comment, setComment, isExistComment} = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSeeMore, setIsSeeMore] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal(){
    setIsModalOpen(false); 
    isExistComment(true);
  }
  function handleSeeMore() {
    setIsSeeMore((see) => !see);
  }

  return (
    <Container>
      <ButtonBox>
        <BodyPlusNormalIc />
        <SetTitle>보고싶어요</SetTitle>
      </ButtonBox>
      <ButtonBox onClick={handleOpenModal}>
        {isModalOpen && <BodyPencilHoverIc />} 
        {!isModalOpen && <BodyPencilNormalIc />}
        <SetTitle>코멘트</SetTitle>
      </ButtonBox>
      <ButtonBox onClick={handleSeeMore}> 
        {isSeeMore && <BodyMenuHoverIc />}
        {!isSeeMore && <BodyMenuNormalIc />}
        <SetTitle>더보기</SetTitle>
      </ButtonBox>
      {isModalOpen && <MyPageModal open={isModalOpen} close={handleCloseModal} comment={comment} setComment={setComment}/>}
    </Container>
  );
}

const Container = styled.section`
  ${flexCenter};
  position: relative;
`;
