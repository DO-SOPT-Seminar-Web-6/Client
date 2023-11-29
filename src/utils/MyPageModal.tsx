import { flexCenter } from '@styles/globalStyle';
import React from 'react';
import styled from 'styled-components';
import { PopupExitIc } from '@assets/index';

interface InModalPropsTypes {
  open: boolean;
  close:(v:boolean)=>void;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
}

export default function MyPageModal(props: InModalPropsTypes) {
  const {open, close, comment, setComment} = props;

  function handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value);
  };
  function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
  }
  
  return (
    <ModalContainer style={{display:open?"flex":"none"}}>
      <ModalHeader>
        <Title>그대들은 어떻게 살 것인가</Title>
        <PopupExitIcon/> 
      </ModalHeader>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text"
          placeholder= "이 작품에 대한 생각을 자유롭게 표현해주세요."
          value={comment}
          onChange={handleInputValue}
        />
        <SaveButton type="submit" onClick={close}>저장</SaveButton>
      </Form>
    </ModalContainer>
  );
}

const ModalContainer = styled.section`
  display: flex;
  position: absolute;
  right: 30rem;
  bottom: 0;
  flex-direction: column;
  border-radius: 1.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.4rem 2.4rem;
  width: 51.9rem;
  height: 50rem;
`;

const ModalHeader = styled.section`
  display: flex;
  gap: 24rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.subTitle2};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PopupExitIcon = styled(PopupExitIc)`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
`;

const Input = styled.input`
  ${({ theme }) => theme.fonts.title3};
  transform: translateY(-40%);
  height: 36rem;
  color: ${({ theme }) => theme.colors.black};
  &::placeholder{
    color: ${({ theme }) => theme.colors.grey500};
  }
`;

const SaveButton = styled.button`
  ${flexCenter}
  background-color: ${({ theme }) => theme.colors.mainPink};
  ${({ theme }) => theme.fonts.subTitle4};
  width: 10.7rem;
  height: 3.8rem;
`;
