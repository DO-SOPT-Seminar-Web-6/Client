import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import { CastDetailLikeIc } from '@assets/index';

/** director page - like */
export default function DirectorLike() {
  return (
    <LikeBox>
      <CastDetailLikeIc />
      <LikeText>좋아요 2,688명이 이 인물을 좋아합니다</LikeText>
    </LikeBox>
  );
}

const LikeBox = styled.div`
  ${flexCenter}

  gap: 0.4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  padding: 2.9rem;
`;

const LikeText = styled.span`
  ${({ theme }) => theme.fonts.subTitle5};

  color: ${({ theme }) => theme.colors.grey600};
`;
