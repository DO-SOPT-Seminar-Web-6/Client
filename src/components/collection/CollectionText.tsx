import styled from 'styled-components';

interface InCollectionProps {
  title: string;
  likes: number;
}

/** each movie info  */
export default function CollectionText({ title,likes}: InCollectionProps) {
  return (
    <CollectionTextBox>
      <Title>{title}</Title>
      <Likes>
        <span>좋아요 {likes}</span>
      </Likes>
    </CollectionTextBox>
  );
}

const CollectionTextBox = styled.div`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grey600};
`;

const Title = styled.h3`
  ${({ theme }) => theme.fonts.subTitle5};
  line-height: 2.3rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Likes = styled.h3`
  ${({ theme }) => theme.fonts.body3};
  line-height: 2.0rem;
  color: ${({ theme }) => theme.colors.grey600};
`;
