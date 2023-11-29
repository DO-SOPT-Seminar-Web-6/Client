import CommentHeader from '@components/comments/CommentHeader';
import CommentSection from '@components/comments/CommentSection';
import { CommentPageLayout } from '@styles/Layout/commentPageLayout';

export default function Comment() {
  return (
    <CommentPageLayout>
      <CommentHeader />
      <CommentSection />
    </CommentPageLayout>
  );
}
