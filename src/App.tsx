import { ThemeProvider } from 'styled-components';
import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import MovieInfo from '@components/common/MovieInfo/MovieInfo';
import BoxOfficeGrade6Img from '@assets/image/boxoffice/boxOfficeGrade6Img.png';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MovieInfo
        imgSrc={BoxOfficeGrade6Img}
        title="마녀 배달부 키키"
        rate={3.8}
        subInfo="감독, 각본"
        tag={['가족', '애니메이션']}
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
