import styled from 'styled-components';
import { CollectDetailLikeBottomIc, CollectDetailMenuBottomIc } from '@assets/index';
import collectDetailProfileImg from '@assets/image/collection/collectDetail/collectDetailProfileImg.png';
import { flexCenter } from '@styles/globalStyle';
import { DivideLineButtom } from '@styles/common/divideLine';

interface InCommentBoxPropsTypes {
  content: string;
  likeCount: number;
}

export default function CommentBox(props: InCommentBoxPropsTypes) {
  const { content, likeCount } = props;
  return (
    <Wrapper>
      <CommentWrapper>
        <CollectDetailProfileImgBox src={collectDetailProfileImg} alt="profile" />
        <TextWrapper>
          <NickNameText>Doo</NickNameText>
          <CommentText>{content}</CommentText>
          <LikesWrapper>
            <CollectDetailLikeBottomIcon />
            <ThumbsUpNumberText>{likeCount}</ThumbsUpNumberText>
            <CollectDetailMenuBottomIcon />
          </LikesWrapper>
        </TextWrapper>
        <YearsAgoText>7년전</YearsAgoText>
      </CommentWrapper>
      <DivideLineButtom />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  height: 11.8rem;
`;

const CommentWrapper = styled.article`
  display: flex;
  width: 100%;
  height: 8.8rem;
`;

const NickNameText = styled.h2`
  ${({ theme }) => theme.fonts.subTitle3};
  margin-bottom: 0.4rem;
`;

const CommentText = styled.p`
  ${({ theme }) => theme.fonts.subTitle6};
  margin-bottom: 1.2rem;
`;

const CollectDetailLikeBottomIcon = styled(CollectDetailLikeBottomIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 59rem;
`;

const LikesWrapper = styled.div`
  ${flexCenter}
  gap: 0.8rem;
  justify-content: flex-start;

  width: 65rem;
`;

const ThumbsUpNumberText = styled.p`
  ${({ theme }) => theme.fonts.subTitle5};
  color: ${({ theme }) => theme.colors.grey600};
`;

const YearsAgoText = styled.p`
  ${({ theme }) => theme.fonts.subTitle5};
  color: ${({ theme }) => theme.colors.grey600};
`;

const CollectDetailMenuBottomIcon = styled(CollectDetailMenuBottomIc)`
  margin-left: 55rem;
  width: 2.4rem;
`;

const CollectDetailProfileImgBox = styled.img`
  margin-right: 0.8rem;
  width: 3.8rem;
  height: 3.8rem;
`;
