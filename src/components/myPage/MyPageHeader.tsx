import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import SetButton from './SetButton';
import SetRates from './SetRates';
import SetStars from './SetStars';

interface InHeaderPropsTypes {
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  isExistComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyPageHeader(props: InHeaderPropsTypes) {
  const { comment, setComment, isExistComment } = props;

  return (
    <HeaderBox>
      <Contents>
        <SetStars />
        <SetRates />
        <SetButton comment={comment} setComment={setComment} isExistComment={isExistComment} />
      </Contents>
    </HeaderBox>
  );
}

const HeaderBox = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
  height: 11.2rem;
`;
const Contents = styled.section`
  ${flexCenter};
  gap: 8rem;
  height: 7.2rem;
`;
