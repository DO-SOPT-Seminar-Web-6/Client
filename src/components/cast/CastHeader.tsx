import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

export default function CastHeader() {
  const navigate = useNavigate();

  function handleMoveToDirector() {
    navigate('/director');
  }

  return (
    <Header onClick={handleMoveToDirector}>출연/제작</Header>
  )
}

const Header = styled.p`
  ${({ theme }) => theme.fonts.title1}; 
  cursor: pointer;
`