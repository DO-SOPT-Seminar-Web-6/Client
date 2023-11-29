import { RateContents } from '@styles/common/myPage/SetRateContents';
import { SetTitle } from '@styles/common/myPage/SetTitle';
import { flexCenter } from '@styles/globalStyle';
import styled from 'styled-components';

export default function SetRates() {
  return (
    <Rate>
      <MyRate>
        <RateContents>3.9</RateContents>
        <SetTitle>내 별점</SetTitle>
      </MyRate>
      <AverageRate>
        <RateContents>3.4</RateContents>
        <SetTitle>평균 별점(3.2만명)</SetTitle>
      </AverageRate>
    </Rate>
  );
}
const Rate = styled.span`
  ${flexCenter};
  gap: 3rem;
  width: 30.5rem;
`;
const MyRate = styled.article`
  ${flexCenter}
  flex-direction: column;
  color: ${({ theme }) => theme.colors.mainPink};
`;

const AverageRate = styled.article`
  ${flexCenter}
  flex-direction: column;
  color: ${({ theme }) => theme.colors.grey600};
`;
