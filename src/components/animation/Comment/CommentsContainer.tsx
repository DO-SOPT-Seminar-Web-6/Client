import useGetAnimationCollection from '@hooks/useGetAnimationCollection';
import CommentBox from './CommentBox';
import { RepliesTypes } from 'types/repliesTypes';

export default function CommentsContainer() {
  const { data } = useGetAnimationCollection();
  if (!data || !data.replies || data.replies.length === 0) {
    return null;
  }
  const replyArray: RepliesTypes[] = data.replies;

  return (
    <>
      {replyArray?.map((reply) => {
        const { replyId, content, likeCount } = reply;

        return <CommentBox key={replyId} content={content} likeCount={likeCount} />;
      })}
    </>
  );
}
