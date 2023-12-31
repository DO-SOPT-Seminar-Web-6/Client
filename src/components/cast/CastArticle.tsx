import styled from 'styled-components';
import { DataTypes } from 'types/dataTypes';
import useGetMyPageProduction from '@hooks/useGetMyPageProduction';
import CastSection from './CastSection';

export default function CastArticle() {
  const { data } = useGetMyPageProduction();

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }
  return (
    <Article>
      {data &&
        data.map((cast: DataTypes) => {
          const { id, imageUrl, name, role, roleDetail } = cast;
          return (
            <CastSection
              key={`${id}-${name}-${role}`}
              id={id}
              imageUrl={imageUrl}
              name={name}
              role={role}
              roleDetail={roleDetail}
            />
          );
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
