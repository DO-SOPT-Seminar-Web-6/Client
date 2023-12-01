import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import { useState } from 'react';
import {
  BodyPopupArchiveHoverIc,
  BodyPopupDoNotHoverIc,
  BodyPopupDoNotActiveIc,
  BodyPopupEventHoverIc,
} from '@assets/index';
import { MyPageIcon } from '@styles/common/commonIcon';

export default function MyPageToggle() {
  const [isInterested, setIsInterested] = useState(false);

  function handleIsInterested() {
    setIsInterested((click) => !click);
  }
  
  return (
    <ToggleWrapper>
      <ToggleBox onClick={handleIsInterested}>
        {!isInterested && <BodyPopupDoNotHoverIcon />}
        {isInterested && <BodyPopupDoNotActiveIcon />}
        <ToggleTitle isInterested={isInterested}>관심없어요</ToggleTitle>
      </ToggleBox>
      <ToggleBox>
        <BodyPopupArchiveHoverIcon />
        <ToggleTitle isInterested={isInterested}>컬렉션에 추가</ToggleTitle>
      </ToggleBox>
      <ToggleBox>
        <BodyPopupEventHoverIcon />
        <ToggleTitle isInterested={isInterested}>본 날짜 추가</ToggleTitle>
      </ToggleBox>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  ${flexCenter}
  position: absolute;
  top: 10rem;
  right: 0rem;
  flex-direction: column;
  gap: 1rem;
  margin-top: -1.5rem;
  border-radius: 7px;
  box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  width: 17.6rem;
  height: 12.4rem;
`;

const ToggleBox = styled.button`
  display: flex;
  gap: 1rem;
  width: 14.8rem;
  height: 2.8rem;
`;

interface InToggleTitlePropsTypes {
  isInterested: boolean;
}

const ToggleTitle = styled.h2<InToggleTitlePropsTypes>`
  ${({ theme }) => theme.fonts.body4};
  color: ${({ theme, isInterested }) => (isInterested ? theme.colors.mainPink : theme.colors.black)};
`;

const BodyPopupArchiveHoverIcon = styled(BodyPopupArchiveHoverIc)`
  ${MyPageIcon}
`;
const BodyPopupDoNotHoverIcon = styled(BodyPopupDoNotHoverIc)`
  ${MyPageIcon}
`;
const BodyPopupDoNotActiveIcon = styled(BodyPopupDoNotActiveIc)`
  ${MyPageIcon}
`;
const BodyPopupEventHoverIcon = styled(BodyPopupEventHoverIc)`
  ${MyPageIcon}
`;
