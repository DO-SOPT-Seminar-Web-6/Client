import CommentTitle from './Comment/CommentTitle';
import CommentInput from './Comment/CommentInput';
import { DivideLineButtom } from '@styles/common/divideLine';
import CommentsContainer from './Comment/CommentsContainer';

export default function CommentSection() {
  return (
    <>
      <CommentTitle />
      <CommentInput />
      <DivideLineButtom />
      <CommentsContainer />
    </>
  );
}
