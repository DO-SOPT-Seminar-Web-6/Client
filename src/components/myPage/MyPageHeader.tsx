import styled from 'styled-components'
import SetStars from './SetStars'
import SetRates from './SetRates'
import SetButton from './SetButton'
import { flexCenter } from '@styles/globalStyle'

interface InHeaderPropsTypes{
  writeComment: boolean;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  isWriteComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyPageHeader(props:InHeaderPropsTypes) {

  const {writeComment, comment, setComment, isWriteComment} = props;
  return (
    <HeaderBox>
      <Contents>
        <SetStars/>
        <SetRates/>
        <SetButton writeComment={writeComment} comment={comment} setComment={setComment} isWriteComment={isWriteComment}/>
      </Contents>
    </HeaderBox>
  )
}

const HeaderBox= styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
  height:11.2rem; 
`
const Contents=styled.section`
  ${flexCenter};
  gap:8rem;
  height:7.2rem;
`