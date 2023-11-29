import { flexCenter } from '@styles/globalStyle';
import styled from 'styled-components';
import { PopupExitIc } from '@assets/index';

interface InModalPropsTypes {
  open: boolean;
  close: () => void;
  comment: string;
  handleComment: (value: string) => void;
}

export default function MyPageModal(props: InModalPropsTypes) {
  const { open, close, comment, handleComment } = props;

  function handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    handleComment(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Modal>
      <ModalContainer>
        <ModalHeader>
          <Title>그대들은 어떻게 살 것인가</Title>
          <PopupExitIcon />
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
            value={comment}
            onChange={handleInputValue}
          />
          <SaveButton type="submit" onClick={close}>
            저장
          </SaveButton>
        </Form>
      </ModalContainer>
    </Modal>
  );
}

const Modal = styled.article`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(168, 168, 168, 0.348);
`;

const ModalContainer = styled.section`
  display: flex;
  position: absolute;
  top: calc(50vh - 300px);
  left: calc(50vw - 200px);
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
  &::placeholder {
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
