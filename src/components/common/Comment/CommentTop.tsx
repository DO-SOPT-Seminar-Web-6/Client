import { ReviewStarFullIc, ReviewStarEmptyIc } from '@assets/index';
import styled from 'styled-components';

interface InCommentTopPropsTypes {
  imageUrl: string;
  name: string;
  star: number;
  isThumbnail?: boolean;
}

/** Comment user info 부분 */
export default function CommentTop(props: InCommentTopPropsTypes) {
  const { imageUrl, name, star, isThumbnail } = props;
  const starCount = star / 2;

  const starIcons = Array.from({ length: starCount }, (_, index) => <ReviewStarFullIc key={index} />);
  const unStarIcons = Array.from({ length: 5 - starCount }, (_, index) => <ReviewStarEmptyIc key={index} />);

  return (
    <CommentTopBox $isThumbnail={isThumbnail}>
      <img src={imageUrl} alt="user-profile" width={32} height={32} />
      <CommentTopText>{name}</CommentTopText>
      <CommentTopStars>
        {starIcons}
        {unStarIcons}
      </CommentTopStars>
    </CommentTopBox>
  );
}

interface InCommentTopBoxPropsTypes {
  $isThumbnail?: boolean;
}

const CommentTopBox = styled.div<InCommentTopBoxPropsTypes>`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
  padding-bottom: 1.2rem;
  width: 100%;
  height: ${({ $isThumbnail }) => ($isThumbnail ? '3.2rem' : '4.4rem')};
`;

const CommentTopText = styled.span`
  ${({ theme }) => theme.fonts.subTitle3};
`;

const CommentTopStars = styled.div`
  margin-left: auto;
`;
