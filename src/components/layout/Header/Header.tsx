import styled from 'styled-components';
import BannerProfileIc from '@assets/icon/banner/bannerProfileIc.svg';
import bannerSearchIc from '@assets/icon/banner/bannerSearchIc.svg';
import watchaLogoIc from '@assets/icon/banner/watchaLogoIc.svg';
import { flexCenter } from '@styles/globalStyle';

/** header */
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContainerLeft>
        <button>
          <img src={watchaLogoIc} />
        </button>
        <HeaderNav>
          <HeaderText>영화</HeaderText>
          <HeaderText>TV</HeaderText>
          <HeaderText>책</HeaderText>
          <HeaderText>웹툰</HeaderText>
        </HeaderNav>
      </HeaderContainerLeft>
      <HeaderContainerRight>
        <HeaderSearchForm>
          <HeaderSearchLabel htmlFor="searchContent">
            <img src={bannerSearchIc} />
          </HeaderSearchLabel>
          <HeaderSearchInput id="searchContent" type="text" placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
        </HeaderSearchForm>
        <HeaderText>평가하기</HeaderText>
        <HeaderText>소식</HeaderText>
        <button>
          <img src={BannerProfileIc} />
        </button>
      </HeaderContainerRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.3rem;
  padding: 0 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
`;

const HeaderContainerLeft = styled.div`
  ${flexCenter}

  gap: 3rem;
`;

const HeaderNav = styled.nav`
  ${({ theme }) => theme.fonts.body1};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 17.5rem;
  height: 3.3rem;
  color: ${({ theme }) => theme.colors.grey700};
`;

const HeaderText = styled.span`
  cursor: pointer;
`;

const HeaderContainerRight = styled.div`
  ${flexCenter}
  ${({ theme }) => theme.fonts.body3};

  gap: 2rem;
  color: ${({ theme }) => theme.colors.grey700};
`;

const HeaderSearchForm = styled.form`
  ${flexCenter}

  gap: 0.7rem;
  width: 29.8rem;
  height: 3.7rem;
  background-color: ${({ theme }) => theme.colors.grey200};
`;

const HeaderSearchLabel = styled.label`
  cursor: pointer;
`;

const HeaderSearchInput = styled.input`
  width: 25.4rem;
  height: 2rem;
`;
