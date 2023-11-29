import styled from 'styled-components';

export default function MyPageDescription() {
  return (
    <Description>
      화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께 어머니의 고향으로 간다. 어머니에 대한 그리움과 새로운
      보금자리에 적응하느라 힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고, 저택에서 일하는 일곱
      할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다. 그러던 어느 날, ‘마히토’는 사라져버린
      새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고,왜가리가 안내하는 대로 이세계(異世界)의 문을 통과하는데…!
    </Description>
  );
}

const Description = styled.p`
  border-top: 1px solid ${({ theme }) => theme.colors.grey400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
  padding: 4rem 0;
  ${({ theme }) => theme.fonts.body2160};
  height: 15.7rem;
  color: ${({ theme }) => theme.colors.grey600};
`;
