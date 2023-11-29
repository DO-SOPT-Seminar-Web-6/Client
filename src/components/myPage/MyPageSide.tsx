import styled from 'styled-components';
import BodyPosterImg from '@assets/image/body/bodyPosterImg.png';
import BodyBargraphImg from '@assets/image/body/bodyBargraphImg.png';
export default function MyPageSide() {
  return (
    <Side>
      <img src={BodyPosterImg} alt="그대들은 어떻게 살아가는가 포스터" />
      <img src={BodyBargraphImg} alt="별점 그래프" />
    </Side>
  );
}

const Side = styled.aside`
  width: 28.1rem;
  ${({ theme }) => theme.colors.grey200};
`;
