import CommentTitle from './Comment/CommentTitle';
import CommentInput from './Comment/CommentInput';
import CommentBox from './Comment/CommentBox';
import { DivideLineButtom } from '@styles/common/divideLine';

export default function CommentSection() {
  return (
    <>
      <CommentTitle />
      <CommentInput />
      <DivideLineButtom />
      <CommentBox />
    </>
  );
}
