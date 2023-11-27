import { BodyStarFillIc } from '@assets/index';
import styled from 'styled-components';

export default function SetStars() {
  return (
    <StarBox>
      <BodyStarFillIcon />
      <BodyStarFillIcon />
      <BodyStarFillIcon />
      <BodyStarFillIcon />
      <BodyStarFillIcon />
    </StarBox>
  );
}

const StarBox = styled.span`
  width: 27.5rem;
  height: 7rem;
`;

const BodyStarFillIcon = styled(BodyStarFillIc)`
  width: 4.5rem;
  height: 4.5rem;
`;