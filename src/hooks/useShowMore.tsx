import { useState } from 'react';

/** 더보기 버튼 클릭 */
export default function useShowMore() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMore = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, handleShowMore };
}
