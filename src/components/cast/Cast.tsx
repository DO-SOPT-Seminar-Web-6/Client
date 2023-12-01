import styled from 'styled-components';
import Button from '@components/common/Button/Button';
import { MainContainer } from '@components/layout/Main/MainContainer';
import useShowMore from '@hooks/useShowMore';
import CastHeader from './CastHeader';
import CastArticle from './CastArticle';

export default function Cast() {
  const { isOpen, handleShowMore } = useShowMore();

  return (
    <CastContainer>
      <CastHeader />
      <CastDetailContainer>
        <CastArticle />
        <Button isOpen={isOpen} handleShowMore={handleShowMore} />
      </CastDetailContainer>
    </CastContainer>
  );
}

const CastContainer = styled(MainContainer)`
  gap: 3.5rem;
  padding: 5.5rem 6rem;
  height: 54.8rem;
`;
const CastDetailContainer = styled(MainContainer)`
  gap: 3.5rem;
  align-items: center;
  height: 36.8rem;
`;
