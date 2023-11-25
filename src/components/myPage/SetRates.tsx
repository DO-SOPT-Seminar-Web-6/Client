import { flexCenter } from '@styles/globalStyle'
import React from 'react'
import styled from 'styled-components'
export default function SetRates() {
  return (
    <Rate>
      <MyRate>
        <p>3.9</p>
        <h2>내 별점</h2>
      </MyRate>
      <AverageRate>
        <p>3.4</p>
        <h2>평균 별점(3.2만명)</h2>
      </AverageRate>
    </Rate>
  );
}
const Rate = styled.span`
  ${flexCenter}; 
  gap: 3rem;
  width: 30.5rem;
`
const MyRate = styled.div`
  ${flexCenter}
  flex-direction: column;
  color: ${({ theme }) => theme.colors.mainPink};
  &>p{
    ${({ theme }) => theme.fonts.subTitle7};
    line-height:5.1rem;
  }
  &>h2{
    ${({ theme }) => theme.fonts.body5};
    line-height:1.7rem;
  }
`

const AverageRate = styled.div`
  ${flexCenter}
  flex-direction: column;
  color: ${({ theme }) => theme.colors.grey600};
  &>p{
    ${({ theme }) => theme.fonts.subTitle7};
    line-height:5.1rem;
  }
  &>h2{
    ${({ theme }) => theme.fonts.body5};
    line-height:1.7rem;
  }
`