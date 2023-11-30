import styled from 'styled-components';
import Comment from '@components/common/Comment/Comment';
import { mainComments } from '@core/mainComments';

export default function MainCommentDetail() {
  return (
    <MainCommentBox>
      {mainComments &&
        mainComments.map((mainComment) => {
          const { userName, content, isThumbnail } = mainComment;
          return <Comment userName={userName} content={content} isThumbnail={isThumbnail} />;
        })}
    </MainCommentBox>
  );
}

const MainCommentBox = styled.section`
  display: flex;
  flex-direction: row;
  /* stylelint-disable declaration-block-no-shorthand-property-overrides*/
  flex-flow: row wrap;
  gap: 1rem;
  align-items: space-between;
  margin-top: 3.5rem;
  height: 51rem;
`;
