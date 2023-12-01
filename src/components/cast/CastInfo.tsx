import styled from 'styled-components';

interface InCastSectionPropsTypes {
  name: string;
  role: string;
  roleDetail: string;
}
export default function CastInfo({ name, role, roleDetail }: InCastSectionPropsTypes) {
  return (
    <CastInfoBox>
      <CastName>{name}</CastName>
      <CastRole>
        {role} | {roleDetail}
      </CastRole>
    </CastInfoBox>
  );
}

const CastInfoBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
  padding: 0.2rem 0;
  width: 22.9rem;
  height: 6.3rem;
`;

const CastName = styled.p`
  line-height: 2.4rem;
  ${({ theme }) => theme.fonts.subTitle5};
`;

const CastRole = styled.p`
  ${({ theme }) => theme.fonts.body5};
  line-height: 2.1rem;
  color: ${({ theme }) => theme.colors.grey600};
`;
