import CommentHeader from '@components/comments/CommentHeader';
import CommentSection from '@components/comments/CommentSection';
import { CommentPageLayout } from '@styles/Layout/commentPageLayout';
import { useState, Suspense } from 'react';

export default function Comment() {
  const [sort, setSort] = useState('default');

  return (
    <CommentPageLayout>
      <Suspense fallback={<div>로딩 중입니다</div>}>
        <CommentHeader
          handleSort={(sort: string) => {
            setSort(sort);
          }}
        />
        <CommentSection sort={sort} />
      </Suspense>
    </CommentPageLayout>
  );
}
