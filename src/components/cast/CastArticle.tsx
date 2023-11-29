import CastSection from './CastSection';
import styled from 'styled-components';
import { castData } from '@core/castData';

export default function CastArticle() {
  return (
    <Article>
      {castData &&
        castData.map((cast) => {
          const { imgSrc, name, role } = cast;
          return <CastSection imgSrc={imgSrc} name={name} role={role} />;
        })}
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: row;
  /* stylelint-disable declaration-block-no-shorthand-property-overrides */
  flex-flow: row wrap;
  gap: 1.5rem;
  align-items: space-between;
  width: 123.6rem;
  height: 30rem;
`;
