import styled from 'styled-components';
import ReviewStarFullIc from '@assets/icon/review/reviewStarFullIc.svg';
import ReviewProfile5Img from '@assets/image/review/reviewProfile5Img.png';

interface InContainerTypes {
  isThumbnail?: boolean;
}

interface InCommentTopPropsTypes extends InContainerTypes {
  userName: string;
}

/** Comment user info 부분 */
export default function CommentTop(props: InCommentTopPropsTypes) {
  const { userName, isThumbnail } = props;

  return (
    <CommentTopBox isThumbnail={isThumbnail}>
      <img src={ReviewProfile5Img} alt="user-profile" width={32} height={32} />
      <CommentTopText>{userName}</CommentTopText>
      <CommentTopStars>
        <img src={ReviewStarFullIc} />
        <img src={ReviewStarFullIc} />
        <img src={ReviewStarFullIc} />
        <img src={ReviewStarFullIc} />
        <img src={ReviewStarFullIc} />
      </CommentTopStars>
    </CommentTopBox>
  );
}

const CommentTopBox = styled.div<InContainerTypes>`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
  padding-bottom: 1.2rem;
  width: 100%;
  height: ${({ isThumbnail }) => (isThumbnail ? '3.2rem' : '4.4rem')};
`;

const CommentTopText = styled.span`
  ${({ theme }) => theme.fonts.subTitle3};
`;

const CommentTopStars = styled.div`
  margin-left: auto;
`;
