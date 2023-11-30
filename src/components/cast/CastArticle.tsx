import CastSection from './CastSection';
import styled from 'styled-components';
import useGetMyPageProduction from '@hooks/useGetMyPageProduction';
import { DataTypes } from 'types/dataTypes';

export default function CastArticle() {
  const { data } = useGetMyPageProduction();

  if (!data) {
    return null;
  }

  console.log('쓰는 곳에서 Data:', data);

  return (
    <Article>
      {data?.map((cast) => {
        const { id, imageUrl, name, role, roleDetail } = cast;
        return <CastSection key={id} imageUrl={imageUrl} name={name} role={role} roleDetail={roleDetail} />;
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
