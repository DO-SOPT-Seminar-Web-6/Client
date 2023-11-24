import { BodyStarFillIc } from '@assets/index';
import styled from 'styled-components';

export default function SetStars() {
  return (
    <StarBox>
      <BodyStarFillIc width="4.5rem" height="4.5rem" />
      <BodyStarFillIc width="4.5rem" height="4.5rem" />
      <BodyStarFillIc width="4.5rem" height="4.5rem" />
      <BodyStarFillIc width="4.5rem" height="4.5rem" />
      <BodyStarFillIc width="4.5rem" height="4.5rem" />
    </StarBox>
  );
}

const StarBox = styled.span`
  width: 27.5rem;
  height: 7rem;
`;
