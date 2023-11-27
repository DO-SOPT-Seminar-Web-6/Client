import CommentHeader from '@components/comments/CommentHeader';
import { CommentPageLayout } from '@styles/Layout/commentPageLayout';
import React from 'react';

export default function Comment() {
  return (
    <CommentPageLayout>
      <CommentHeader />
    </CommentPageLayout>
  );
}
