import styled from 'styled-components';
import { ReviewStarFullIc, ReviewStarEmptyIc } from '@assets/index';
import { ReviewStarIconStyle } from '@styles/common/commonIcon';
interface InHeaderPropsTypes {
  name: string;
  imageUrl: string;
  star: number;
}

export default function PopularCommentHeader(props: InHeaderPropsTypes) {
  const { name, imageUrl, star } = props;

  return (
    <Header>
      <Reviewer>
        <img src={imageUrl} alt="Reviewer 사진" />
        <Name>{name}</Name>
      </Reviewer>
      <CommentStars>
        <ReviewStarFullIcon />
        <ReviewStarFullIcon />
        <ReviewStarFullIcon />
        <ReviewStarFullIcon />
        {star < 8 && <ReviewStarFullIcon />}
        {star > 8 && <ReviewStarEmptyIcon />}
      </CommentStars>
    </Header>
  );
}

const Header = styled.section`
  display: flex;
  gap: 10rem;
  padding: 1.2rem 0;
  width: 100%;
  height: 5.6rem;
`;

const Reviewer = styled.article`
  display: flex;
  gap: 1.5rem;
  width: 80%;
`;

const Name = styled.h2`
  padding: 0.5rem 0 0;
  ${({ theme }) => theme.fonts.subTitle3};
`;

const CommentStars = styled.section`
  display: flex;
  padding: 0.5rem 0 0;
`;
const ReviewStarFullIcon = styled(ReviewStarFullIc)`
  ${ReviewStarIconStyle}
`;

const ReviewStarEmptyIcon = styled(ReviewStarEmptyIc)`
  ${ReviewStarIconStyle}
`;
