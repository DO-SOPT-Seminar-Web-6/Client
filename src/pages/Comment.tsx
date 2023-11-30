import CommentHeader from '@components/comments/CommentHeader';
import CommentSection from '@components/comments/CommentSection';
import { CommentPageLayout } from '@styles/Layout/commentPageLayout';
import { useState } from 'react';

export default function Comment() {
  const [sort, setSort] = useState('default');

  return (
    <CommentPageLayout>
      <CommentHeader
        handleSort={(sort: string) => {
          setSort(sort);
        }}
      />
      <CommentSection sort={sort} />
    </CommentPageLayout>
  );
}
