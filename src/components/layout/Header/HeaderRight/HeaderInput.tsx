import styled from 'styled-components';
import { flexCenter } from '@styles/globalStyle';
import { BannerSearchIc } from '@assets/index';

/** header right section input */
export default function HeaderInput() {
  return (
    <HeaderSearchForm>
      <HeaderSearchLabel htmlFor="searchContent">
        <BannerSearchIcon />
      </HeaderSearchLabel>
      <HeaderSearchInput id="searchContent" type="text" placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
    </HeaderSearchForm>
  );
}

const HeaderSearchForm = styled.form`
  ${flexCenter}

  gap: 0.7rem;
  background-color: ${({ theme }) => theme.colors.grey200};
  width: 29.8rem;
  height: 3.7rem;
`;

const HeaderSearchLabel = styled.label`
  cursor: pointer;
`;

const HeaderSearchInput = styled.input`
  width: 25.4rem;
  height: 2rem;
`;

const BannerSearchIcon = styled(BannerSearchIc)`
  width: 1.9rem;
  height: 1.9rem;
`;
