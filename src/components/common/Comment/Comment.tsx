import styled from 'styled-components';
import CommentTop from './CommentTop';
import CommentBottom from './CommentBottom';

interface InContainerTypes {
  isThumbnail?: boolean;
}

interface InCommentPropsTypes extends InContainerTypes {
  userName: string;
  content: string;
}

/** Comment */
export default function Comment(props: InCommentPropsTypes) {
  const { userName, content, isThumbnail = false } = props;

  return (
    <CommentContainer isThumbnail={isThumbnail}>
      <CommentTop userName={userName} isThumbnail={isThumbnail} />
      <CommentMiddleText>{content}</CommentMiddleText>
      <CommentBottom />
    </CommentContainer>
  );
}

const CommentContainer = styled.article<InContainerTypes>`
  display: flex;
  flex-direction: column;
  gap: ${({ isThumbnail }) => (isThumbnail ? '1.2rem' : '1.4rem')};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.grey100};
  padding: 1.2rem;
  width: ${({ isThumbnail }) => (isThumbnail ? '30.4rem' : '48.9rem')};
  height: ${({ isThumbnail }) => (isThumbnail ? '25rem' : '25.1rem')};
`;

const CommentMiddleText = styled.p<InContainerTypes>`
  ${({ theme }) => theme.fonts.body2160};
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
  width: 100%;
  height: ${({ isThumbnail }) => (isThumbnail ? '12.2rem' : '12.1rem')};
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2.3rem;
`;
