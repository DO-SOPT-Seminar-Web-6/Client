import styled from 'styled-components';

interface InMovieTagProps {
  tag?: string[];
}

/** each movie info  */
export default function MovieTag({ tag }: InMovieTagProps) {
  return (
    <ArticleTagList>
      {tag && tag.map((item, index) => <ArticleTagListItem key={`${item} - ${index}`}>{item}</ArticleTagListItem>)}
    </ArticleTagList>
  );
}

const ArticleTagList = styled.ul`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: flex-start;
`;

const ArticleTagListItem = styled.li`
  ${({ theme }) => theme.fonts.body5};

  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 22px;
  padding: 0.4rem 1.2rem;
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.grey600};
`;
