import styled from 'styled-components';
import FooterBottomFirstRow from './FooterBottomFirstRow';
import FooterBottomSecondRow from './FooterBottomSecondRow';
import FooterBottomThirdRow from './FooterBottomThirdRow';

/** footer bottom section */
export default function FooterBottom() {
  return (
    <FooterBottomBox>
      <FooterBottomFirstRow />
      <FooterBottomSecondRow />
      <FooterBottomThirdRow />
    </FooterBottomBox>
  );
}

const FooterBottomBox = styled.div`
  ${({ theme }) => theme.fonts.body6};

  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2.2rem 5.8rem 3.5rem;
  color: ${({ theme }) => theme.colors.grey500};
`;
