import MyPageDescription from '@components/myPage/MyPageDescription';
import { MainContainer } from '@styles/Layout/MainContainer';
import styled from 'styled-components';
import MyPageSide from '@components/myPage/MyPageSide';
import MyPageHeader from '@components/myPage/MyPageHeader';
import MyPageReview from '@components/myPage/MyPageReview';
import MyPagePopularComment from '@components/myPage/MyPagePopularComment';
import { useState } from 'react';

export default function MyPage() {
  const [existComment, isExistComment] = useState(false);
  const [comment, setComment] = useState('');

  return (
    <Section>
      <MyPageSide />
      <MyPageBox>
        <MyPageHeader comment={comment} setComment={setComment} isExistComment={isExistComment} />
        <MyPageReview comment={comment} existComment={existComment} />
        <MyPageDescription />
        <MyPagePopularComment />
      </MyPageBox>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3.1rem;
  background-color: ${({ theme }) => theme.colors.grey200};
  padding: 3rem 5.8rem 10rem 6rem;
`;

const MyPageBox = styled(MainContainer)`
  width: 93.7rem;
`;
