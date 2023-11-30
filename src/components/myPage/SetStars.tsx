import { BodyStarEmptyIc, BodyStarFillIc } from '@assets/index';
import { flexCenter } from '@styles/globalStyle';
import { useState } from 'react';
import styled from 'styled-components';

export default function SetStars() {
  let starRatingState: Array<boolean> = [false, false, false, false, false];
  const [starRatingOnOff, setStarRatingOnOff] = useState(starRatingState);

  function handleMouseOverStarRating(e: React.MouseEvent, idx: number) {
    e.preventDefault();
    let tempStarRating: Array<boolean> = [...starRatingOnOff];
    for (let i = 0; i < 5; i++) {
      if (i <= idx) {
        tempStarRating[i] = true;
      } else {
        tempStarRating[i] = false;
      }
    }
    setStarRatingOnOff(tempStarRating);
  }

  return (
    <StarBox>
      {starRatingOnOff.map((isFilled, index) => (
        <Star key={index} onMouseOver={(e) => handleMouseOverStarRating(e, index)}>
          {isFilled ? <BodyStarFillIcon /> : <BodyStarEmptyIcon />}
        </Star>
      ))}
    </StarBox>
  );
}

const StarBox = styled.div`
  ${flexCenter}
  width: 27.5rem;
  height: 7rem;
`;

const Star = styled.div`
  ${flexCenter}
  cursor: pointer;
`;

const BodyStarFillIcon = styled(BodyStarFillIc)`
  width: 4.5rem;
  height: 4.5rem;
`;

const BodyStarEmptyIcon = styled(BodyStarEmptyIc)`
  width: 4.5rem;
  height: 4.5rem;
`;
