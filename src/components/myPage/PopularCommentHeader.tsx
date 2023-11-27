import React from 'react'
import styled from 'styled-components';
interface InHeaderPropsTypes {
  name: string;
  imgSrc: string;
}

/** Comment user info 부분 */
export default function PopularCommentHeader(props: InHeaderPropsTypes) {
  const { name, imgSrc } = props; 
  
  return(
    <Header>
      <Reviewer>
        <img src={imgSrc} alt="Reviewer 사진"/>
        <Name>{name}</Name>
      </Reviewer>
    </Header>
  )
}

const Header = styled.section`
  display:flex;
  flex: row; 
  padding: 1.2rem 0; 
  width: 30rem;
  height: 5.6rem;
`

const Reviewer = styled.article`
  display:flex;
  flex: row; 
  gap: 1.5rem;
`
const Name = styled.h2`
  padding: 0.5rem 0 0;
  ${({ theme }) => theme.fonts.subTitle3};
`;
